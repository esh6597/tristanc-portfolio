window.addEventListener('DOMContentLoaded', event => {

  // || GALLERY FADE ANIM
  const gallery = document.querySelector('.opacity-in');
  if (gallery) {
      gallery.style.opacity = 1;
  }

  // || GALLERY MODALS
  const zoomView = document.querySelector('.gallery-zoom');
  const slideshow = document.querySelector('.carousel');

  if (zoomView && slideshow) {

      //Clicking on gallery cards scrolls carousel to relevant image
      const galleryCards = document.querySelectorAll('.gallery-card');
      galleryCards.forEach((card) => {
          card.addEventListener('click', () => {
              zoomView.style.display = 'block';
              document.querySelector(`#b-${card.id}`).click();
          });
      });

      //Close carousel overlay
      const exit = document.querySelector('.exit');
      exit.addEventListener('click', () => {
          zoomView.style.display = 'none';
      });
  }
});

// || PREVENT AUTOSCROLL
// Must be in jQuery to work.

$(function() {
  $('.carousel').each(function(){
      $(this).carousel({
          interval: false
      });
  });
});