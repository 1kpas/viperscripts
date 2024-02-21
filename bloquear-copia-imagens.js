<script>
//Bloqueador de COpia imagens
//Começo
document.addEventListener('DOMContentLoaded', function() {
    // Desativar seleção de texto e arrastar em toda a página
    document.body.style.userSelect = 'none'; // Desativa a seleção de texto para a maioria dos navegadores
    document.body.style.webkitUserSelect = 'none'; // Desativa a seleção de texto para navegadores baseados em WebKit (Chrome, Safari, etc.)
    document.body.style.MozUserSelect = 'none'; // Desativa a seleção de texto para Firefox
    document.body.style.msUserSelect = 'none'; // Desativa a seleção de texto para Internet Explorer

    // Desativar arrastar imagens e outros elementos
    document.body.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    console.log('Seleção de conteúdo e arrastar imagens foram desativados.');
});
//Boqueador de COpia Imagens
//Fim
</script>
