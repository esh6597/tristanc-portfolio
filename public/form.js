// || FORM VALIDATION
window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('#contactForm');
  const firstNInp = document.querySelector('#firstName');
  const lastNInp = document.querySelector('#lastName');
  const emailInp = document.querySelector('#email');
  const phoneInp = document.querySelector('#phone');
  const subjectInp = document.querySelector('#subject');
  const messageInp = document.querySelector('#message');
  const checkbox = document.querySelector('#privacyCheck');
  const submitBut = document.querySelector('#submitBut');

  //Disable submission automatically
  submitBut.disabled = true;

  // VALIDATOR FX'S--reuseable
  // HTML has its own validation API, but custom JS validation offers better freedom and code organization. To allow special characters in names, we will not be validating names beyond the no angle bracket rule.

  const notEmpty = (val) => {
    return val.toString().length > 0 ? true : false;
  };

  const noAngleBr = (val) => {
    //Tests both literal symbol and HTML entities
    const conditions = ['&lt;', '<', '&gt;', '>'];
    return conditions.some(con => val.toString().includes(con))? false : true;
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

  const validSubject = (val) => {
    return val.toString().length <= 160 ? true : false;
  };

  const validMessage = (val) => {
    //Limiting space to short messages for faster processing
    return val.toString().length <= 10000 ? true : false;
  };

  // ASSIGN CHANGES UPON INPUT

  //State variables for if form is valid
  let firstNVal = false;
  let lastNVal = false;
  let emailVal = false;
  let phoneVal = false;
  let subjectVal = false;
  let messageVal = false;
  let checkVal = false;
  let formVal = false;

  firstNInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${firstNInp.id}Feedback`);
    
    // Validate: required, no <>
    if (notEmpty(firstNInp.value) && noAngleBr(firstNInp.value)) {
      //Does nothing if class doesn't exist
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Looks good!';
      firstNVal = true;
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'Oops, please enter a valid name.';
      firstNVal = false;
    }
  });

  lastNInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${lastNInp.id}Feedback`);
    
    // Validate: required, no <>
    if (notEmpty(lastNInp.value) && noAngleBr(lastNInp.value)) {
      //Does nothing if class doesn't exist
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Looks good!';
      lastNVal = true;
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'Please enter a valid name.';
      lastNVal = false;
    }
  });

  emailInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${emailInp.id}Feedback`);
    
    // Validate: required, is a valid email
    if (notEmpty(emailInp.value) && validEmail(emailInp.value)) {
      //Does nothing if class doesn't exist
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Looks good!';
      emailVal = true;
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'Please enter a valid email.';
      emailVal = false;
    }
  });

  phoneInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${phoneInp.id}Feedback`);
    
    // Validate: is a valid phone format
    if (validPhone(phoneInp.value)) {
      //Does nothing if class doesn't exist
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Looks good!';
      phoneVal = true;
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'Oops, please enter a valid phone number.';
      phoneVal = false;
    }
  });

  subjectInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${subjectInp.id}Feedback`);
    
    // Validate: is a valid phone format
    if (notEmpty(subjectInp.value) && validSubject(subjectInp.value) && noAngleBr(subjectInp.value)) {
      //Does nothing if class doesn't exist
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Looks good!';
      subjectVal = true;
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'Oops, please keep your subject under 160 characters.';
      subjectVal = false;
    }
  });

  messageInp.addEventListener('input', () => {
    const feedback = document.querySelector(`#${messageInp.id}Feedback`);
    
    // Validate: is a valid phone format
    if (notEmpty(messageInp.value) && validMessage(messageInp.value) && noAngleBr(messageInp.value)) {
      //Does nothing if class doesn't exist
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Looks good!';
      messageVal = true;
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'Oops, please enter a message under 10000 characters. For security reasons, angle brackets (\< and \>) are not allowed.';
      messageVal = false;
    }
  });

  checkbox.addEventListener('change', () => {
    const feedback = document.querySelector(`#${checkbox.id}Feedback`);
    if (checkbox.checked) {
      feedback.classList.remove('invalid');
      //Add custom styling
      feedback.classList.add('valid');
      feedback.innerHTML = 'Thank you for protecting both of our privacies.';
    } else {
      //Not valid
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
      feedback.innerHTML = 'To submit your message, you must agree with this statement.';
    }
    checkVal = checkbox.checked;
  });

  //Form checks state upon every change and toggles submit button

  form.addEventListener('change', () => {
    if (firstNVal 
      && lastNVal 
      && emailVal 
      && phoneVal 
      && subjectVal 
      && messageVal 
      && checkVal) {
      submitBut.disabled = false;
    } else {
      submitBut.disabled = true;
    }
  });

});

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

