// inventory.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inventoryForm');
  const table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const medicineName = document.getElementById('medicineName').value;
    const quantity = document.getElementById('quantity').value;
    const expirationDate = document.getElementById('expirationDate').value;

    if (medicineName && quantity && expirationDate) { // Ensure all fields are filled
      const newRow = table.insertRow();
      newRow.insertCell().textContent = medicineName;
      newRow.insertCell().textContent = quantity;
      newRow.insertCell().textContent = expirationDate;

      form.reset(); // Reset the form fields
    } else {
      alert('Please fill out all fields.');
    }
  });
});
