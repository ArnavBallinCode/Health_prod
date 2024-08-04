// accounting.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('accountingForm');
  const table = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const appointmentId = document.getElementById('appointmentId').value;
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const paymentStatus = document.getElementById('paymentStatus').value;

    if (appointmentId && patientName && appointmentDate && paymentStatus) { // Ensure all fields are filled
      const newRow = table.insertRow();
      newRow.insertCell().textContent = appointmentId;
      newRow.insertCell().textContent = patientName;
      newRow.insertCell().textContent = appointmentDate;
      newRow.insertCell().textContent = paymentStatus;

      form.reset(); // Reset the form fields
    } else {
      alert('Please fill out all fields.');
    }
  });
});
