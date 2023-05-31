// Get modal elements
var signUpModal = document.getElementById('signUpModal');
var signInModal = document.getElementById('signInModal');
var createPostModal = document.getElementById('createPostModal');

// Get buttons that open modals
var signUpButton = document.getElementById('signUpButton');
var signInButton = document.getElementById('signInButton');
var allPostsButton = document.getElementById('allPostsButton');
var createPostButton = document.getElementById('createPostButton');
var showSignUpModal = document.getElementById('showSignUpModal');

// Get close buttons in modals
var closeButtons = document.getElementsByClassName('close');

// Open modals
signUpButton.addEventListener('click', function() {
  signUpModal.style.display = 'block';
});

signInButton.addEventListener('click', function() {
  signInModal.style.display = 'block';
});

allPostsButton.addEventListener('click', function() {
  // Redirect to bloglist.html or perform desired action
});

createPostButton.addEventListener('click', function() {
  createPostModal.style.display = 'block';
});

showSignUpModal.addEventListener('click', function() {
  signInModal.style.display = 'none';
  signUpModal.style.display = 'block';
});

// Close modals
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = 'none';
  });
}

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});


function goToPage(){
    // Change the URL to the desired HTML page
    window.location.href = "html/postslist.html";
}