// Get all products with filters
async function getProducts(filters = {}) {
    try {
        // Build query string from filters
        const queryString = Object.entries(filters)
            .filter(([_, value]) => value !== undefined && value !== '')
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');

        const response = await fetch(`/api/products?${queryString}`);
        const data = await response.json();

        if (data.success) {
            return { success: true, products: data.data, pagination: data.pagination };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Get single product
async function getProduct(productId) {
    try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();

        if (data.success) {
            return { success: true, product: data.data };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Create new product
async function createProduct(productData) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Not authorized');
        }

        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });

        const data = await response.json();

        if (data.success) {
            return { success: true, product: data.data };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Update product
async function updateProduct(productId, updateData) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Not authorized');
        }

        const response = await fetch(`/api/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
        });

        const data = await response.json();

        if (data.success) {
            return { success: true, product: data.data };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Delete product
async function deleteProduct(productId) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Not authorized');
        }

        const response = await fetch(`/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.success) {
            return { success: true, message: data.message };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Get seller's products
async function getSellerProducts() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Not authorized');
        }

        const response = await fetch('/api/products/seller/products', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.success) {
            return { success: true, products: data.data };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Helper function to format product data for display
function formatProductData(product) {
    return {
        ...product,
        formattedPrice: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(product.price),
        formattedDate: new Date(product.createdAt).toLocaleDateString(),
        statusBadgeClass: getStatusBadgeClass(product.status)
    };
}

// Helper function to get status badge class
function getStatusBadgeClass(status) {
    const statusClasses = {
        available: 'badge-success',
        pending: 'badge-warning',
        sold: 'badge-danger'
    };
    return statusClasses[status] || 'badge-secondary';
} 