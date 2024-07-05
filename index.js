// Write your code here!
// index.js
// Remove the <main> element with an id of "main"
document.querySelector('main#main').remove();

// Create a new <h1> element and assign it to the newHeader variable
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Azmi Adan is the champion'; // Replace John Doe with your actual name

// Add the newHeader element to the DOM
document.body.appendChild(newHeader);