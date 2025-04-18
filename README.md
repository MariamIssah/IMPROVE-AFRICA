# IMPROVE AFRICA

🚀 Empowering Farmers & Communities for Agricultural Transformation

🌍 Overview
IMPROVE AFRICA is a platform dedicated to empowering young farmers and marginalized communities across Africa, creating sustainable livelihoods through agricultural resources, training, and market access opportunities.

🔹 Mission
Transforming African agriculture by creating opportunities for farmers, facilitating market access, and building sustainable agricultural communities across the continent.

🚀 Key Features
Farmer Mentorship – Connecting experienced agricultural experts with young farmers.
Agricultural Training – Providing education in modern farming techniques and sustainable practices.
Market Access – Creating pathways for farmers to sell products at fair prices.
Women in Agriculture – Special initiatives empowering women farmers with resources and opportunities.

📌 Features
🔹 Functional Requirements
🛠 User & Community Features
✔ Access to agricultural resources and training materials
✔ Regional agricultural initiatives and information
✔ Success stories and case studies
✔ Educational resources for farmers

📋 Agricultural Support
✔ Farmer Mentorship programs with experienced agricultural experts
✔ Agricultural Training in modern techniques and sustainable practices
✔ Market Access facilitation for small-scale farmers
✔ Special initiatives for women in agriculture

📊 Impact Tracking
✔ 1000+ Farmers Supported across the platform
✔ Present in 12 African Countries
✔ Created 500+ Jobs in the agricultural sector

🔧 Platform Management
✔ Content management for educational resources
✔ User access and registration
✔ Regional program management
✔ Success story collection and publication

⚙️ Technologies Used
🖥 Backend
Language: JavaScript (Node.js)
Framework: Express.js
Database: MongoDB
Libraries:
mongoose (MongoDB ODM)
nodemailer (email services)
cors (CORS policy handling)
dotenv (environment variables)

🌐 Frontend
Languages: HTML, CSS, JavaScript
Frameworks: Vanilla JS with modern ES6+ features
CSS: Custom styling with responsive design
Libraries: Various JS modules for UI functionality

🛠 Additional Tools
Package Manager: npm
Testing & Debugging: Browser DevTools
Deployment: Vercel, Netlify, Render

🏗 Setup & Installation
✅ Prerequisites
Before running IMPROVE AFRICA, ensure you have:

✔ Node.js (v14+)
✔ npm (v6+)
✔ MongoDB (Community Edition)
✔ Git
✔ Gmail Account (for email notifications via Nodemailer)

🚀 Installation Steps
1️⃣ Clone the Repository

```bash
git clone https://github.com/MariamIssah/IMPROVE-AFRICA.git
cd IMPROVE-AFRICA
```

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Configure MongoDB
✔ Install MongoDB Community Edition
✔ Verify MongoDB is running:

```bash
node check-mongodb.js
```

✔ Set up the database connection in .env file:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/improve-africa?retryWrites=true&w=majority
```

✔ Seed the database:

```bash
node seed-products.js
```

or

```bash
node simple-seed.js
```

4️⃣ Configure Email Notifications
✔ Create a Gmail app password
✔ Set the password via environment variable:

```bash
# Windows
set EMAIL_PASSWORD=your_app_password_here
node server.js

# Linux/Mac
EMAIL_PASSWORD=your_app_password_here node server.js
```

✔ Or edit config.js file with credentials for improveafrica01@gmail.com

5️⃣ Start the Server

```bash
# Windows
start-server.bat

# Linux/Mac
bash start-server.sh

# Or directly with Node.js
node server.js
```

6️⃣ Access the Platform
Open http://localhost:3002/index1.html in your browser

🚀 Production Build & Deployment
🛠 Backend
✔ Deploy on Render:

- Connect GitHub repository
- Environment: Node
- Build Command: npm install
- Start Command: node server.js
- Set environment variables:
  - NODE_ENV: production
  - EMAIL_PASSWORD: Your Gmail app password
  - MONGODB_URI: Your MongoDB Atlas connection string

🖥 Frontend
✔ Deploy on Vercel:

- Connect GitHub repository
- Deploy from main branch
- Set environment variables to connect to backend

✔ Deploy on Netlify:

- Connect GitHub repository
- GitHub integration with automatic deployments
- Environment variable configuration

🚀 Current Deployments
✔ Netlify: https://improveafrica1.netlify.app/index1
✔ Vercel: https://improve-africa-1.vercel.app/index1.html
✔ Backend: Deployed on Render

👨‍💻 Website Sections
✔ Home: Introduction to the platform and mission
✔ About Us: Organization information and goals
✔ Programs: Mentorship, Training, Market Access, Women in Agriculture
✔ Regions: Geographic coverage areas
✔ Jobs: Employment opportunities
✔ Raw Materials: Agricultural product information
✔ Resources: Educational materials and tools
✔ Contact: Get in touch with IMPROVE AFRICA team

🔍 Troubleshooting
✔ Run node troubleshoot.js to check system setup
✔ Check MongoDB connection and service status
✔ Verify CORS configuration for frontend-backend communication
✔ Check browser console for detailed error messages

📂 Project Structure
✔ backend/ - Server-side logic and API endpoints
✔ frontend/ - Client-side code
✔ css/ - Stylesheets
✔ images/ - Media assets
✔ scripts/ - JavaScript modules
✔ server.js - Main server application
✔ static-server.js - Static file server

📞 Contact
📧 Email: improveafrica01@gmail.com
🔗 GitHub Repository: https://github.com/MariamIssah/IMPROVE-AFRICA.git
🔗 Deployed websites:
✔ Netlify: https://improveafrica1.netlify.app/index1
✔ Vercel: https://improve-africa-1.vercel.app/index1.html

⚖️ License
This project is licensed under the MIT License.
