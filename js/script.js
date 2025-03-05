// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a nav link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
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
    const header = document.querySelector('header');
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
}); 