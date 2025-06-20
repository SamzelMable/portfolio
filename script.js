//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Typing Animation for Header
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


//Interactive Project Previews
document.querySelectorAll('.projects .project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = 'none';
    });
});


//Hover effect socials
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

// Sample gallery content for each project (can be images, text, videos, etc.)
const galleryContent = {
  logos: `
    <h3>Logo Designs Gallery</h3>
    <img src="images/Hair-in-paradise.png" alt="Logo 1" style="width:100%; margin-bottom:10px; border-radius:8px;">
    <img src="images/Marnoel.png" alt="Logo 2" style="width:100%; margin-bottom:10px; border-radius:8px;">
    <img src="images/MarleM.jpg" alt="Logo 3" style="width:100%; margin-bottom:10px; border-radius:8px;">

  `,
  'business-card': `
    <h3>Business Card Design</h3>
    <img src="images/Card1.png" alt="Business Card" style="width:100%; border-radius:8px;">
    <img src="images/Card2.png" alt="Business Card" style="width:100%; border-radius:8px;">
    <img src="images/QCWA.png" alt="Leaflet" style="width:100%; border-radius:8px;">
  `,
  leaflet: `
    <h3>Leaflet Design</h3>
    <img src="images/HirePOS2.png" alt="Leaflet" style="width:100%; border-radius:8px;">
    <img src="images/HirePOS1.png" alt="Leaflet" style="width:100%; border-radius:8px;">
    <img src="images/front.png" alt="Leaflet" style="width:100%; border-radius:8px;">
    <img src="images/Back.png" alt="Leaflet" style="width:100%; border-radius:8px;">
  `
};

const modal = document.getElementById('galleryModal');
const galleryBody = document.getElementById('galleryBody');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.open-gallery').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const galleryKey = link.getAttribute('data-gallery');
    galleryBody.innerHTML = galleryContent[galleryKey] || '<p>No content available.</p>';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal if clicking outside the content box
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
