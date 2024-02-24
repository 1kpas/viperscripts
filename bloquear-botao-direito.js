document.addEventListener('DOMContentLoaded', () => {
    // Bloqueia copiar
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        alert('Copiar conteúdo não é permitido.');
    });

    // Bloqueia recortar
    document.addEventListener('cut', (e) => {
        e.preventDefault();
        alert('Recortar conteúdo não é permitido.');
    });

    // Bloqueia o menu de contexto para impedir a cópia pelo botão direito
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('O uso do botão direito é restrito nesta página.');
    });
});
