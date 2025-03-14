document.getElementById('registration').addEventListener('submit', function(e) {
    // 1. Get the values from the form fields
    // We grab the user's input for username, passwords, and checkbox agreement here.
    let username = document.querySelector('input[name="username"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let passwordCheck = document.querySelector('input[name="passwordCheck"]').value;
    let terms = document.querySelector('input[name="terms"]').checked;
    
     // 2. Hide the error display section by default
    //  comment: We hide the error message box before starting any validation.
    let errorDisplay = document.getElementById('errorDisplay');
    errorDisplay.style.display = 'none';  // Keep error box hidden unless needed.
//

// 3. Validate the username
    // Mama comment: We check if the username is long enough and has at least 2 unique characters.
    if (username.length < 4 || new Set(username).size < 2) {
        errorDisplay.innerHTML = "Username must be at least 4 characters with at least 2 unique characters.";
        errorDisplay.style.display = 'block';  // Show error message.
        e.preventDefault();  // Stop the form from submitting if invalid.
        return;  // Exit the function to avoid further checks.
    }