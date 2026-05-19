// ============================================
// Map Mentors Website - JavaScript
// ============================================

// ============================================
// 1. DROPDOWN MENU FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get dropdown elements
    const dropdownMenus = document.querySelectorAll('.dropdown');

    dropdownMenus.forEach(menu => {
        const toggleButton = menu.querySelector('.nav-link');
        const content = menu.querySelector('.dropdown-content');

        if (toggleButton && content) {
            // Toggle dropdown on click
            toggleButton.addEventListener('click', function(e) {
                e.preventDefault();
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });

            // Close dropdown when clicking on a link
            const links = content.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    content.style.display = 'none';
                });
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        dropdownMenus.forEach(menu => {
            const content = menu.querySelector('.dropdown-content');
            if (!menu.contains(e.target) && content) {
                content.style.display = 'none';
            }
        });
    });

    // ============================================
    // 2. PUBLICATION FILTER FUNCTIONALITY
    // ============================================

    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationCards = document.querySelectorAll('.publication-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter publications
            publicationCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ============================================
    // 3. CONTACT FORM HANDLING
    // ============================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                inquiry: document.getElementById('inquiry').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.inquiry || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Show success message
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Message Sent!';
            submitButton.style.backgroundColor = '#52a039';

            // Reset form
            contactForm.reset();

            // Restore button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);

            console.log('Form submitted:', formData);
        });
    }

    // ============================================
    // 4. NEWSLETTER SIGNUP FORMS
    // ============================================

    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const button = this.querySelector('button');

            if (emailInput && emailInput.value) {
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                // Show success
                const originalText = button.textContent;
                button.textContent = 'Subscribed!';
                button.style.backgroundColor = '#52a039';

                // Clear input
                emailInput.value = '';

                // Restore button
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 3000);

                console.log('Newsletter signup:', emailInput.value);
            }
        });
    });

    // ============================================
    // 5. SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // 6. ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ============================================

    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentLocation.includes(href) && href !== '#') {
            link.classList.add('active');
        }
    });

    // ============================================
    // 7. SMOOTH PAGE LOAD ANIMATION
    // ============================================

    // Add fade-in animation to page sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease-in forwards`;
        section.style.animationDelay = `${index * 0.1}s`;
    });

    // ============================================
    // 8. CARD HOVER EFFECT ENHANCEMENT
    // ============================================

    const cards = document.querySelectorAll(
        '.research-card, .team-card, .course-card, .article-card, .publication-card, .partner-item, .category-card'
    );

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ============================================
    // 9. ENROLL BUTTON FUNCTIONALITY
    // ============================================

    const enrollButtons = document.querySelectorAll('.enroll-button, .collab-link');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Button already links to contact page, just add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // ============================================
    // 10. SCROLL-TO-TOP BUTTON (Optional)
    // ============================================

    // Create scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTop';
    scrollButton.innerHTML = '↑';
    scrollButton.style.display = 'none';
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '2rem';
    scrollButton.style.right = '2rem';
    scrollButton.style.width = '50px';
    scrollButton.style.height = '50px';
    scrollButton.style.borderRadius = '50%';
    scrollButton.style.backgroundColor = '#2d5016';
    scrollButton.style.color = 'white';
    scrollButton.style.border = 'none';
    scrollButton.style.cursor = 'pointer';
    scrollButton.style.fontSize = '1.5rem';
    scrollButton.style.zIndex = '999';
    scrollButton.style.transition = 'all 0.3s ease';
    document.body.appendChild(scrollButton);

    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // 11. LAZY LOAD IMAGES (if using data-src)
    // ============================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // 12. FORM FIELD FOCUS EFFECTS
    // ============================================

    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2d5016';
            this.style.boxShadow = '0 0 0 3px rgba(45, 80, 22, 0.1)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = '#e0e0e0';
            this.style.boxShadow = 'none';
        });
    });

    // ============================================
    // 13. RESPONSIVE MENU TOGGLE (Mobile)
    // ============================================

    // For mobile menu, add responsive behavior
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');

    // Adjust for smaller screens
    if (window.innerWidth < 768) {
        // Mobile adjustments can go here
    }

    // ============================================
    // 14. PAGE TRANSITION EFFECTS
    // ============================================

    // Add fade-out effect when navigating
    document.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') &&
            link.getAttribute('href').startsWith('.') ||
            link.getAttribute('href').endsWith('.html')) {

            link.addEventListener('click', function(e) {
                // Allow the navigation but add a transition
                const href = this.getAttribute('href');
                if (href && href !== '#' && href !== '') {
                    // Page will fade out as browser navigates
                }
            });
        }
    });

    // ============================================
    // 18. INITIALIZE MAP (Leaflet)
    // ============================================

    // Initialize map only if map container exists
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Create map centered on Kathmandu, Nepal
        const map = L.map('map').setView([27.7172, 85.3240], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            minZoom: 2
        }).addTo(map);

        // Add marker for AIRL location in Kathmandu
        const marker = L.marker([27.7172, 85.3240], {
            title: 'Agri-Intelligence Research Lab'
        }).addTo(map);

        // Add popup to marker
        marker.bindPopup(
            '<div style="font-family: Arial, sans-serif; width: 250px;">' +
            '<h3 style="margin: 0 0 8px 0; color: #2d5016;">Agri-Intelligence Research Lab</h3>' +
            '<p style="margin: 0 0 6px 0;"><strong>Intelligence in Agriculture</strong></p>' +
            '<p style="margin: 0 0 6px 0;">Kathmandu, Nepal</p>' +
            '<p style="margin: 0; font-size: 12px; color: #666;">📞 +977-9868365688</p>' +
            '</div>',
            { maxWidth: 300 }
        );

        // Make marker popup open by default
        marker.openPopup();

        console.log('Map initialized successfully');
    }

});

// ============================================
// 15. UTILITY FUNCTIONS
// ============================================

// Function to get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============================================
// 16. ADD ANIMATION KEYFRAMES DYNAMICALLY
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// 17. INITIALIZE TOOLTIP SYSTEM (Optional)
// ============================================

function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.textContent = tooltipText;
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = '#2d5016';
            tooltip.style.color = 'white';
            tooltip.style.padding = '0.5rem 0.75rem';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '0.85rem';
            tooltip.style.pointerEvents = 'none';
            tooltip.style.zIndex = '1000';
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        });

        element.addEventListener('mouseleave', function() {
            const tooltips = document.querySelectorAll('div[style*="backgroundColor: rgb(45, 80, 22)"]');
            tooltips.forEach(t => t.remove());
        });
    });
}

// ============================================
// END OF SCRIPT
// ============================================
