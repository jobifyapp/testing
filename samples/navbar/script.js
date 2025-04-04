// Get the modal and buttons
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");

// Open the modal when the contact button is clicked
openModalBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents any default action for the link
    modal.style.display = "flex"; // Shows the modal
});

// Close the modal when the "X" button is clicked
closeBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Hides the modal
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Close modal when clicking outside
    }
});
