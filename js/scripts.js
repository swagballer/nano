// Select all necessary elements
const gridItems = document.querySelectorAll('.grid-item');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const videoElement = modal.querySelector('video');
const closeButton = modal.querySelector('.close-button');

// Function to open modal
function openModal(videoSrc) {
  videoElement.src = videoSrc;
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to close modal
function closeModal() {
  videoElement.pause();
  videoElement.src = ''; // Clear video source
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

// Add event listeners to grid items
gridItems.forEach(item => {
  item.addEventListener('click', () => {
    const videoSrc = item.getAttribute('data-video');
    openModal(videoSrc);
  });
});

// Add event listener to close button and overlay
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
