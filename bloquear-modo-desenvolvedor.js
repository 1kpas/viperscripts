(function() {
    document.addEventListener('keydown', function(e) {
        // Combinações de teclas para bloquear
        const combinacoesBloqueadas = [
            { key: 'F12' },
            { key: 'I', ctrlKey: true, shiftKey: true }, // Ctrl+Shift+I
            { key: 'J', ctrlKey: true, shiftKey: true }, // Ctrl+Shift+J
            { key: 'C', ctrlKey: true, shiftKey: true }, // Ctrl+Shift+C
            { key: 'K', ctrlKey: true, shiftKey: true }, // Ctrl+Shift+K
        ];

        // Verifica se a combinação de teclas atual deve ser bloqueada
        const deveBloquear = combinacoesBloqueadas.some(combinacao => 
            e.key.toUpperCase() === combinacao.key &&
            (combinacao.ctrlKey === undefined || e.ctrlKey === combinacao.ctrlKey) &&
            (combinacao.shiftKey === undefined || e.shiftKey === combinacao.shiftKey)
        );

        if (deveBloquear) {
            console.log('Tentativa de uso de atalho bloqueada.');
            e.preventDefault(); // Impede a ação padrão
            window.location.href = 'about:blank'; // Redireciona para página em branco
        }
    });
})();
