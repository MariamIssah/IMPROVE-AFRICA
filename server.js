const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: '*', // Allow all origins during development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger middleware for debugging
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  if (req.method === 'POST' && req.url.includes('/api/users/login')) {
    console.log('Login request body:', JSON.stringify({
      email: req.body.email,
      password: '****' // Don't log actual passwords
    }));
  }
  
  // Add response logging
  const originalSend = res.send;
  res.send = function(body) {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] Response ${res.statusCode} (${duration}ms)`);
    if (req.url.includes('/api/users')) {
      try {
        // For security, don't log full response details with sensitive data
        const parsedBody = typeof body === 'string' ? JSON.parse(body) : body;
        console.log('Response success:', parsedBody.success);
        if (!parsedBody.success) {
          console.log('Response message:', parsedBody.message);
        }
      } catch (e) {
        console.log('Could not parse response body');
      }
    }
    return originalSend.call(this, body);
  };
  
  next();
});

// Serve static files
app.use(express.static(__dirname));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Additional routes for direct access to HTML files
app.get('/market', (req, res) => {
    res.sendFile(path.join(__dirname, 'market.html'));
});

// API Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong!'
    });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});

// Start server
function startServer() {
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });

    // Handle port in use error
    server.on('error', (e) => {
        if (e.code === 'EADDRINUSE') {
            console.log(`Port ${PORT} is in use, trying ${PORT + 1}...`);
            setTimeout(() => {
                server.close();
                process.env.PORT = PORT + 1;
                startServer();
            }, 1000);
        }
    });
}

startServer(); 