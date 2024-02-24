(function() {
    console.log('Script de bloqueio de extensão carregado.');

    // Função para verificar a presença do conteúdo da extensão e redirecionar para uma página em branco, se detectado
    function verificarConteudoExtensaoEspecifica() {
        console.log('Verificando conteúdo da extensão específica...');

        // Verificar se o conteúdo da extensão específica está presente usando um novo seletor identificado
        var conteudoExtensao = document.querySelector('.EuwGd'); // Alterado para o seletor identificado no HTML fornecido
        
        // Verificar se o conteúdo da extensão foi encontrado
        if (conteudoExtensao) {
            console.log('Conteúdo da extensão específica detectado. Redirecionando para página em branco...');
            // Redirecionar para uma página em branco
            window.location.href = 'about:blank';
        } else {
            console.log('Nenhum conteúdo da extensão específica detectado.');
        }
    }

    // Executar a função de verificação em intervalos para lidar com conteúdo injetado após o carregamento
    function iniciarVerificacao() {
        console.log('Iniciando verificação de conteúdo da extensão específica em intervalos...');
        var tentativas = 0;
        var intervalo = setInterval(function() {
            verificarConteudoExtensaoEspecifica();
            tentativas++;
            // Parar a verificação após um certo número de tentativas
            if (tentativas >= 10) {
                clearInterval(intervalo);
                console.log('Parando a verificação de conteúdo da extensão após tentativas suficientes.');
            }
        }, 1000); // Verificar a cada 1 segundo
    }

    // Executar a função de verificação assim que a página terminar de carregar e periodicamente depois disso
    if (document.readyState === 'loading') {
        window.addEventListener('load', iniciarVerificacao);
    } else {
        iniciarVerificacao();
    }
})();
