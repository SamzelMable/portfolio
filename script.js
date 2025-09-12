// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation for Header
document.addEventListener('DOMContentLoaded', () => {
  const text = "Hello! I'm Samuel Marle";
  let index = 0;
  function type() {
    if (index < text.length) {
      document.querySelector('header h1').textContent += text[index];
      index++;
      setTimeout(type, 100);
    }
  }
  type();
});

// Hover effect for projects
document.querySelectorAll('.projects-grid .project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = 'none';
    });
});

// Hover effect for socials
document.querySelectorAll('.socials a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
        link.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link.style.boxShadow = 'none';
    });
});

// --- Gallery Carousel ---

const galleryContent = {
  logos: [
    "images/Hair-in-paradise.png",
    "images/Marnoel.png",
    "images/MarleM.png"
  ],
  'business-card': [
    "images/Card1.png",
    "images/Card2.png",
    "images/QCWA.png"
  ],
  leaflet: [
    "images/HirePOS2.png",
    "images/HirePOS1.png",
    "images/front.png",
    "images/Back.png"
  ],
  jammming: [
    "images/jammming1.png",
    "images/jammming2.png"
  ],
  'reddit-client': [
    "images/reddit1.png",
    "images/reddit2.png"
  ]
};

const modal = document.getElementById('galleryModal');
const galleryBody = document.getElementById('galleryBody');
const closeButton = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentGallery = [];
let currentIndex = 0;

function showImage(index) {
    const images = galleryBody.querySelectorAll('img');
    images.forEach(img => img.style.display = 'none');
    if (images[index]) images[index].style.display = 'block';
}

// Open gallery
document.querySelectorAll('.open-gallery').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const key = link.getAttribute('data-gallery');
        currentGallery = galleryContent[key] || [];
        galleryBody.innerHTML = currentGallery.map(src => `<img src="${src}" style="width:100%; border-radius:8px;">`).join('');
        currentIndex = 0;
        showImage(currentIndex);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Click outside modal to close
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Previous / Next buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showImage(currentIndex);
});
