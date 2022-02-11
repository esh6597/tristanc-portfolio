// || FORM VALIDATION
window.addEventListener('DOMContentLoaded', event => {
  const firstNInp = document.querySelector('#firstName');
  const lastNInp = document.querySelector('#lastName');
  const emailInp = document.querySelector('#email');
  const phoneInp = document.querySelector('#phone');
  const subjectInp = document.querySelector('#subject');
  const messageInp = document.querySelector('#message');
  const checkbox = document.querySelector('#privacyCheck');
  const submitBut = document.querySelector('#submitBut');

  // VALIDATOR FX'S--reuseable
  // HTML has its own validation API, but custom JS validation offers better freedom and code organization. To allow special characters in names, we will not be validating names beyond the no angle bracket rule.

  const notEmpty = (val) => {
    return val.toString().length > 0 ? true : false;
  };

  const noAngleBr = (val) => {
    //Tests both literal symbol and HTML entities
    const conditions = ['&lt;', '<', '&gt;', '>'];
    return conditions.some(con => val.toString.includes(con));
  };

  const validEmail = (val) => {
    //Regex matches:
    // Beginning with any characters to allow unconventional email addresses then @ symbol required
    // Any more characters again, then period and 2-3 letters for end
    if (val.toString().match(/^.+@.+\.\w{2,3}$/)) {
      //Cannot be longer than 320 characters universally
      if (val.toString().length <= 320) {
        return true;
      }
    }
    return false;
  };

  const validPhone = (val) => {
    // Match 0123456789 or 012-345-6789
    if (val.toString().match(/^\d{10}$/) || val.toString().match(/^\d{3}-\d{3}-\d{4}$/)) {
      return true;
    }
    return false;
  };

  const validSubj = (val) => {
    return val.toString().length <= 160 ? true : false;
  };

  // ASSIGN CHANGES UPON INPUT

  firstNInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${firstNInp.id}Feedback`);
    
  });
});

// query select all fields and submit button
  

// add change event listener to fields
  // validate field
  // get feedback div
  // if valid update classes and inner html
  // if invalid do the same but different :^)
  // check if all fields are valid via class
  // if valid, enable submit button
  // else disable submit button

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

