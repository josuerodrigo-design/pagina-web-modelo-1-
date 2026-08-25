// Seleção de elementos do DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Lógica para alternar classes/atributos de tema
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
});
