document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }, 1000); // Verifica e reaplica o bloqueio a cada 1 segundo
});
