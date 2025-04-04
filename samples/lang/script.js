// Get the modal and buttons
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");

// Open the modal when the contact button is clicked
openModalBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents any default action for the link
    modal.style.display = "flex"; // Shows the modal
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Close modal when clicking outside
    }
});

// Language Dropdown Toggle
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle the dropdown open or closed when clicking the button
dropdownBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click event from propagating to the window
    dropdownMenu.classList.toggle("show"); // Toggle the visibility of the dropdown
});

// Close the dropdown when clicking anywhere outside of the dropdown
window.addEventListener("click", function (event) {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show"); // Close dropdown if clicked outside
    }
});
