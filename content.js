(() => {
  try {
    // Find the first video element on the page
    const videoElement = document.querySelector('video');
    if (!videoElement) {
      showTemporaryAlert('No video element found on this page.');
      return;
    }

    // Get the first child source element's src
    const sourceElement = videoElement.querySelector('source');
    const videoSrc = sourceElement ? sourceElement.src : videoElement.src;

    if (!videoSrc) {
      showTemporaryAlert('No video source found.');
      return;
    }

    // Create a temporary textarea element to copy the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = videoSrc;
    document.body.appendChild(tempTextArea);

    // Select the text and copy it to the clipboard
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    showTemporaryAlert('Video source copied to clipboard: ' + videoSrc, 'success');
  } catch (error) {
    console.error('Error copying video source:', error.toString());
    showTemporaryAlert('Failed to copy video source. Check the console for details.');
  }

  // Function to show a temporary alert
  function showTemporaryAlert(message, type = 'error') {
    const alert = document.createElement('div');
    alert.textContent = message;
    alert.style.position = 'fixed';
    alert.style.bottom = '20px';
    alert.style.left = '50%';
    alert.style.transform = 'translateX(-50%)';
    alert.style.padding = '10px 20px';
    alert.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
    alert.style.color = 'white';
    alert.style.borderRadius = '5px';
    alert.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    alert.style.zIndex = '10000';
    alert.style.fontSize = '16px';
    alert.style.fontFamily = 'Arial, sans-serif';

    document.body.appendChild(alert);

    // Automatically remove the alert after 3 seconds
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
})();
