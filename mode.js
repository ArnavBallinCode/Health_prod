// mode.js

document.addEventListener('DOMContentLoaded', () => {
  const modeSwitch = document.getElementById('modeSwitch');

  // Load saved mode from local storage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    modeSwitch.checked = true;
  }

  modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
