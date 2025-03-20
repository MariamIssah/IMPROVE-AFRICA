require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const testUser = {
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    role: "buyer",
    location: {
        country: "Ghana",
        region: "Greater Accra",
        city: "Accra"
    },
    phoneNumber: "+233111111111",
    isVerified: true
};

async function createTestUser() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/improve-africa');

        // Check if user already exists
        const existingUser = await User.findOne({ email: testUser.email });
        if (existingUser) {
            console.log('Test user already exists');
            mongoose.disconnect();
            return;
        }

        // Create new user
        const user = await User.create(testUser);
        console.log('Test user created successfully');
        
        // Disconnect from MongoDB
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error creating test user:', error);
        process.exit(1);
    }
}

// Run the function
createTestUser(); 