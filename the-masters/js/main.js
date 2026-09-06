/* ==================================================================
   THE MASTERS - Premium Indian Restaurant
   Interactive JavaScript
   ================================================================== */

(function() {
    'use strict';

    // === Menu Data ===
    const menuData = [
        // Starters
        { name: "Tandoori Paneer Tikka", category: "starters", type: "veg", spice: 1, price: "₹395", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&q=80", desc: "Cottage cheese marinated in spiced yogurt, charred in tandoor" },
        { name: "Lamb Seekh Kebab", category: "starters", type: "nonveg", spice: 2, price: "₹495", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&q=80", desc: "Minced lamb kebabs with fresh mint and aromatic spices" },
        { name: "Crispy Corn Chaat", category: "starters", type: "vegan", spice: 2, price: "₹295", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=300&q=80", desc: "Sweet corn tossed with onions, tomatoes, and chaat masala" },
        { name: "Aloo Tikki Chaat", category: "starters", type: "jain", spice: 1, price: "₹245", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&q=80", desc: "Crispy potato patties topped with yogurt and chutneys" },

        // Tandoor
        { name: "Tandoori Chicken", category: "tandoor", type: "nonveg", spice: 2, price: "₹595", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&q=80", desc: "Whole chicken marinated overnight, roasted in clay oven" },
        { name: "Tandoori Pomfret", category: "tandoor", type: "nonveg", spice: 1, price: "₹795", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&q=80", desc: "Whole pomfret marinated in coastal spices, grilled to perfection" },
        { name: "Hara Bhara Kebab", category: "tandoor", type: "veg", spice: 1, price: "₹345", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80", desc: "Spinach and green pea patties with aromatic spices" },
        { name: "Murgh Malai Kebab", category: "tandoor", type: "nonveg", spice: 1, price: "₹525", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&q=80", desc: "Creamy chicken kebabs with cheese and cardamom" },

        // Main Course
        { name: "Royal Butter Chicken", category: "mains", type: "nonveg", spice: 1, price: "₹795", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80", desc: "Tandoor chicken in velvety tomato-cream sauce" },
        { name: "Dal Makhani", category: "mains", type: "veg", spice: 1, price: "₹495", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", desc: "Black lentils slow-cooked overnight with butter and cream" },
        { name: "Lamb Rogan Josh", category: "mains", type: "nonveg", spice: 3, price: "₹895", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80", desc: "Kashmiri-style lamb curry with aromatic Kashmiri chillies" },
        { name: "Paneer Lababdar", category: "mains", type: "veg", spice: 2, price: "₹445", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80", desc: "Cottage cheese in rich cashew-tomato gravy" },
        { name: "Goan Fish Curry", category: "mains", type: "nonveg", spice: 2, price: "₹695", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&q=80", desc: "Fresh catch in tangy coconut and kokum curry" },

        // Biryani
        { name: "Hyderabadi Dum Biryani", category: "biryani", type: "nonveg", spice: 2, price: "₹895", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80", desc: "Saffron-infused basmati with tender meat, slow-cooked" },
        { name: "Lucknowi Awadhi Biryani", category: "biryani", type: "nonveg", spice: 1, price: "₹845", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80", desc: "Fragrant rice layered with marinated meat, dum style" },
        { name: "Vegetable Biryani", category: "biryani", type: "veg", spice: 1, price: "₹495", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&q=80", desc: "Seasonal vegetables with paneer in aromatic basmati" },
        { name: "Prawn Biryani", category: "biryani", type: "nonveg", spice: 2, price: "₹945", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80", desc: "Coastal-style prawns with coconut and curry leaves" },

        // Breads
        { name: "Butter Naan", category: "breads", type: "veg", spice: 0, price: "₹85", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", desc: "Classic tandoor-baked leavened bread with butter" },
        { name: "Garlic Naan", category: "breads", type: "veg", spice: 0, price: "₹95", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", desc: "Naan topped with fresh garlic and coriander" },
        { name: "Cheese Stuffed Kulcha", category: "breads", type: "veg", spice: 0, price: "₹145", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", desc: "Soft bread stuffed with melted cheese blend" },
        { name: "Laccha Paratha", category: "breads", type: "veg", spice: 0, price: "₹95", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", desc: "Layered whole wheat bread, crisp and flaky" },
        { name: "Truffle Naan", category: "breads", type: "veg", spice: 0, price: "₹195", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", desc: "Premium naan drizzled with truffle oil" },

        // Desserts
        { name: "Gulab Jamun", category: "desserts", type: "veg", spice: 0, price: "₹195", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&q=80", desc: "Soft milk dumplings in rose-cardamom syrup" },
        { name: "Rasmalai", category: "desserts", type: "veg", spice: 0, price: "₹245", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&q=80", desc: "Cottage cheese patties in saffron-cardamom milk" },
        { name: "Kulfi Falooda", category: "desserts", type: "veg", spice: 0, price: "₹225", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&q=80", desc: "Traditional Indian ice cream with vermicelli and rose syrup" },
        { name: "Sizzling Brownie", category: "desserts", type: "veg", spice: 0, price: "₹295", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&q=80", desc: "Warm chocolate brownie on sizzling plate with ice cream" },

        // Drinks
        { name: "Masala Chai", category: "drinks", type: "veg", spice: 0, price: "₹95", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80", desc: "Authentic Indian tea with cardamom and ginger" },
        { name: "Mango Lassi", category: "drinks", type: "veg", spice: 0, price: "₹175", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80", desc: "Creamy yogurt blended with Alphonso mango pulp" },
        { name: "Rose Thandai", category: "drinks", type: "veg", spice: 0, price: "₹195", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80", desc: "Chilled saffron-rose drink with nuts and spices" },
        { name: "Old Monk Coffee", category: "drinks", type: "veg", spice: 0, price: "₹245", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80", desc: "Rum-infused cold coffee with chocolate shavings" }
    ];

    // === DOM Elements ===
    const loader = document.getElementById('loader');
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const menuContent = document.getElementById('menuContent');
    const menuCategories = document.querySelectorAll('.menu-category');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const reservationForm = document.getElementById('reservationForm');

    // === Loading Screen ===
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 800);
        }, 1500);
    });

    // === Navbar Scroll Effect ===
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // === Mobile Menu Toggle ===
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // === Render Menu ===
    let currentCategory = 'all';
    let currentFilters = new Set();
    let currentSpice = null;

    function renderMenu() {
        const filteredItems = menuData.filter(item => {
            const categoryMatch = currentCategory === 'all' || item.category === currentCategory;
            const typeMatch = currentFilters.size === 0 || currentFilters.has(item.type);
            const spiceMatch = !currentSpice || item.spice === parseInt(currentSpice);
            return categoryMatch && typeMatch && spiceMatch;
        });

        if (filteredItems.length === 0) {
            menuContent.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--gold); margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p style="font-family: var(--font-accent); font-style: italic; font-size: 1.2rem;">
                        No dishes match your selection. Try different filters.
                    </p>
                </div>
            `;
            return;
        }

        menuContent.innerHTML = filteredItems.map(item => `
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                    <div class="menu-item-tags">
                        <span class="tag ${item.type}">${item.type === 'nonveg' ? 'Non-Veg' : item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                        ${item.spice > 0 ? `<span class="tag spicy">${item.spice === 1 ? 'Mild' : item.spice === 2 ? 'Medium' : 'Hot'}</span>` : ''}
                    </div>
                </div>
                <div class="menu-item-price">${item.price}</div>
            </div>
        `).join('');
    }

    // Initial menu render
    renderMenu();

    // === Menu Category Filter ===
    menuCategories.forEach(cat => {
        cat.addEventListener('click', () => {
            menuCategories.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');
            currentCategory = cat.dataset.category;
            renderMenu();
        });
    });

    // === Dietary Filter ===
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            if (currentFilters.has(filter)) {
                currentFilters.delete(filter);
                btn.classList.remove('active');
            } else {
                currentFilters.add(filter);
                btn.classList.add('active');
            }
            renderMenu();
        });
    });

    // === Spice Filter ===
    document.querySelectorAll('.filter-btn[data-spice]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentSpice === btn.dataset.spice) {
                currentSpice = null;
                btn.classList.remove('active');
            } else {
                document.querySelectorAll('.filter-btn[data-spice]').forEach(b => b.classList.remove('active'));
                currentSpice = btn.dataset.spice;
                btn.classList.add('active');
            }
            renderMenu();
        });
    });

    // === Gallery Lightbox ===
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.dataset.src;
            lightboxImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // === Reservation Form ===
    if (reservationForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                guests: document.getElementById('guests').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                occasion: document.getElementById('occasion').value,
                requests: document.getElementById('requests').value
            };

            // Simulate submission
            const submitBtn = reservationForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Confirming...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Reservation Confirmed!';
                submitBtn.style.background = '#2d8659';

                setTimeout(() => {
                    alert(`Thank you, ${formData.name}! Your reservation for ${formData.guests} on ${formData.date} at ${formData.time} has been confirmed. A confirmation email will be sent to ${formData.email}.`);
                    reservationForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 800);
            }, 1500);
        });
    }

    // === Scroll Reveal Animations ===
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }

    // === Smooth Scroll for Anchor Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target === '#' || target.length < 2) return;
            const targetEl = document.querySelector(target);
            if (targetEl) {
                e.preventDefault();
                const offsetTop = targetEl.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // === Subtle Parallax on Hero ===
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        });
    }

    // === Set Active Nav Link on Scroll ===
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--gold)';
            }
        });
    });

})();
