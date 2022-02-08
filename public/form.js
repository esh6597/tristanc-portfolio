// || FORM VALIDATION
window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('#contactForm');
  form.addEventListener('change', () => {
    const controls = document.querySelectorAll('.form-control');
    let isValid = true;
    controls.forEach((input) => {
    });
  });
});

// add change event listener to entire form
  // check if all fields are valid via class
  // if valid, enable submit button
  // else disable submit button

// add change event listener to fields
  // validate field
  // get feedback div
  // if valid update classes and inner html
  // if invalid do the same but different :^)

// || FORM SUBMISSION

$('#contactForm').on('submit', (event) => {
  event.preventDefault();

  const firstName = $('#firstName').val().trim();
  const lastName = $('#lastName').val().trim();
  const email = $('#email').val().trim();
  const phone = $('#phone').val().trim();
  const subject = $('#subject').val().trim();
  const message = $('#message').val().trim();

  const data = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
  };

  console.log(`Thanks for your submission! Here's what you wrote: ${firstName} ${lastName}, ${email}, ${phone}, Subject: ${subject}, Message: ${message}`);    

  $.post('/email', data, function() {
      console.log('Data sent to server!');
  });

  $('#contactForm')[0].reset();
});

