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

