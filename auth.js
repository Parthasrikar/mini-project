document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const successMessage = urlParams.get('message');
        if (successMessage) {
            const messageElement = document.createElement('div');
            messageElement.textContent = decodeURIComponent(successMessage);
            messageElement.className = 'success-message';
            loginForm.prepend(messageElement);
        }

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Login attempt:', username, password);
            window.location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('newUsername').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("Passwords don't match!");
                return;
            }

            console.log('Registration attempt:', username, email, password);
            const successMessage = encodeURIComponent("Registration successful! Please log in.");
            window.location.href = `login.html?message=${successMessage}`;
        });
    }
});