//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');
  const blockIdInput = document.getElementById('block_id');
  const colorIdInput = document.getElementById('colour_id');
  const gridItems = document.querySelectorAll('.grid-item');

  // Function to reset all grid items to transparent
  function resetGrid() {
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  }

  // Function to change the color of the specified grid item
  changeButton.addEventListener('click', function() {
    const blockId = parseInt(blockIdInput.value);
    const color = colorIdInput.value.trim();
    
    // Validate inputs
    if (blockId >= 1 && blockId <= 9 && color) {
      resetGrid(); // Reset all grid items first
      const targetBlock = document.getElementById(blockId);
      targetBlock.style.backgroundColor = color; // Change the background color
    } else {
      alert('Please enter a valid block ID (1-9) and a color.');
    }
  });

  // Reset the grid when clicking the Reset button
  resetButton.addEventListener('click', function() {
    resetGrid();
    blockIdInput.value = '';  // Clear the input fields
    colorIdInput.value = '';
  });
});
