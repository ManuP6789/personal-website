// Function to open the default email client when the image is clicked
function sendEmail() {
    const emailAddress = 'manuel.pena.mt@gmail.com'; // Replace with your actual email address
    const subject = 'Hello!'; // You can customize the email subject

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
}

// Attach the click event to the email image
const emailImage = document.getElementById('email-image');
emailImage.addEventListener('click', sendEmail);


document.getElementById('linkedIn-image').addEventListener('click', function() {
    // Specify the URL you want the image to link to
    window.location.href = 'https://www.linkedin.com/in/manuel-pena-417262290/';})

document.getElementById('GitHub-image').addEventListener('click', function() {
    window.location.href = 'https://github.com/ManuP6789';})



