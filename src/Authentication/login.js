document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedPassword = localStorage.getItem(username);
        console.log(username, password, storedPassword);

        if (storedPassword === password) {
            messageDiv.innerText = 'Login successful!';
            messageDiv.style.color = 'green';

            // Redirect to home.html after 2 seconds
            setTimeout(() => {
                window.location.href = '../Payment/payment.html';
            }, 2000);
            
        } else {
            messageDiv.innerText = 'Invalid username or password';
            messageDiv.style.color = 'red';
            
        }
    });
});