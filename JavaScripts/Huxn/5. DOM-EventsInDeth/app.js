const keyPressInput = document.querySelector('#keyPressInput');


document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
  console.log(`Key Code: ${e.code}`);
});