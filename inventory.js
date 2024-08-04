// inventory.js
document.getElementById('inventoryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const medicine = document.getElementById('medicine').value;
  const quantity = document.getElementById('quantity').value;
  const expiration = document.getElementById('expiration').value;

  // Add new inventory item to the table
  const table = document.querySelector('table tbody');
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = medicine;
  newRow.insertCell(1).innerText = quantity;
  newRow.insertCell(2).innerText = expiration;

  // Clear the form
  document.getElementById('inventoryForm').reset();
});
