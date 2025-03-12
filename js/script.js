// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header on scroll
    const scrollWatcher = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', scrollWatcher);

    // Add active class to nav links based on current page
    const currentLocation = window.location.pathname;
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    navLinksItems.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith('index.html') && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });

    // Initialize testimonial slider if it exists
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider && testimonialSlider.children.length > 1) {
        let currentSlide = 0;
        const slides = testimonialSlider.children;
        const slideCount = slides.length;
        
        // Show only the first slide initially
        for (let i = 1; i < slideCount; i++) {
            slides[i].style.display = 'none';
        }
        
        // Auto advance slides every 5 seconds
        setInterval(() => {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slideCount;
            slides[currentSlide].style.display = 'flex';
        }, 5000);
    }

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-toggle i');
            
            question.addEventListener('click', () => {
                // Toggle the current item
                answer.classList.toggle('active');
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
                
                // If the answer is now active, show it, otherwise hide it
                if (answer.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                }
            });
        });
    }

    // Resources page search and filter functionality
    const resourceSearch = document.getElementById('resource-search');
    const resourceCategoryFilter = document.getElementById('resource-category');
    const resourceFormatFilter = document.getElementById('resource-format');
    const resourceRegionFilter = document.getElementById('resource-region');

    // Resource items to filter (all cards across different sections)
    const resourceItems = document.querySelectorAll('.book-card, .pdf-card, .article-card, .video-card, .material-card');

    if (resourceSearch && resourceItems.length > 0) {
        // Function to filter resources based on search and filter values
        const filterResources = () => {
            const searchValue = resourceSearch.value.toLowerCase();
            const categoryValue = resourceCategoryFilter ? resourceCategoryFilter.value : 'all';
            const formatValue = resourceFormatFilter ? resourceFormatFilter.value : 'all';
            const regionValue = resourceRegionFilter ? resourceRegionFilter.value : 'all';

            resourceItems.forEach(item => {
                // Get text content for search
                const itemText = item.textContent.toLowerCase();
                
                // Get item metadata for category filtering
                const itemCategories = item.querySelector('.book-meta, .pdf-meta, .article-meta, .video-meta, .material-meta');
                const itemCategoriesText = itemCategories ? itemCategories.textContent.toLowerCase() : '';
                
                // Determine item format based on its class
                let itemFormat = '';
                if (item.classList.contains('book-card')) itemFormat = 'book';
                else if (item.classList.contains('pdf-card')) itemFormat = 'pdf';
                else if (item.classList.contains('article-card')) itemFormat = 'article';
                else if (item.classList.contains('video-card')) itemFormat = 'video';
                else if (item.classList.contains('material-card')) {
                    if (item.classList.contains('podcast')) itemFormat = 'podcast';
                    else if (item.classList.contains('webinar')) itemFormat = 'webinar';
                    else itemFormat = 'other';
                }
                
                // Check if item matches all filter criteria
                const matchesSearch = searchValue === '' || itemText.includes(searchValue);
                const matchesCategory = categoryValue === 'all' || itemCategoriesText.includes(categoryValue.toLowerCase());
                const matchesFormat = formatValue === 'all' || itemFormat === formatValue;
                const matchesRegion = regionValue === 'all' || itemText.includes(regionValue.toLowerCase());
                
                // Show or hide item based on filter results
                if (matchesSearch && matchesCategory && matchesFormat && matchesRegion) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Check if any items are visible in each section
            const sections = document.querySelectorAll('.books-section, .pdfs-section, .articles-section, .videos-section, .other-materials');
            sections.forEach(section => {
                const sectionItems = section.querySelectorAll('.book-card, .pdf-card, .article-card, .video-card, .material-card');
                let hasVisibleItems = false;
                
                sectionItems.forEach(item => {
                    if (item.style.display !== 'none') {
                        hasVisibleItems = true;
                    }
                });
                
                // Show or hide section based on whether it has visible items
                const sectionHeader = section.querySelector('.section-header');
                const viewAllButton = section.querySelector('.view-all');
                
                if (hasVisibleItems) {
                    section.style.display = '';
                    if (sectionHeader) sectionHeader.style.display = '';
                    if (viewAllButton) viewAllButton.style.display = '';
                } else {
                    // Don't hide the entire section, just add a "no results" message
                    const noResults = section.querySelector('.no-results');
                    if (!noResults) {
                        const noResultsMsg = document.createElement('p');
                        noResultsMsg.className = 'no-results';
                        noResultsMsg.textContent = 'No matching resources found in this section.';
                        section.querySelector('.container').appendChild(noResultsMsg);
                    } else {
                        noResults.style.display = '';
                    }
                }
            });
        };

        // Add event listeners to search and filter inputs
        resourceSearch.addEventListener('input', filterResources);
        if (resourceCategoryFilter) resourceCategoryFilter.addEventListener('change', filterResources);
        if (resourceFormatFilter) resourceFormatFilter.addEventListener('change', filterResources);
        if (resourceRegionFilter) resourceRegionFilter.addEventListener('change', filterResources);
    }

    // Jobs Page Filters
    const jobRegionFilter = document.getElementById('region-filter');
    const jobCategoryFilter = document.getElementById('category-filter');
    const jobExperienceFilter = document.getElementById('experience-filter');
    const jobCards = document.querySelectorAll('.job-card');
    
    // Function to filter jobs based on selected criteria
    const filterJobs = () => {
        if (!jobRegionFilter || !jobCategoryFilter || !jobExperienceFilter) return;
        
        const selectedRegion = jobRegionFilter.value;
        const selectedCategory = jobCategoryFilter.value;
        const selectedExperience = jobExperienceFilter.value;
        
        jobCards.forEach(card => {
            // Get job details for filtering
            const jobRegions = card.querySelector('.job-meta p:first-child').textContent.toLowerCase();
            const jobCategory = card.querySelector('.job-header h3').textContent.toLowerCase();
            const jobType = card.querySelector('.job-type').textContent.toLowerCase();
            
            // Check if job matches all selected filters
            const matchesRegion = selectedRegion === 'all' || jobRegions.includes(selectedRegion.toLowerCase().replace('-', ' '));
            const matchesCategory = selectedCategory === 'all' || jobCategory.includes(selectedCategory.toLowerCase().replace('-', ' '));
            const matchesExperience = selectedExperience === 'all' || (
                (selectedExperience === 'entry' && jobType.includes('part-time')) ||
                (selectedExperience === 'mid' && jobType.includes('full-time')) ||
                (selectedExperience === 'senior' && jobCategory.includes('coordinator') || jobCategory.includes('specialist'))
            );
            
            // Show or hide job card based on filter matches
            if (matchesRegion && matchesCategory && matchesExperience) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };
    
    // Add event listeners to filters
    if (jobRegionFilter) {
        jobRegionFilter.addEventListener('change', filterJobs);
    }
    
    if (jobCategoryFilter) {
        jobCategoryFilter.addEventListener('change', filterJobs);
    }
    
    if (jobExperienceFilter) {
        jobExperienceFilter.addEventListener('change', filterJobs);
    }

    // Product Search and Filter Functionality
    const searchInput = document.querySelector('.search-input input');
    const categorySelect = document.querySelector('.search-input select');
    const filterCheckboxes = document.querySelectorAll('.search-filters input');
    const productsGrid = document.querySelector('.products-grid');
    const loadMoreBtn = document.querySelector('.load-more button');

    let currentPage = 1;
    const productsPerPage = 6;

    // Additional products data
    const additionalProducts = [
        {
            name: 'Premium Maize',
            image: 'images/maize.jpg',
            description: 'High-quality maize from the Ashanti Region',
            stock: 'in-stock',
            specs: ['Grade A Quality', 'MOQ: 10 Tons', 'Delivery Available'],
            category: 'grains',
            filters: ['organic', 'certified']
        },
        {
            name: 'Organic Cassava',
            image: 'images/cassava.jpg',
            description: 'Fresh cassava from Eastern Region farms',
            stock: 'in-stock',
            specs: ['Organic Certified', 'MOQ: 5 Tons', 'Same-day Processing'],
            category: 'roots',
            filters: ['organic']
        },
        {
            name: 'Palm Oil',
            image: 'images/palm-oil.jpg',
            description: 'Pure red palm oil from Western Region',
            stock: 'limited',
            specs: ['Premium Grade', 'MOQ: 1000 Liters', 'Export Quality'],
            category: 'oils',
            filters: ['certified']
        }
    ];

    // Search and filter products
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;
        const filters = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name);

        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const category = product.dataset.category;
            const productFilters = product.dataset.filters ? product.dataset.filters.split(',') : [];
            
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = !selectedCategory || category === selectedCategory;
            const matchesFilters = filters.length === 0 || filters.every(filter => productFilters.includes(filter));
            
            product.style.display = matchesSearch && matchesCategory && matchesFilters ? 'block' : 'none';
        });
    }

    // Event listeners for search and filter
    searchInput.addEventListener('input', filterProducts);
    categorySelect.addEventListener('change', filterProducts);
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Load More Products
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        loadMoreProducts();
    });

    function loadMoreProducts() {
        const fragment = document.createDocumentFragment();
        
        additionalProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            productCard.dataset.filters = product.filters.join(',');
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" />
                    <span class="stock-status ${product.stock}">${product.stock === 'in-stock' ? 'In Stock' : 'Limited Stock'}</span>
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <ul class="product-specs">
                        ${product.specs.map(spec => `
                            <li><i class="fas fa-check-circle"></i> ${spec}</li>
                        `).join('')}
                    </ul>
                    <div class="product-actions">
                        <button class="btn btn-primary">Request Quote</button>
                        <button class="btn btn-secondary">View Details</button>
                    </div>
                </div>
            `;
            
            fragment.appendChild(productCard);
        });
        
        productsGrid.appendChild(fragment);
        
        // Hide load more button if no more products
        if (currentPage >= 2) {
            loadMoreBtn.style.display = 'none';
        }
        
        // Apply current filters to new products
        filterProducts();
        
        // Initialize event listeners for new product cards
        initializeProductCardListeners(fragment);
    }

    function initializeProductCardListeners(container) {
        container.querySelectorAll('.product-actions button').forEach(button => {
            button.addEventListener('click', function() {
                const product = this.closest('.product-card');
                const productName = product.querySelector('h3').textContent;
                
                if (this.classList.contains('btn-primary')) {
                    showQuoteForm(productName);
                } else {
                    showProductDetails(productName);
                }
            });
        });
    }

    function showQuoteForm(productName) {
        // Implement quote request form
        alert(`Request quote for ${productName}`);
    }

    function showProductDetails(productName) {
        // Implement product details modal
        alert(`View details for ${productName}`);
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Product Image Lazy Loading
    const productImages = document.querySelectorAll('.product-image img');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        productImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Live Chat Button
    const chatButton = document.querySelector('.contact-card button');
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            // Implement chat functionality or redirect to chat service
            alert('Chat feature coming soon!');
        });
    }

    // Form Validation
    const buyerForm = document.getElementById('buyer-form');

    buyerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(buyerForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        let isValid = true;
        const requiredFields = ['company', 'contact', 'email', 'phone', 'business-type', 'location'];
        
        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Simulate form submission
            console.log('Form submitted:', data);
            showSuccessMessage();
            buyerForm.reset();
        }
    });

    function showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = 'Registration submitted successfully! We will contact you soon.';
        
        buyerForm.parentNode.insertBefore(message, buyerForm);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    // Header Scroll Effect
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Product Listing Form Handling
    const productListingForm = document.getElementById('product-listing-form');
    const productImageInput = document.getElementById('product-image');

    if (productListingForm) {
        // Image preview and validation
        productImageInput.addEventListener('change', function() {
            const files = Array.from(this.files);
            
            // Validate number of files
            if (files.length > 3) {
                alert('Please select a maximum of 3 images');
                this.value = '';
                return;
            }
            
            // Validate file sizes
            const invalidFiles = files.filter(file => file.size > 5 * 1024 * 1024);
            if (invalidFiles.length > 0) {
                alert('Some images exceed the 5MB size limit');
                this.value = '';
                return;
            }
        });

        productListingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = [
                'product-name',
                'product-category',
                'product-description',
                'quantity',
                'unit',
                'product-location',
                'seller-name',
                'seller-phone',
                'seller-email'
            ];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Collect form data
            const formData = new FormData(this);
            const certifications = Array.from(document.querySelectorAll('input[name="certification"]:checked'))
                .map(checkbox => checkbox.value);
            formData.append('certifications', JSON.stringify(certifications));
            
            // Simulate form submission
            showListingSuccessMessage();
            this.reset();
        });
    }

    function showListingSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Product Listing Submitted Successfully!</h3>
            <p>Our team will review your listing and contact you within 24-48 hours.</p>
        `;
        
        productListingForm.parentNode.insertBefore(message, productListingForm);
        
        // Scroll to success message
        message.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    // Add Registration Form Toggle
    const toggleFormBtn = document.querySelector('.toggle-form-btn');
    const registrationForm = document.querySelector('.registration-form');

    if (toggleFormBtn && registrationForm) {
        toggleFormBtn.addEventListener('click', () => {
            registrationForm.classList.toggle('active');
            toggleFormBtn.textContent = registrationForm.classList.contains('active') ? 'Hide Form' : 'Register Now';
            
            // Smooth scroll to form when opening
            if (registrationForm.classList.contains('active')) {
                registrationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}); 