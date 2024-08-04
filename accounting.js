// accounting.js

// Function to handle form submission
document.getElementById('accountingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const appointmentId = document.getElementById('appointmentId').value;
  const patientName = document.getElementById('patientName').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const paymentStatus = document.getElementById('paymentStatus').value;
  
  // Validate input
  if (!appointmentId || !patientName || !appointmentDate || !paymentStatus) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Create a new row in the records table
  const table = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = appointmentId;
  newRow.insertCell(1).innerText = patientName;
  newRow.insertCell(2).innerText = appointmentDate;
  newRow.insertCell(3).innerText = paymentStatus;

  // Display confirmation message
  alert('Record added successfully!');
  
  // Clear the form
  document.getElementById('accountingForm').reset();
});
