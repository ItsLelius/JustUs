 // Message data - you can customize these
    const messages = {
      1: {
        image: '../assets/img/messageBoxImg/img1.jpg',
        text: 'Message 1'
      },
      2: {
        image: '../assets/img/messageBoxImg/img2.jpg',
        text: 'Maldita'
      },
      3: {
        image: '../assets/img/messageBoxImg/img3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.'
      },
      4: {
        image: '../assets/img/messageBoxImg/img4.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
      },
      5: {
        image: '../assets/img/messageBoxImg/img5.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
      },
      6: {
        image: '../assets/img/messageBoxImg/img6.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.'
      },
      7: {
        image: '../assets/img/messageBoxImg/img7.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
      },
      8: {
        image: '../assets/img/messageBoxImg/img8.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam.'
      },
      9: {
        image: '../assets/img/messageBoxImg/img9.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus.'
      },
      10: {
        image: '../assets/img/messageBoxImg/img10.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio.'
      }
    };

    function openModal(messageId) {
      const modal = document.getElementById('modal');
      const modalImage = document.getElementById('modalImage');
      const modalText = document.getElementById('modalText');
      
      const message = messages[messageId];
      modalImage.src = message.image;
      modalText.textContent = message.text;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal(event) {
      if (event && event.target.classList.contains('modal-content')) {
        return; // Don't close if clicking inside modal content
      }
      
      const modal = document.getElementById('modal');
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });