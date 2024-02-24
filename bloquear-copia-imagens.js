(function() {
    function disableTextSelectionAndDrag() {
        // Desabilita a seleção de texto
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
        document.body.style.MozUserSelect = 'none';
        document.body.style.msUserSelect = 'none';

        // Previne o arraste de elementos na página
        document.body.addEventListener('dragstart', e => {
            e.preventDefault();
        });
    }

    // Verifica se o DOM já está carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', disableTextSelectionAndDrag);
    } else {
        disableTextSelectionAndDrag();
    }
})();
