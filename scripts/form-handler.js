var contactForm = document.getElementById('contactForm');

var handleContactFormSubmit = function (evt) {
  evt.preventDefault();

  alert('Your Information has been submitted!');
}


contactForm.addEventListener('submit', handleContactFormSubmit);
