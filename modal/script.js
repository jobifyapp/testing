// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block";  // Show the modal
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";  // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  // Hide the modal
    }
}
