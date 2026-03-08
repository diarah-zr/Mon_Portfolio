// Script pour le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
      alert(`Merci ${name}! Votre message a été reçu. Nous vous recontacterons à ${email}`);
      this.reset();
    }
  });