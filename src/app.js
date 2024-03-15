const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const closeNavBtn = document.getElementById('closeNavBtn');

// Function to toggle mobile navigation
function toggleMobileNav() {
    mobileNav.classList.toggle('hidden');
}

// Add event listener to burger button
burgerBtn.addEventListener('click', toggleMobileNav);

// Add event listener to close navigation button
closeNavBtn.addEventListener('click', toggleMobileNav);

// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
        toggleMobileNav(); // Close navigation after clicking link
    });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Function to scroll to top of page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listener to scroll to top button
scrollToTopBtn.addEventListener('click', scrollToTop);