$( document ).ready(function() {
    $( ".mapa-control-tipo li" ).click(function() {
        $('.tipo-obito').toggleClass('tipo-ativo');
        $('.tipo-conf').toggleClass('tipo-ativo');
        $('.mapa-control').toggleClass('mapa-control-atv-conf');
        $('.mapa-control').toggleClass('mapa-control-atv-obit');
        $('.mapa-container').toggleClass('mapa-container-atv-conf');
        $('.mapa-container').toggleClass('mapa-container-atv-obit');
      });
});


