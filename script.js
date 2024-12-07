// Select elements from the DOM
const addItemButton = document.getElementById('addItemButton');
const clearListButton = document.getElementById('clearListButton');
const shoppingList = document.getElementById('shoppingList');
const itemInput = document.getElementById('itemInput');

// Function to add an item to the list
addItemButton.addEventListener('click', function () {
  const itemText = itemInput.value.trim(); 

  if (itemText) {
    const listItem = document.createElement('li'); // Create a new <li> element
    listItem.textContent = itemText; // Set its text
    shoppingList.appendChild(listItem); // Add to the list

    // Add event listener to toggle 'purchased' class
    listItem.addEventListener('click', function () {
      listItem.classList.toggle('purchased');
    });

    itemInput.value = ''; // Clear input field
  } else {
    alert('Please enter an item!');
  }
});

// Function to clear all items
clearListButton.addEventListener('click', function () {
  shoppingList.innerHTML = ''; // Clear the list
});
