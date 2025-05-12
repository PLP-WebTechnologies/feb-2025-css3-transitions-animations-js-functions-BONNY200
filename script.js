// Retrieving stored preferences (if any)
document.addEventListener('DOMContentLoaded', () => {
    const storedColor = localStorage.getItem('buttonColor');
    if (storedColor) {
      document.body.style.backgroundColor = storedColor;  // Applying saved background color
    }
  });
  
  // Function to toggle animation on button click
  const animateButton = document.getElementById('animateButton');
  const animatedBox = document.getElementById('animatedBox');
  
  // Trigger an animation when the button is clicked
  animateButton.addEventListener('click', () => {
    // Apply the animation to the box
    animatedBox.classList.toggle('animateSize');
  
    // Store animation state (if needed) in localStorage
    localStorage.setItem('boxAnimation', 'sizeToggled');
  });
  
  // Function to change background color and store the preference
  const changeColorButton = document.getElementById('changeColorButton');
  
  changeColorButton.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  
    // Save the selected color to localStorage
    localStorage.setItem('buttonColor', newColor);
  });
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  