        // Mobile Navigation
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Back to top button
        const backToTop = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
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
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Fetch and display slider data
        async function fetchSlides() {
            try {
                // In a real scenario, you would fetch from slide.json
                // const response = await fetch('slide.json');
                // const slides = await response.json();
                
                // Mock data for demonstration
                const slides = [
                    {
                        "image": "https://source.unsplash.com/random/1200x600/?nature,water",
                        "title": "ยินดีต้อนรับสู่ NaphatSite",
                        "description": "เว็บไซต์ส่วนตัวของฉันที่แสดงผลงานและเรื่องราวต่างๆ"
                    },
                    {
                        "image": "https://source.unsplash.com/random/1200x600/?city,night",
                        "title": "ผลงานสร้างสรรค์",
                        "description": "ชมผลงานต่างๆ ที่ฉันได้สร้างขึ้นมา"
                    },
                    {
                        "image": "https://source.unsplash.com/random/1200x600/?technology,computer",
                        "title": "เกี่ยวกับฉัน",
                        "description": "เรียนรู้เพิ่มเติมเกี่ยวกับตัวฉันและสิ่งที่ฉันทำ"
                    }
                ];

                const slider = document.getElementById('slider');
                const sliderDots = document.getElementById('slider-dots');

                slides.forEach((slide, index) => {
                    // Create slide
                    const slideElement = document.createElement('div');
                    slideElement.className = 'slide';
                    slideElement.innerHTML = `
                        <img src="${slide.image}" alt="${slide.title}">
                        <div class="slide-content">
                            <h3>${slide.title}</h3>
                            <p>${slide.description}</p>
                        </div>
                    `;
                    slider.appendChild(slideElement);

                    // Create dot
                    const dot = document.createElement('div');
                    dot.className = 'slider-dot';
                    if (index === 0) dot.classList.add('active');
                    dot.dataset.index = index;
                    sliderDots.appendChild(dot);
                });

                // Slider functionality
                let currentSlide = 0;
                const slidesCount = slides.length;
                const slideElements = document.querySelectorAll('.slide');
                const dots = document.querySelectorAll('.slider-dot');

                function showSlide(index) {
                    slideElements.forEach(slide => {
                        slide.style.transform = `translateX(-${index * 100}%)`;
                    });
                    
                    dots.forEach(dot => dot.classList.remove('active'));
                    dots[index].classList.add('active');
                    
                    currentSlide = index;
                }

                document.getElementById('next-slide').addEventListener('click', () => {
                    currentSlide = (currentSlide + 1) % slidesCount;
                    showSlide(currentSlide);
                });

                document.getElementById('prev-slide').addEventListener('click', () => {
                    currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
                    showSlide(currentSlide);
                });

                // Auto slide change
                let slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % slidesCount;
                    showSlide(currentSlide);
                }, 5000);

                // Pause on hover
                slider.addEventListener('mouseenter', () => {
                    clearInterval(slideInterval);
                });

                slider.addEventListener('mouseleave', () => {
                    slideInterval = setInterval(() => {
                        currentSlide = (currentSlide + 1) % slidesCount;
                        showSlide(currentSlide);
                    }, 5000);
                });

                // Dot navigation
                dots.forEach(dot => {
                    dot.addEventListener('click', () => {
                        showSlide(parseInt(dot.dataset.index));
                    });
                });

            } catch (error) {
                console.error('Error loading slides:', error);
            }
        }

        // Fetch and display gallery images
        async function fetchGalleryImages() {
            try {
                // In a real scenario, you would fetch from img.json
                // const response = await fetch('img.json');
                // const images = await response.json();
                
                // Mock data for demonstration
                const images = [
                    {
                        "image": "https://source.unsplash.com/random/600x400/?portrait,man",
                        "title": "ภาพที่ 1",
                        "description": "คำอธิบายภาพที่ 1"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?nature,mountain",
                        "title": "ภาพที่ 2",
                        "description": "คำอธิบายภาพที่ 2"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?city,architecture",
                        "title": "ภาพที่ 3",
                        "description": "คำอธิบายภาพที่ 3"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?technology,computer",
                        "title": "ภาพที่ 4",
                        "description": "คำอธิบายภาพที่ 4"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?art,painting",
                        "title": "ภาพที่ 5",
                        "description": "คำอธิบายภาพที่ 5"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?travel,beach",
                        "title": "ภาพที่ 6",
                        "description": "คำอธิบายภาพที่ 6"
                    }
                ];

                const galleryContainer = document.getElementById('gallery-container');
                let visibleItems = 3; // Initially show 3 items
                const loadMoreBtn = document.getElementById('load-more');

                function displayImages() {
                    galleryContainer.innerHTML = ''; // Clear existing items
                    
                    images.slice(0, visibleItems).forEach(image => {
                        const galleryItem = document.createElement('div');
                        galleryItem.className = 'gallery-item fade-in';
                        galleryItem.innerHTML = `
                            <img src="${image.image}" alt="${image.title}">
                            <div class="gallery-item-content">
                                <h3>${image.title}</h3>
                                <p>${image.description}</p>
                                <a href="#" class="btn">ดูรายละเอียด</a>
                            </div>
                        `;
                        galleryContainer.appendChild(galleryItem);
                    });

                    // Hide load more button if all items are visible
                    if (visibleItems >= images.length) {
                        loadMoreBtn.style.display = 'none';
                    } else {
                        loadMoreBtn.style.display = 'inline-block';
                    }
                }

                loadMoreBtn.addEventListener('click', () => {
                    visibleItems += 3;
                    displayImages();
                });

                displayImages();

            } catch (error) {
                console.error('Error loading gallery images:', error);
            }
        }

        // Fetch and display works
        async function fetchWorks() {
            try {
                // In a real scenario, you would fetch from works.json
                // const response = await fetch('works.json');
                // const works = await response.json();
                
                // Mock data for demonstration
                const works = [
                    {
                        "image": "https://source.unsplash.com/random/600x400/?web,design",
                        "title": "โปรเจกต์เว็บไซต์",
                        "category": "การพัฒนาเว็บ",
                        "description": "เว็บไซต์ที่ฉันพัฒนาขึ้นสำหรับลูกค้า",
                        "link": "#"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?app,mobile",
                        "title": "แอปพลิเคชันมือถือ",
                        "category": "การพัฒนาแอป",
                        "description": "แอปพลิเคชันที่ฉันสร้างขึ้นสำหรับระบบ iOS และ Android",
                        "link": "#"
                    },
                    {
                        "image": "https://source.unsplash.com/random/600x400/?graphic,design",
                        "title": "งานออกแบบกราฟิก",
                        "category": "ออกแบบ",
                        "description": "ผลงานออกแบบโลโก้และแบรนด์ต่างๆ",
                        "link": "#"
                    }
                ];

                const worksGrid = document.getElementById('works-grid');

                works.forEach((work, index) => {
                    const workCard = document.createElement('div');
                    workCard.className = `work-card fade-in delay-${index % 3}`;
                    workCard.innerHTML = `
                        <img src="${work.image}" alt="${work.title}">
                        <div class="work-card-content">
                            <h3>${work.title}</h3>
                            <span class="work-category">${work.category}</span>
                            <p>${work.description}</p>
                            <a href="${work.link}" class="work-link">ดูผลงาน <i class="fas fa-arrow-right"></i></a>
                        </div>
                    `;
                    worksGrid.appendChild(workCard);
                });

            } catch (error) {
                console.error('Error loading works:', error);
            }
        }

        // Initialize all data fetching
        document.addEventListener('DOMContentLoaded', () => {
            fetchSlides();
            fetchGalleryImages();
            fetchWorks();

            // Add animation on scroll
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.fade-in');
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };

            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on load
        });
