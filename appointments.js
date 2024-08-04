// appointments.js

// Function to handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  
  // Validate input
  if (!doctor || !date || !time) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Create a new row in the appointments table
  const table = document.getElementById('appointmentsTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = doctor;
  newRow.insertCell(1).innerText = date;
  newRow.insertCell(2).innerText = time;
  
  // Display confirmation message
  document.getElementById('appointmentResult').innerHTML = `<p>Appointment booked with ${doctor} on ${date} at ${time}.</p>`;
  
  // Clear the form
  document.getElementById('appointmentForm').reset();
});
