// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('formResponse');
  
    if (!name || !email || !message) {
      response.style.color = 'red';
      response.textContent = 'Please fill in all fields.';
      return;
    }
  
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      response.style.color = 'red';
      response.textContent = 'Please enter a valid email address.';
      return;
    }
  
    // Success message
    response.style.color = 'green';
    response.textContent = 'Thank you for your message, ' + name + '!';
  
    // Clear the form fields
    document.getElementById('contactForm').reset();
  });
  