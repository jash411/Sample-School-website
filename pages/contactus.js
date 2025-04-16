// Select the button and the message paragraph
const button = document.getElementById('cbtn');
// const message = document.getElementById('message');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Display the successful message
    alert("Email sent successfully");
    message.textContent = 'Action Successful!';
    // message.style.display ='block';
});