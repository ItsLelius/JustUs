// Message data - you can customize these
const messages = {
  1: {
    image: '../assets/img/messageBoxImg/img1.png',
    text: 'And still at the end of every argument, I love you just how I promised I will.'
  },
  2: {
    image: '../assets/img/messageBoxImg/img2.png',
    text: 'You owe me nothing. I didt it out of love.'
  },
  3: {
    image: '../assets/img/messageBoxImg/img3.png',
    text:  "Forever, I'm going to choose you because you're the only person I wanna be with."
  },
  4: {
    image: '../assets/img/messageBoxImg/img4.png',
    text: 'Knowing you more could never make me love you less.'
  },
  5: {
    image: '../assets/img/messageBoxImg/img5.png',
    text: "At the end of the day, you're the home I always come back to"
  },
  6: {
    image: '../assets/img/messageBoxImg/img6.png',
    text: 'You deserve to loved and chosen.'
  },
  7: {
    image: '../assets/img/messageBoxImg/img7.png',
    text: "There are certain people who make the world a better place just by being in it. You are one of those people." 
  },
  8: {
    image: '../assets/img/messageBoxImg/img8.png',
    text: 'Of all lives that exist, I am happy to exist in yours.'
  },
  9: {
    image: '../assets/img/messageBoxImg/img9.png',
    text:  "No matter what has happened. No matter what you have done. No matter what you will do. I will always love you. I want you in my life for today, tomorrow and forever."
  },
  10: {
    image: '../assets/img/messageBoxImg/img10.png',
    text: "You are the only flower that will bloom forever in my heart. Happy Valentine’s Day, My Love!"
  }
};

// Preload all images when page loads
const imageCache = {};
window.addEventListener('load', function() {
  Object.keys(messages).forEach(function(key) {
    const img = new Image();
    img.src = messages[key].image;
    imageCache[key] = img;
  });
});

function openModal(messageId) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalText = document.getElementById('modalText');
  const message = messages[messageId];
  
  // Hide modal content initially
  modal.style.opacity = '0';
  modal.classList.add('active');
  
  // Set text immediately
  modalText.textContent = message.text;
  
  // Check if image is already cached
  if (imageCache[messageId] && imageCache[messageId].complete) {
    modalImage.src = message.image;
    modal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  } else {
    // Load image first, then show modal
    const tempImage = new Image();
    tempImage.onload = function() {
      modalImage.src = message.image;
      modal.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    };
    tempImage.onerror = function() {
      // Fallback: show modal even if image fails
      modalImage.src = message.image;
      modal.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    };
    tempImage.src = message.image;
  }
}

function closeModal(event) {
  if (event && event.target.classList.contains('modal-content')) {
    return; // Don't close if clicking inside modal content
  }
  
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  modal.style.opacity = '';
  document.body.style.overflow = ''; // Restore scrolling
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});