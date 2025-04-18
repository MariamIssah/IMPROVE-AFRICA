# IMPROVE AFRICA Marketplace

A marketplace application for agricultural products from Ghana.

## Features

- Display products by category
- Product detail pages with order forms
- In-memory order storage
- Email notifications for new orders

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Start the server:

   ```
   node server.js
   ```

3. Access the marketplace at:
   ```
   http://localhost:3002/imarket.html
   ```

## Email Notifications

To enable email notifications to `improveafrica01@gmail.com` when orders are placed:

1. Create an app password for the Gmail account:

   - Go to your Google Account settings
   - Select "Security"
   - Under "Signing in to Google", select "2-Step Verification"
   - At the bottom of the page, select "App passwords"
   - Generate a new app password for "Mail" and "Other"
   - Copy the generated password

2. Set the password in one of two ways:

   **Option 1: Environment Variable (Recommended)**

   ```
   # Windows
   set EMAIL_PASSWORD=your_app_password_here
   node server.js

   # Linux/Mac
   EMAIL_PASSWORD=your_app_password_here node server.js
   ```

   **Option 2: Edit config.js file (Less secure)**

   ```javascript
   module.exports = {
     emailConfig: {
       service: "gmail",
       auth: {
         user: "improveafrica01@gmail.com",
         pass: "your_app_password_here", // Replace with the generated app password
       },
     },
   };
   ```

3. Uncomment the email sending line in `server.js`:

   ```javascript
   // Find this line:
   // transporter.sendMail(mailOptions);

   // Uncomment it to:
   transporter.sendMail(mailOptions);
   ```

4. Restart the server

## Product Categories

The marketplace includes products from the following categories:

- Grains
- Legumes
- Oilseeds
- Roots & Tubers
- Fruits
- Vegetables
- Spices

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (Community Edition)

### Database Setup

1. **Install MongoDB**:

   - Download and install [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
   - Make sure the MongoDB service is running

2. **Set Up the Database**:

   - Run the seed script to populate the database with sample products:
     ```
     node seed.js
     ```

3. **Configure Environment Variables** (optional):
   - Copy the `.env.example` file to `.env` if you need to customize settings
   - Default configuration uses local MongoDB instance

### Running the Application

1. **Install Dependencies**:

   ```
   npm install
   ```

2. **Start the Server**:

   ```
   npm start
   ```

   or for development:

   ```
   npm run dev
   ```

3. **Access the Marketplace**:
   - Open your browser and navigate to `http://localhost:3000/market.html`
   - You can browse products without logging in

## Troubleshooting

If you encounter issues with the application:

1. **Run the troubleshooting script**:

   ```
   node troubleshoot.js
   ```

   This will check your MongoDB installation, database connectivity, and server status.

2. **Check MongoDB installation**:

   ```
   node check-mongodb.js
   ```

   This script specifically checks if MongoDB is properly installed and accessible.

3. **Common issues and solutions**:

   - **No products displaying**: Make sure you've run the seed script (`node seed.js`)
   - **Server won't start**: Ensure MongoDB is running and accessible
   - **Connection errors**: Check if MongoDB service is active on your system

4. **Debugging tools**:
   - The application includes enhanced error reporting in the browser
   - Check your browser's console for detailed error messages
   - Server logs may provide additional information about API failures

## API Endpoints

- `GET /api/test` - Test API connectivity
- `GET /api/products` - Get all products
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `GET /api/products/search/:query` - Search products

## License

This project is licensed under the MIT License.
