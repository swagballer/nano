const gridItems = document.querySelectorAll('.grid-item');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const videoElement = modal.querySelector('video');
const closeButton = modal.querySelector('.close-button');

function openModal(videoSrc) {
  videoElement.src = videoSrc;
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function closeModal() {
  videoElement.pause();
  videoElement.src = '';
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

gridItems.forEach(item => {
  const videoSrc = item.getAttribute('data-video');
  if (videoSrc) {
    item.addEventListener('click', () => openModal(videoSrc));
  }
});

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
