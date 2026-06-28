 // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links a');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Sticky Header Shrink
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.height = '70px';
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            } else {
                header.style.height = '80px';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });

        // Intersection Observer for Fade-in Animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(element => {
            observer.observe(element);
        });

        // Testimonial Carousel
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.dot');
        let testimonialInterval;

        function setTestimonial(index) {
            testimonials[currentTestimonial].classList.remove('active');
            dots[currentTestimonial].classList.remove('active');
            
            currentTestimonial = index;
            
            testimonials[currentTestimonial].classList.add('active');
            dots[currentTestimonial].classList.add('active');
            
            resetInterval();
        }

        function nextTestimonial() {
            let nextIndex = (currentTestimonial + 1) % testimonials.length;
            setTestimonial(nextIndex);
        }

        function resetInterval() {
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(nextTestimonial, 4000);
        }

        // Initialize carousel
        resetInterval();