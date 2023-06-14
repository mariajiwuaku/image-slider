"use strict";

/*const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    
    prompt('Image clicked:', image.alt);
  });
});*/


const images = [
  "image1.jpg",
  "image2.jpg",
  // Add the remaining image URLs
];

const prevButtons = document.querySelectorAll(".prevButton");
const nextButtons = document.querySelectorAll(".nextButton");
const galleryImages = document.querySelectorAll(".gallery img");

prevButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const currentIndex = Array.from(galleryImages).findIndex(
      (img) => img.src === e.target.parentNode.previousElementSibling.href
    );
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImages[currentIndex].parentNode.style.display = "none";
    galleryImages[previousIndex].parentNode.style.display = "block";
  });
});

nextButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const currentIndex = Array.from(galleryImages).findIndex(
      (img) => img.src === e.target.parentNode.previousElementSibling.href
    );
    const nextIndex = (currentIndex + 1) % images.length;
    galleryImages[currentIndex].parentNode.style.display = "none";
    galleryImages[nextIndex].parentNode.style.display = "block";
  });
});
