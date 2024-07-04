const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-btn');

// Toggle Sidebar on Click
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('hide-sidebar');
  if (!sidebar.classList.contains('hide-sidebar')) {
    toggleButton.textContent = 'Hide Sidebar';
  } else {
    toggleButton.textContent = 'Show Sidebar';
  }
});