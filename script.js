// Reveal Sections on Scroll
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Typewriter Effect with Full Sentence Before Deleting
const typeElement = document.getElementById('typewriter-text');
const sentences = [
  "Full-Stack Developer | MEAN Stack & WordPress Specialist",
  "Building Scalable Web Apps & Custom WordPress Solutions",
  "I love clean, scalable code.",
  "Let's build something great together!"
];
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentSentence = sentences[sentenceIndex];
  const displayedText = currentSentence.slice(0, charIndex);
  typeElement.textContent = displayedText;

  if (!isDeleting && charIndex < currentSentence.length) {
    charIndex++;
    setTimeout(typeWriter, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeWriter, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
    setTimeout(typeWriter, 1500);
  }
}

if (typeElement) {
  typeWriter();
}
