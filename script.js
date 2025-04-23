const sections = document.querySelectorAll('section');

const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);
  

  function setupSmoothScroll() {
    let links = document.querySelectorAll('.navbar a');
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault(); 
  
        let targetId = this.getAttribute('href'); 
        let targetSection = document.querySelector(targetId); 
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth' 
          });
        }
      });
    }
  }
  
  setupSmoothScroll();
  