document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
        document.body.style.MozUserSelect = 'none';
        document.body.style.msUserSelect = 'none';

        document.body.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    }, 1000); // Aplica as regras de seleção e arraste a cada 1 segundo
});
