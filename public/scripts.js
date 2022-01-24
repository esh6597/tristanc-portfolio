/**
 * Search for || to navigate between sections.
 */

// || THEME SCRIPTS

//Execute when page loads
window.addEventListener('DOMContentLoaded', event => {


    // || NAVBAR ANIMATIONS
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


    // || MASTHEAD SCROLL TO MOUSE
    // Use masthead as event parameters to control image
    const isHome = document.querySelector('.masthead');
    const isGallery = document.querySelector('.masthead-gallery');
    const mastImg = document.querySelector('#masthead-image');
    let masthead;
    let moveToMouse;

    // Animation upon page load
    mastImg.style.transform = 'scale(1.25)';
    mastImg.style.transform = `scale(1.5) translate(0, -10%)`;

    //Checks what page it is and changes mouse movement in accordance
    //Right now there's no difference; keeping here in case there may be in the future
    if (isHome) {
        masthead = isHome;

        moveToMouse = (event) => {
            let moveX = ((window.innerWidth / 2) - event.clientX) / 3;
            let moveY = ((window.innerHeight / 2) - event.clientY) / 3;
            mastImg.style.transform = `scale(1.5, 1.5) translate(${moveX}px, ${moveY}px)`;
        };

    } else if (isGallery) {
        masthead = isGallery;

        moveToMouse = (event) => {
            let moveX = ((window.innerWidth / 2) - event.clientX) / 3;
            let moveY = ((window.innerHeight / 2) - event.clientY) / 3;
            mastImg.style.transform = `scale(1.5, 1.5) translate(${moveX}px, ${moveY}px)`;
        };

    }

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


    // || GALLERY FADE ANIM
    const gallery = document.querySelector('.opacity-in');
    if (gallery) {
        gallery.style.opacity = 1;
    }


    // || GALLERY MODALS
    const zoomView = document.querySelector('.gallery-zoom');
    const slideshow = document.querySelector('.carousel');

    if (zoomView && slideshow) {

        const galleryCards = document.querySelectorAll('.gallery-card');
        galleryCards.forEach((card) => {
            card.addEventListener('click', () => {
                zoomView.style.display = 'block';
                document.querySelector(`#b-${card.id}`).click();
            });
        });

        const exit = document.querySelector('.exit');
        exit.addEventListener('click', () => {
            zoomView.style.display = 'none';
        });
    }
});