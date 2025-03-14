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
