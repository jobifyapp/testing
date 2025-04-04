// Check if the user is logged in as "master" from localStorage
if (localStorage.getItem('master') !== 'true') {
    // If not logged in, redirect to login page
    window.location.href = 'index.html';.
    
} else {
    // If logged in, display a welcome message
    document.getElementById('welcome-message').textContent = 'Welcome, Master!';
}

// Handle "Log out all masters" functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Remove 'master' from localStorage to log out
    localStorage.removeItem('master');
    // Show an alert that the user has been logged out
    alert('You have been logged out.');
    // Redirect to the login page after logging out
    window.location.href = 'index.html';
});
