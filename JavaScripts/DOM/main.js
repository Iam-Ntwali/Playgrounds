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

// CREATE ELEMENT
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'indigo';
newDiv.setAttribute('class', 'second - div')
newDiv.classList.add('container');
newDiv.style.marginTop = '2rem  ';
document.body.appendChild(newDiv);

const title = document.createElement('h1');
title.textContent = '2nd Div';
title.classList.add('title');
newDiv.appendChild(title);

const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem Ipsum lore dk texts et dolor lorem';

title.insertAdjacentElement('afterend', paragraph);

// APPEND AND PREPEND
const newParagraph = document.createElement('span');
newParagraph.textContent = 'New paragraph';
newDiv.append(newParagraph);

newParagraph.prepend(document.createElement('h2').textContent = 'New Title ');

const createBtn = document.querySelector("#createDiv");


createBtn.onclick = () => {
  const newDiv = document.createElement('div');
  newDiv.style.backgroundColor = 'indigo';
  newDiv.setAttribute('class', 'second - div')
  newDiv.classList.add('container');
  newDiv.style.marginTop = '2rem  ';
  document.body.appendChild(newDiv);

  const title = document.createElement('h1');
  title.textContent = '2nd Div';
  title.classList.add('title');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    newDiv.remove();
  });
  newDiv.appendChild(title);
  newDiv.appendChild(deleteBtn);
};


