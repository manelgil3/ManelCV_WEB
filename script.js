// 1. Dynamic Date Display
document.getElementById('currentYear').textContent = new Date().getFullYear();

// 2. Sticky Navbar
// Assuming you have a navbar with id="navbar"
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.onscroll = function() {
    stickyNavbar();
    fadeInOnScroll();
};

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// 3. Fade In Effect
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

// 4. Tooltip
// Assuming you have elements with class="tooltip"
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
