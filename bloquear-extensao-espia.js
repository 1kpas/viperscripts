    // Função para verificar a presença do conteúdo da extensão e redirecionar para uma página em branco, se detectado
    function verificarConteudoExtensaoEspecifica() {
        console.log('Verificando conteúdo da extensão específica...');
        // Verificar se o conteúdo da extensão específica está presente
        var conteudoExtensao = document.querySelector('.ppspy-container');
        
        // Verificar se o conteúdo da extensão foi encontrado
        if (conteudoExtensao) {
            console.log('Conteúdo da extensão específica detectado. Redirecionando para página em branco...');
            // Redirecionar para uma página em branco
            window.location.href = 'about:blank';
        } else {
            console.log('Nenhum conteúdo da extensão específica detectado.');
        }
    }

    // Executar a função de verificação assim que a página terminar de carregar
    window.addEventListener('load', function() {
        console.log('Página totalmente carregada. Executando verificação de conteúdo da extensão específica...');
        verificarConteudoExtensaoEspecifica();
    });
