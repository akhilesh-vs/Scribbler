// Get the modal element
const modal = document.getElementById('deletePostModal');

// Get the close button
const closeButton = document.getElementsByClassName('close')[0];

// Get the cancel button
const cancelButton = document.getElementById('cancelButton');

// Get the delete button
const deleteButton = document.getElementById('deleteButton');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
closeButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);

// Attach openModal function to each delete icon
const deleteIcons = document.getElementsByClassName('delete-icon');
for (let i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener('click', openModal);
}

// Function to handle the delete button click event
function handleDeleteButton() {
    // TODO: Write code to delete the post here

    // Close the modal after deleting the post
    closeModal();
}

deleteButton.addEventListener('click', handleDeleteButton);
