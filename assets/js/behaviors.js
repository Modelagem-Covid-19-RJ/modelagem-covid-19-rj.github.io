
// Local dos arquivos
var url_nav = "https://raw.githubusercontent.com/modelagemcovid19/modelagemcovid19.github.io/dev/navigation.html";


// Carregar via AJAX o arquivo que gera a barra de navegação
$(function(){
    $("#sidenav-main").load(url_nav);
});


function makeplot(tipo, idDiv) {
    Plotly.d3.csv(dataFiles[tipo], function(data){ callbackFuncs[tipo](data, idDiv) } );
  };