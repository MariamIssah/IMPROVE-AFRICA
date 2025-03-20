const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [0, 'Quantity cannot be negative']
    },
    unit: {
        type: String,
        required: [true, 'Unit of measurement is required'],
        enum: ['kg', 'tons', 'pieces', 'bags']
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        enum: ['grains', 'vegetables', 'fruits', 'nuts', 'spices', 'legumes', 'oilseeds', 'roots-tubers', 'other']
    },
    images: [{
        type: String,
        required: [true, 'At least one product image is required']
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        country: {
            type: String,
            required: [true, 'Country is required']
        },
        region: {
            type: String,
            required: [true, 'Region is required']
        },
        city: String
    },
    quality: {
        type: String,
        enum: ['Grade A', 'Grade B', 'Grade C'],
        required: true
    },
    harvestDate: {
        type: Date
    },
    certifications: [{
        type: String,
        enum: ['Organic', 'Fair Trade', 'Non-GMO', 'Sustainable Farming', 'Other']
    }],
    status: {
        type: String,
        enum: ['available', 'sold', 'pending'],
        default: 'available'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt timestamp before saving
productSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Add indexes for better search performance
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, status: 1 });
productSchema.index({ 'location.country': 1, 'location.region': 1 });

module.exports = mongoose.model('Product', productSchema); 