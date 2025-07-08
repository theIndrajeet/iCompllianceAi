// Navigation Component - Creates consistent navigation bar across all pages
// Automatically highlights current page and handles mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    // Determine current page from URL
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Navigation HTML template
    // Note: Uses template literals for dynamic active class assignment
    const navHTML = `
        <nav id="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <div class="logo-icon">
                        <div class="logo-circle"></div>
                        <div class="logo-bar"></div>
                    </div>
                    <span>iCompliance</span>
                </a>
                <button class="menu-toggle" id="menuToggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li class="nav-item"><a href="dashboard.html" ${currentPage === 'dashboard.html' ? 'class="active"' : ''}>Dashboard</a></li>
                    <li class="nav-item"><a href="index.html" ${currentPage === 'index.html' && window.location.hash !== '#countries' ? 'class="active"' : ''}>Calculator</a></li>
                    <li class="nav-item"><a href="country-database.html" ${currentPage === 'country-database.html' ? 'class="active"' : ''}>Country Database</a></li>
                    <li class="nav-item"><a href="Cross-Border-Hiring-Assessment.html" ${currentPage === 'Cross-Border-Hiring-Assessment.html' ? 'class="active"' : ''}>Cross-Border Assessment</a></li>
                    <li class="nav-item"><a href="compliance-bot.html" ${currentPage === 'compliance-bot.html' ? 'class="active"' : ''}>AI Chatbot</a></li>
                    <li class="nav-item"><a href="compliance-matrix.html" ${currentPage === 'compliance-matrix.html' ? 'class="active"' : ''}>Compliance Matrix</a></li>
                </ul>
            </div>
        </nav>
    `;

    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle mobile menu visibility
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Scroll effect for navbar background
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            // Add 'scrolled' class when user scrolls past 50px
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}); 