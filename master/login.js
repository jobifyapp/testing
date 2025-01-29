// Simulate a simple authentication check
const validUsername = 'master';
const validPassword = 'password123'; // Change this for actual use!

// When the login form is submitted
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input from the login form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === validUsername && password === validPassword) {
        // If correct, set localStorage 'master' key to 'true'
        localStorage.setItem('master', 'true');
        // Redirect to console page
        window.location.href = 'console.html';
    } else {
        // If incorrect, show an error message
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
