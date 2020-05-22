
// Local dos arquivos
var url_nav = "https://raw.githubusercontent.com/modelagemcovid19/modelagemcovid19.github.io/dev/navigation.html";
var url_estat = "https://raw.githubusercontent.com/Modelagem-Covid-19-RJ/modelagem-covid-19-rj.github.io/master/dados-estat.json";

// Carregar via AJAX o arquivo que gera a barra de navegação
$(function(){
    $("#sidenav-main").load(url_nav);
});


function readJson() {
    Plotly.d3.json(url_estat, function(data){ updateEstatCards(data) } );
  };

  function updateEstatCards(data) {
      $('#dados_estat_confirmados').text(data['MRJ']['Municipio']['Confirmados']);
      $('#dados_estat_obitos').text(data['MRJ']['Municipio']['Óbitos']);
      $('#dados_estat_recuperados').text(data['MRJ']['Municipio']['Recuperados']);
      $('#dados_estat_mortalidade').text(data['MRJ']['Municipio']['Mortalidade'] + '%');
  }

  readJson();