<script>
//Começo
//Bloqueador Compra Falsa
! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        if (arguments[1] === "Purchase" && typeof arguments[2].order_id === "undefined") return;
        if (arguments[1] === "AddToCart" && typeof arguments[2].value === "undefined") return;
        if (arguments[1] === "InitiateCheckout" && typeof arguments[2].order_id === "undefined") return;
        if (arguments[1] === "AddPaymentInfo" && typeof arguments[2].order_id === "undefined") return;
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '{{Facebook Pixel ID}}');

//Bloqueador Compra Falsa
//FIM
</script>
