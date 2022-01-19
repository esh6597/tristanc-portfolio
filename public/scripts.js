/**
 * Search for || to navigate between sections.
 */

// || THEME SCRIPTS

//Execute when page loads
window.addEventListener('DOMContentLoaded', event => {


    // || NAVBAR
    // Define shrink function
    let navbarShrink = () => {
        // Check if component exists
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (navbarCollapsible) {
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
        }
    };
    // Execute
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Add Bootstrap ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };


    // || MASTHEAD
    // Use masthead as event parameters to control image
    const isHome = document.querySelector('.masthead');
    const isGallery = document.querySelector('.masthead-gallery');
    const mastImg = document.querySelector('#masthead-image');
    let masthead;

    //Checks what page it is
    if (isHome) {
        masthead = isHome;
    } else if (isGallery) {
        masthead = isGallery;
    }

    // Animation upon page load
    mastImg.style.transform = 'scale(1.25)';
    mastImg.style.transform = `scale(1.5) translate(0, -10%)`;

    // Moves image based on mouse position when hovered
    const moveToMouse = (event) => {
        console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        let moveX = ((window.innerWidth / 2) - event.clientX) / 3;
        let moveY = ((window.innerHeight / 2) - event.clientY) / 3;
        mastImg.style.transform = `scale(1.5, 1.5) translate(${moveX}px, ${moveY}px)`;
    };

    // Add and remove event listener when not hovering on
    const moveOn = () => {
        masthead.addEventListener('mousemove', moveToMouse);
    };

    const moveOff = () => {
        masthead.removeEventListener('mousemove', moveToMouse);
        mastImg.style.transform = 'none';
    };  

    masthead.addEventListener('mouseenter', moveOn);
    masthead.addEventListener('mouseleave', moveOff);
});