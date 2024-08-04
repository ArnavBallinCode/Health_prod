// preop.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('preopForm');
  const table = document.getElementById('preopTable').getElementsByTagName('tbody')[0];

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const surgeryDate = document.getElementById('surgeryDate').value;
    const surgeryType = document.getElementById('surgeryType').value;
    const surgeonName = document.getElementById('surgeonName').value;

    if (surgeryDate && surgeryType && surgeonName) { // Ensure all fields are filled
      const newRow = table.insertRow();
      newRow.insertCell().textContent = surgeryDate;
      newRow.insertCell().textContent = surgeryType;
      newRow.insertCell().textContent = surgeonName;

      form.reset(); // Reset the form fields
    } else {
      alert('Please fill out all fields.');
    }
  });
});
