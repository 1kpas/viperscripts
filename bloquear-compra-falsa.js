!function(f,b,e,v,n,t,s){
    if(f.fbq)return;
    n=f.fbq=function(){
        n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments);
    };
    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

// Função modificada para bloquear o evento de compra
function fbqCustom(eventType, eventName, params) {
    // Verifica se o evento é de compra e se não está na página de checkout
    if (eventName === 'Purchase' && !window.location.href.includes('/checkout')) {
        console.log('Evento de compra bloqueado fora da página de checkout.');
        return; // Bloqueia o evento de compra
    }

    // Caso contrário, dispara o evento normalmente
    fbq(eventType, eventName, params);
}

// Substitua chamadas de fbq('track', 'Purchase', {...}) por fbqCustom('track', 'Purchase', {...}) no seu site
// Exemplo:
// fbqCustom('track', 'Purchase', {value: '0.00', currency: 'USD', order_id: '12345'});
