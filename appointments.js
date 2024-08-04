// appointments.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentsForm');
  const table = document.getElementById('appointmentsTable').getElementsByTagName('tbody')[0];

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const doctorName = document.getElementById('doctorName').value;

    if (patientName && appointmentDate && doctorName) { // Ensure all fields are filled
      const newRow = table.insertRow();
      newRow.insertCell().textContent = patientName;
      newRow.insertCell().textContent = appointmentDate;
      newRow.insertCell().textContent = doctorName;

      form.reset(); // Reset the form fields
    } else {
      alert('Please fill out all fields.');
    }
  });
});
