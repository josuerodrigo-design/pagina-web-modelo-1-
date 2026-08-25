// Seleciona o botão de alternar tema e o elemento HTML principal
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Monitora o clique no botão para alternar o atributo customizado (Temas)
themeToggleBtn.addEventListener('click', () => {
    // Obtém o tema atual do atributo de dados (data-theme)
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // Altera entre 'light' (claro) e 'dark' (escuro)
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
});
