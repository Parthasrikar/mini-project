document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const text = "Welcome to Our Learning Management System";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            typingText.innerHTML += '<span class="typing-cursor"></span>';
        }
    }

    typeWriter();
});