// mode.js

document.addEventListener('DOMContentLoaded', () => {
  const modeSwitch = document.getElementById('modeSwitch');
  const currentMode = localStorage.getItem('mode') || 'light-mode';
  
  document.body.classList.add(currentMode);
  modeSwitch.checked = currentMode === 'dark-mode';

  modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
      document.body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('mode', 'dark-mode');
    } else {
      document.body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('mode', 'light-mode');
    }
  });
});
