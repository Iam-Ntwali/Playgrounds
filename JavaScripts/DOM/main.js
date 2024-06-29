// DOM -> Document Object Model
const h1 = document.querySelector('h1');
h1.classList.add('h1');
console.log(h1.classList.contains('h1'))
console.log(h1);
// Assuming there's only one '.container' element for simplicity
const containers = document.getElementsByClassName('container');

if (containers.length > 0) {
  const firstContainer = containers[0]; // Get the first (and possibly only) container
  firstContainer.addEventListener('click', () => {
    console.log(firstContainer.children[1].children[0])
    firstContainer.style.backgroundColor = 'Teal';
    firstContainer.children[1].children[0].textContent = 'Clicked';
  });
} else {
  console.log('No elements found with class "container".');
}

const link = document.querySelector('a');
console.log(link)

link.setAttribute('href', 'https://www.google.com');
console.log(link.getAttribute('href'))




