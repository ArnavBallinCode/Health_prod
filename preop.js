// preop.js

// Function to handle form submission
document.getElementById('preopChecklistForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const patientName = document.getElementById('patientName').value;
  const procedure = document.getElementById('procedure').value;
  const checklist = document.getElementById('checklist').value;
  
  // Validate input
  if (!patientName || !procedure || !checklist) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Create a new row in the checklists table
  const table = document.getElementById('checklistsTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = patientName;
  newRow.insertCell(1).innerText = procedure;
  newRow.insertCell(2).innerText = checklist;

  // Display confirmation message
  alert('Checklist saved successfully!');
  
  // Clear the form
  document.getElementById('preopChecklistForm').reset();
});
