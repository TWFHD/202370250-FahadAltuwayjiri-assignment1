

const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour < 12) {
  greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening! Welcome to my portfolio.";
}


const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Thank you! Your message has been received.";
  contactForm.reset();
});


document.getElementById("year").textContent = new Date().getFullYear();
