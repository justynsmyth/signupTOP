document.getElementById('mainForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    if (!emailInput.checkValidity()) {
      event.preventDefault();
      emailInput.classList.add('user-invalid');
    } else {
      emailInput.classList.remove('user-invalid');
    }
  });
  