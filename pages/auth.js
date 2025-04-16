//signup
document.getElementById("signup-button")?.addEventListener('click', function(){
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    // Validate inputs
    if (username.trim()=== '' || password.trim()==='' ) {
        alert("Please fill in all fields");
        return;
    }
    //check if the username is already exists
    if(localStorage.getItem(username)){
        alert("Username already exists");
        return;
    }
    // Store the user data in local storage
    localStorage.setItem(username,password);
    alert("User registration successful");
    window.location.href='login.html';
    
})


document.getElementById("login-Button")?.addEventListener('click', function() {
    const username = document.getElementById("login-Username").value;
    const password = document.getElementById("login-Password").value;

    // Validate inputs
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Check if the username exists and the password matches
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
        window.location.href = 'admin.html'; // Redirect to welcome page
    } else {
        alert('Invalid username or password.');
    }
});
