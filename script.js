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

let partIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentSentence = sentences[partIndex];
  const plainText = currentSentence.replace(" | ", " | "); // just normalize spacing
  const currentText = plainText.substring(0, charIndex);

  // Inject styled span for |
  let displayHTML;
  if (plainText.includes(" | ") && currentText.includes("|")) {
    const [before, after] = currentText.split(" | ");
    displayHTML = `${before}<span class="styled-bar">|</span>${after || ''}`;
  } else {
    displayHTML = currentText;
  }

  typeElement.innerHTML = displayHTML;

  if (!isDeleting) {
    charIndex++;
    if (charIndex > plainText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      partIndex = (partIndex + 1) % sentences.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
