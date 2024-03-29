(function() {
    // Função para bloquear combinações de teclas específicas
    function bloquearAtalhos(evento) {
        // Bloquear Ctrl+Shift+I (ou U dependendo do navegador)
        if (evento.ctrlKey && evento.shiftKey && (evento.keyCode == 73 || evento.keyCode == 85)) {
            console.log('Ctrl+Shift+I/U bloqueado.');
            evento.preventDefault();
        }

        // Bloquear F12
        if (evento.keyCode == 123) {
            console.log('F12 bloqueado.');
            evento.preventDefault();
        }
    }

    // Adicionar listener para o evento de pressionamento de tecla
    document.addEventListener('keydown', bloquearAtalhos);
})();
