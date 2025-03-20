// API client for interacting with the Express backend

const API_URL = 'http://localhost:3000/api';

// Helper function to handle API responses
async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.error || `HTTP error ${response.status}`;
    console.error(`API Error: ${errorMessage}`);
    throw new Error(errorMessage);
  }
  return response.json();
}

// Fetch all products
async function fetchProducts() {
  try {
    console.log('Fetching all products...');
    const response = await fetch(`${API_URL}/products`);
    const data = await handleResponse(response);
    console.log(`Received ${data.length} products`);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Fetch products by category
async function fetchProductsByCategory(category) {
  try {
    console.log(`Fetching products in category: ${category}`);
    const response = await fetch(`${API_URL}/products/category/${category}`);
    const data = await handleResponse(response);
    console.log(`Received ${data.length} products in category ${category}`);
    return data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
}

// Fetch featured products
async function fetchFeaturedProducts() {
  try {
    console.log('Fetching featured products...');
    const response = await fetch(`${API_URL}/products/featured`);
    const data = await handleResponse(response);
    console.log(`Received ${data.length} featured products`);
    return data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
}

// Fetch product by ID
async function fetchProductById(id) {
  try {
    console.log(`Fetching product with ID: ${id}`);
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await handleResponse(response);
    console.log(`Received product: ${data.name}`);
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}

// Create a new product
async function createProduct(productData) {
  try {
    console.log('Creating new product:', productData.name);
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    const data = await handleResponse(response);
    console.log(`Product created with ID: ${data.id}`);
    return data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

// Update an existing product
async function updateProduct(id, productData) {
  try {
    console.log(`Updating product with ID: ${id}`);
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    const data = await handleResponse(response);
    console.log(`Product updated: ${data.name}`);
    return data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
}

// Delete a product
async function deleteProduct(id) {
  try {
    console.log(`Deleting product with ID: ${id}`);
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage = errorData?.error || `HTTP error ${response.status}`;
      console.error(`API Error: ${errorMessage}`);
      throw new Error(errorMessage);
    }
    
    console.log(`Product with ID ${id} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
}

// Search products
async function searchProducts(query) {
  try {
    console.log(`Searching products for: "${query}"`);
    const response = await fetch(`${API_URL}/products/search/${query}`);
    const data = await handleResponse(response);
    console.log(`Found ${data.length} products matching "${query}"`);
    return data;
  } catch (error) {
    console.error(`Error searching products for "${query}":`, error);
    throw error;
  }
}

// Seed the database with sample products
async function seedProducts() {
  try {
    console.log('Seeding database with sample products...');
    const response = await fetch(`${API_URL}/seed`);
    const data = await handleResponse(response);
    console.log('Seed result:', data.message);
    return data;
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

// Export all functions
export {
  fetchProducts,
  fetchProductsByCategory,
  fetchFeaturedProducts,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  seedProducts
}; 