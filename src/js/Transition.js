
    // Smooth transition to Main.html
    document.getElementById('envelopeBtn').addEventListener('click', function() {
      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = 'Main.html';
      }, 500); // Wait for fade animation to complete
    });

