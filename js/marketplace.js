// Marketplace functionality
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const loadingIndicator = document.getElementById('loading');
    const noResults = document.getElementById('no-results');
    const searchInput = document.getElementById('search-input');
    const regionFilter = document.getElementById('region-filter');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const productModal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    let products = [];
    let filteredProducts = [];

    // Fetch products from the API
    async function fetchProducts() {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            products = data.data;
            filteredProducts = [...products];
            displayProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
            showError('Failed to load products. Please try again later.');
        } finally {
            loadingIndicator.style.display = 'none';
        }
    }

    // Display products in the grid
    function displayProducts(productsToShow) {
        productsContainer.innerHTML = '';
        
        if (productsToShow.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        
        productsToShow.forEach(product => {
            const card = createProductCard(product);
            productsContainer.appendChild(card);
        });
    }

    // Create a product card element
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden';
        
        const certificationBadges = product.certifications.map(cert => 
            `<span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">${cert}</span>`
        ).join('');

        card.innerHTML = `
            <div class="relative">
                <img src="${product.images[0] || 'https://via.placeholder.com/300x200'}" 
                     alt="${product.name}" 
                     class="w-full h-48 object-cover"/>
                ${product.certifications.includes('Organic') ? 
                    '<span class="badge-organic">Organic</span>' : ''}
            </div>
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-2">${product.description.substring(0, 100)}...</p>
                <div class="mb-3">
                    ${certificationBadges}
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-lg font-bold text-green-700">$${product.price}/ton</span>
                    <span class="text-sm text-gray-500">${product.quantity} tons available</span>
                </div>
                <div class="flex justify-between items-center text-sm text-gray-500">
                    <span>${product.location.city}, ${product.location.region}</span>
                    <span>Grade: ${product.quality}</span>
                </div>
                <button class="view-details mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
                        data-product-id="${product._id}">
                    View Details
                </button>
            </div>
        `;

        // Add click event for the view details button
        const viewDetailsBtn = card.querySelector('.view-details');
        viewDetailsBtn.addEventListener('click', () => showProductDetails(product));

        return card;
    }

    // Show product details in modal
    function showProductDetails(product) {
        modalContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <img src="${product.images[0] || 'https://via.placeholder.com/500x400'}" 
                         alt="${product.name}" 
                         class="w-full rounded-lg"/>
                </div>
                <div>
                    <h2 class="text-3xl font-bold mb-4">${product.name}</h2>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="mb-4">
                        <h3 class="font-semibold mb-2">Certifications:</h3>
                        <div class="flex flex-wrap gap-2">
                            ${product.certifications.map(cert => 
                                `<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full">${cert}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <h3 class="font-semibold">Price</h3>
                            <p class="text-2xl text-green-700">$${product.price}/ton</p>
                        </div>
                        <div>
                            <h3 class="font-semibold">Available Quantity</h3>
                            <p class="text-2xl">${product.quantity} tons</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <h3 class="font-semibold mb-2">Location</h3>
                        <p>${product.location.city}, ${product.location.region}, ${product.location.country}</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="font-semibold mb-2">Quality Grade</h3>
                        <p>${product.quality}</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="font-semibold mb-2">Harvest Date</h3>
                        <p>${new Date(product.harvestDate).toLocaleDateString()}</p>
                    </div>
                    <button class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                        Contact Seller
                    </button>
                </div>
            </div>
        `;
        productModal.classList.remove('hidden');
    }

    // Filter products based on search, region, and category
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;
        const activeCategory = document.querySelector('.category-filter.filter-active').dataset.category;

        filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesRegion = !selectedRegion || product.location.region === selectedRegion;
            const matchesCategory = activeCategory === 'all' || 
                                  (activeCategory === 'organic' ? product.certifications.includes('Organic') : 
                                  product.category === activeCategory);

            return matchesSearch && matchesRegion && matchesCategory;
        });

        displayProducts(filteredProducts);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterProducts);
    regionFilter.addEventListener('change', filterProducts);

    categoryFilters.forEach(button => {
        button.addEventListener('click', () => {
            categoryFilters.forEach(btn => btn.classList.remove('filter-active'));
            button.classList.add('filter-active');
            filterProducts();
        });
    });

    closeModal.addEventListener('click', () => {
        productModal.classList.add('hidden');
    });

    document.getElementById('clear-filters').addEventListener('click', () => {
        searchInput.value = '';
        regionFilter.value = '';
        categoryFilters.forEach(btn => {
            btn.classList.remove('filter-active');
            if (btn.dataset.category === 'all') {
                btn.classList.add('filter-active');
            }
        });
        filterProducts();
    });

    // Initialize
    fetchProducts();
}); 