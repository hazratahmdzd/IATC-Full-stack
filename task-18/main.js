const darkModeToggle = document.getElementById('darkModeToggle');
const svgElement = document.getElementById('mySVG');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  setPlaceholderColor('#ffffff');
  document.querySelectorAll('a').forEach(link => {
    link.style.color = '#ffffff';
  });
  svgElement.style.fill = '#a90bd0';
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  setPlaceholderColor('#000000');
  document.querySelectorAll('a').forEach(link => {
    link.style.color = '#000000';
  });
  svgElement.style.fill = '';
}

function setPlaceholderColor(color) {
  const placeholders = document.querySelectorAll('input::placeholder');
  
  placeholders.forEach((placeholder) => {
    placeholder.style.color = color;
  });
}

