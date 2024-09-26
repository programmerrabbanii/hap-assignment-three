const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); 
    toggleButton.classList.toggle('fa-sun'); 
    toggleButton.classList.toggle('fa-moon'); 
});