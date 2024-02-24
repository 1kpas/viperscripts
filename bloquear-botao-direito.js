</script>
document.addEventListener('DOMContentLoaded', () => {
    // Desabilita a seleção de texto
    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
    }, false);

    // Desabilita o menu de contexto do clique com o botão direito
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    }, false);
});
</script>
