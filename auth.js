// This is a placeholder for actual authentication logic.
// In a real application, you would integrate with a backend service.

function login(username, password) {
    const loginButtonText = document.getElementById('loginButtonText');
    const loginSpinner = document.getElementById('loginSpinner');

    loginButtonText.innerText = 'Logging in...';
    loginSpinner.classList.remove('hidden');

    // Simulate a delay for the login process
    setTimeout(() => {
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            loginButtonText.innerText = 'Login';
            loginSpinner.classList.add('hidden');
            return true;
        } else {
            alert('Login failed. Invalid username or password.');
            loginButtonText.innerText = 'Login';
            loginSpinner.classList.add('hidden');
            return false;
        }
    }, 2000); // Simulate 2 seconds delay

    return false; // Prevent form submission while processing
}

function forgotPassword() {
    const username = prompt("Enter your username:");
    if (username) {
        // Simulate sending a password reset email
        alert(`A password reset link has been sent to the email associated with username: ${username}`);
    } else {
        alert("Username is required to reset the password.");
    }
}

function sendRegistrationEmail(email, name) {
    // Simulate sending an email
    alert(`Sending registration confirmation email to ${email} for ${name}!`);
}
