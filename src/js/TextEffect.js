
    const fullText = "Hi, I made something for you...";
    const typingElement = document.getElementById('typingText');
    let currentIndex = 4; // Start after "Hi, "
    let isTyping = true;
    
    function typeText() {
      if (isTyping) {
        if (currentIndex < fullText.length) {
          typingElement.textContent = fullText.substring(0, currentIndex + 1);
          currentIndex++;
          setTimeout(typeText, 100); // Adjust speed here (100ms per character)
        } else {
          // Wait before deleting
          setTimeout(() => {
            isTyping = false;
            deleteText();
          }, 2000);
        }
      }
    }
    
    function deleteText() {
      if (!isTyping) {
        if (currentIndex > 4) { // Delete back to "Hi, "
          typingElement.textContent = fullText.substring(0, currentIndex - 1);
          currentIndex--;
          setTimeout(deleteText, 50); // Delete faster
        } else {
          // Wait before typing again
          setTimeout(() => {
            isTyping = true;
            typeText();
          }, 1000);
        }
      }
    }
    
    // Start typing effect after page loads
    window.addEventListener('load', () => {
      setTimeout(typeText, 500); // Wait 500ms before starting
    });
