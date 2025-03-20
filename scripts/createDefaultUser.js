require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const defaultUser = {
    name: "Improve Africa Admin",
    email: "admin@improveafrica.com",
    password: "Admin@123",
    role: "admin",
    location: {
        country: "Ghana",
        region: "Greater Accra",
        city: "Accra"
    },
    phoneNumber: "+233000000000",
    isVerified: true
};

async function createDefaultUser() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/improve-africa', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Check if user already exists
        const existingUser = await User.findOne({ email: defaultUser.email });
        if (existingUser) {
            console.log('Default user already exists');
            return existingUser;
        }

        // Create new user
        const user = await User.create(defaultUser);
        console.log('Default user created successfully');
        return user;
    } catch (error) {
        console.error('Error creating default user:', error);
        process.exit(1);
    }
}

// Export for use in other scripts
module.exports = createDefaultUser;

// If running directly, create user and disconnect
if (require.main === module) {
    createDefaultUser()
        .then(() => mongoose.disconnect())
        .catch(error => {
            console.error('Error:', error);
            process.exit(1);
        });
} 