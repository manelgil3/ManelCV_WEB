// 1. Dynamic Date Display
document.getElementById('currentYear').textContent = new Date().getFullYear();

// 2. Sticky Navbar
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.onscroll = function() {
    stickyNavbar();
    fadeInOnScroll();
};

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.querySelectorAll("section").forEach(sec => {
            sec.style.paddingTop = "70px"; // adjust this value based on your navbar's height
        });
    } else {
        navbar.classList.remove("sticky");
        document.querySelectorAll("section").forEach(sec => {
            sec.style.paddingTop = "0"; // reset padding
        });
    }
}


// 3. Top Function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 4. Fade In Effect
function fadeInOnScroll() {
    let elements = document.querySelectorAll('.fade-in');
    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = elements[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            elements[i].classList.add('active');
        } else {
            elements[i].classList.remove('active');
        }
    }
}

// 5. Tooltip
let tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', function() {
        let tooltipText = this.getAttribute('data-tooltip');
        let tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip-element');
        tooltipElement.innerText = tooltipText;
        document.body.appendChild(tooltipElement);

        let left = this.getBoundingClientRect().left + (this.offsetWidth / 2) - (tooltipElement.offsetWidth / 2);
        let top = this.getBoundingClientRect().top - tooltipElement.offsetHeight - 5;

        tooltipElement.style.left = left + 'px';
        tooltipElement.style.top = top + 'px';
    });

    tooltip.addEventListener('mouseleave', function() {
        let currentTooltip = document.querySelector('.tooltip-element');
        if (currentTooltip) {
            currentTooltip.remove();
        }
    });
});

// 6. Theme Toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    const btn = document.getElementById('themeToggle');
    
    if (btn.classList.contains('light-mode')) {
        // If it's currently light mode, switch to dark mode
        btn.classList.remove('light-mode');
        btn.classList.add('dark-mode');
        btn.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
    } else {
        // If it's currently dark mode, switch to light mode
        btn.classList.remove('dark-mode');
        btn.classList.add('light-mode');
        btn.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
    }
});

