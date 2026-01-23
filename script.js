    // <script>
    //     // Mobile Menu Toggle
    //     const mobileMenuButton = document.getElementById('mobileMenuButton');
    //     const mobileMenu = document.getElementById('mobileMenu');
    //     const closeMenu = document.getElementById('closeMenu');
        
    //     mobileMenuButton.addEventListener('click', () => {
    //         mobileMenu.classList.remove('-translate-x-full');
    //     });
        
    //     closeMenu.addEventListener('click', () => {
    //         mobileMenu.classList.add('-translate-x-full');
    //     });
        
    //     // Close menu when clicking a link
    //     document.querySelectorAll('#mobileMenu a').forEach(link => {
    //         link.addEventListener('click', () => {
    //             mobileMenu.classList.add('-translate-x-full');
    //         });
    //     });
        
    //     // Video Modal Functions
    //     function openVideo(videoId) {
    //         const modal = document.getElementById('videoModal');
    //         modal.classList.remove('hidden');
    //         modal.classList.add('flex');
    //         document.body.style.overflow = 'hidden';
    //     }
        
    //     function closeVideo() {
    //         const modal = document.getElementById('videoModal');
    //         modal.classList.add('hidden');
    //         modal.classList.remove('flex');
    //         document.body.style.overflow = 'auto';
    //     }
        
    //     // Close modal on outside click
    //     document.getElementById('videoModal').addEventListener('click', (e) => {
    //         if (e.target.id === 'videoModal') {
    //             closeVideo();
    //         }
    //     });
        
    //     // Contact Form Submission
    //     document.getElementById('contactForm').addEventListener('submit', (e) => {
    //         e.preventDefault();
            
    //         // Get form data
    //         const formData = {
    //             name: document.getElementById('name').value,
    //             email: document.getElementById('email').value,
    //             phone: document.getElementById('phone').value,
    //             eventType: document.getElementById('eventType').value,
    //             message: document.getElementById('message').value
    //         };
            
    //         // In production, this would send to a server
    //         console.log('Form submitted:', formData);
            
    //         // Show success message
    //         alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
    //         e.target.reset();
    //     });
        
    //     // Smooth scroll for anchor links
    //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //         anchor.addEventListener('click', function (e) {
    //             e.preventDefault();
                
    //             const targetId = this.getAttribute('href');
    //             if (targetId === '#') return;
                
    //             const targetElement = document.querySelector(targetId);
    //             if (targetElement) {
    //                 window.scrollTo({
    //                     top: targetElement.offsetTop - 80,
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         });
    //     });
        
    //     // Add scroll animation on elements
    //     const observerOptions = {
    //         threshold: 0.1,
    //         rootMargin: '0px 0px -50px 0px'
    //     };
        
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('animate-fade-in');
    //             }
    //         });
    //     }, observerOptions);
        
    //     // Observe elements for scroll animations
    //     document.querySelectorAll('.gallery-item, .grid > div').forEach(el => {
    //         observer.observe(el);
    //     });
    // </script>