document.addEventListener('DOMContentLoaded', (event) => {
    const registerForm = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        if (localStorage.getItem(newUsername)) {
            messageDiv.style.color = 'red';
            messageDiv.innerText = 'Username already exists';
        } else {
            localStorage.setItem(newUsername, newPassword);
            messageDiv.style.color = 'green';
            messageDiv.innerHTML = 'Registration successful! You can now <a href="./login.html">login</a>';
        }
    });
});