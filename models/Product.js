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
        min: [0, 'Price cannot be negative'],
        description: 'Price in Ghana Cedis (GH₵)'
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [0, 'Quantity cannot be negative']
    },
    unit: {
        type: String,
        default: 'tons'
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        enum: ['grains', 'vegetables', 'fruits', 'nuts', 'spices', 'legumes', 'oilseeds', 'roots-tubers', 'other']
    },
    images: [{
        type: String
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    location: {
        country: {
            type: String,
            default: 'Ghana'
        },
        region: {
            type: String,
            required: [true, 'Region is required']
        },
        city: {
            type: String
        }
    },
    quality: {
        type: String,
        default: 'Grade A'
    },
    harvestDate: {
        type: Date
    },
    certifications: [{
        type: String
    }],
    status: {
        type: String,
        default: 'available',
        enum: ['available', 'sold', 'pending']
    }
}, {
    timestamps: true
});

// Add text index for search
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema); 