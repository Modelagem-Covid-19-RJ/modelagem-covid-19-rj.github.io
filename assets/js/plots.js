BAIRROS = ['VICENTE<br>DE CARVALHO', 'PENHA', 'JARDIM BOTANICO', 'MAGALHAES BASTOS', 'BANCARIOS', 'CENTRO', 'SENADOR CAMARA', 'ENGENHO DE DENTRO', 'PAVUNA', 'ABOLICAO', 'CIDADE DE DEUS', 'HIGIENOPOLIS', 'COSME VELHO', 'PRACA DA BANDEIRA', 'ROCHA', 'CIDADE NOVA', 'BENTO RIBEIRO', 'PAQUETA', 'SANTA TERESA', 'ROCHA MIRANDA', 'RAMOS', 'COPACABANA', 'JARDIM AMERICA', 'HONORIO GURGEL', 'CURICICA', 'VARGEM PEQUENA', 'TURIACU', 'SENADOR VASCONCELOS', 'COMPLEXO DO ALEMAO', 'LINS DE VASCONCELOS', 'QUINTINO BOCAIUVA', 'RICARDO ALBUQUERQUE', 'MEIER', 'CASCADURA', 'GARDENIA AZUL', 'GALEAO', 'CORDOVIL', 'SAO CRISTOVAO', 'VARGEM GRANDE', 'INHAUMA', 'PECHINCHA', 'GAMBOA', 'RIBEIRA', 'VILA ISABEL', 'GLORIA', 'MARE', 'VIDIGAL', 'ENGENHEIRO LEAL', 'ENGENHO DA RAINHA', 'TAQUARA', 'DEL CASTILHO', 'ANCHIETA', 'COSTA BARROS', 'MARIA DA GRACA', 'VASCO DA GAMA', 'JACAREPAGUA', 'PARADA DE LUCAS', 'MANGUINHOS', 'ENCANTADO', 'GUADALUPE', 'MARACANA', 'ROCINHA', 'URCA', 'JACAREZINHO', 'FREGUESIA-JPA', 'FLAMENGO', 'SAO CONRADO', 'GRAJAU', 'CACHAMBI', 'VILA KOSMOS', 'CAMPO GRANDE', 'LAGOA', 'IPANEMA', 'OSWALDO CRUZ', 'ESTACIO', 'PACIENCIA', 'COSMOS', 'ACARI', 'HUMAITA', 'LARANJEIRAS', 'PORTUGUESA', 'TODOS OS SANTOS', 'BARROS FILHO', 'VILA DA PENHA', 'BANGU', 'LEBLON', 'MADUREIRA', 'CATETE', 'TOMAS COELHO', 'ANIL', 'RIO COMPRIDO', 'LEME', 'SAUDE', 'SEPETIBA', 'CAMORIM', 'SAO FRANCISCO XAVIER', 'JARDIM GUANABARA', 'COELHO NETO', 'PADRE MIGUEL', 'JOA', 'RECREIO DOS BANDEIRANTES', 'ITANHANGA', 'JARDIM SULACAP', 'PRAIA DA BANDEIRA', 'CAJU', 'BRAS DE PINA', 'DEODORO', 'VISTA ALEGRE', 'JACARE', 'PARQUE COLUMBIA', 'BARRA DE GUARATIBA', 'VILA MILITAR', 'CACUIA', 'VILA KENNEDY', 'VIGARIO GERAL', 'TIJUCA', 'PEDRA DE GUARATIBA', 'OLARIA', 'GUARATIBA', 'PITANGUEIRAS', 'BOTAFOGO', 'SANTISSIMO', 'BONSUCESSO', 'RIACHUELO', 'PIEDADE', 'VAZ LOBO', 'SANTO CRISTO', 'TANQUE', 'CAVALCANTE', 'PENHA CIRCULAR', 'CIDADE UNIVERSITARIA', 'COLEGIO', 'INHOAIBA', 'PARQUE ANCHIETA', 'TAUA', 'VILA VALQUEIRE', 'PRACA SECA', 'CATUMBI', 'IRAJA', 'MONERO', 'MARECHAL HERMES', 'ENGENHO NOVO', 'SAMPAIO', 'PILARES', 'REALENGO', 'JARDIM CARIOCA', 'MANGUEIRA', 'COCOTA', 'FREGUESIA-ILHA', 'SANTA CRUZ', 'AGUA SANTA', 'CAMPINHO', 'BENFICA', 'CAMPO DOS AFONSOS', 'ZUMBI', 'BARRA DA TIJUCA', 'ALTO DA BOA VISTA', 'ANDARAI', 'GAVEA']


dataFiles = {
  "TS_ACUMULADO":  "https://raw.githubusercontent.com/modelagemcovid19/covid19/master/dados/RJ/cidade_rj/dados_covid/TS_Acumulado_MRJ.csv",
  "BP_GEODATA_CONFIRMADOS": "https://raw.githubusercontent.com/modelagemcovid19/covid19/master/dados/RJ/cidade_rj/dados_covid/TS_Acumulado_MRJ.csv",
  "GEO_ACUMULADO_CONFIRMADOS": "https://raw.githubusercontent.com/modelagemcovid19/covid19/master/modelos/RJ/compartimental/geo_plot/dados-certos-11abr.csv"
};

callbackFuncs = {
  "TS_ACUMULADO": processData_TS,
  "BP_GEODATA_CONFIRMADOS": processData_BP,
  "GEO_ACUMULADO_CONFIRMADOS": processData_GEO
};

function makeplot(tipo, idDiv) {
  Plotly.d3.csv(dataFiles[tipo], function(data){ callbackFuncs[tipo](data, idDiv) } );
};


/////////// TIME SERIES /////////////
function processData_TS(allRows, idDiv) {
  var xs = [];
  var ys = [];
  for (var j = 0; j < BAIRROS.length; j++){
    var x = [];
    var y = [];
    for (var i=0; i < allRows.length; i++) {
      row = allRows[i];
      x.push( row['Data'] );
      y.push( row[BAIRROS[j]]);
    }
    xs.push(x);
    ys.push(y);
  }
  makePlotly_TS( xs, ys, idDiv );
}

function makePlotly_TS(x, y, idDiv){
  var traces = [];
  for (i = 0; i < x.length; i++){
    traces.push({x: x[i], y: y[i], type: 'scatter', name: BAIRROS[i]})
  }
  plotly_config = {responsive: true, displayModeBar: true, showLegend: false};

  var data_toshow = [];
  
  for (j = 0; j < x[0].length; j += 14){
    data_toshow.push(x[0][j]);
  }
  data_toshow.push(x[0][x[0].length-1]);

  
  console.log(data_toshow);
  var layout = {
    showlegend: true,
    responsive: true,
    modebar: {
      orientation: "l"
    },
    xaxis: {
      showgrid: false,
      tickvals: data_toshow
    },
    yaxis: {
      showgrid: false
    },
    margin: {
      t: 0,
      b: 30,
      r: 0,
      l: 40,
      pad: 0
    },
    dragmode: false
  };

  var configs = {
    displayModeBar: true,
    modeBarButtonsToRemove: ['autoScale2d', 'zoom2d', 'resetScale2d', 'zoomOut2d', 'zoomIn2d', 'toggleSpikelines', 'pan2d', 'select2d']
  };

  Plotly.newPlot(idDiv, traces, layout, configs)
};




/////////// BAR PLOTS /////////////


function processData_BP(allRows, idDiv) {
  var x = ['Fora do<br> município','Indefinidos', 'AP 1', 'AP 2', 'AP 3', 'AP 4', 'AP 5'];
  var y = [139,3579,335,2062,2104,1038,1142];
  makePlotly_BP( x, y , idDiv);
}


function makePlotly_BP(x, y, idDiv){
  traces = [
    {
      x: x,
      y: y,
      type: 'bar',
      marker: {
        color: '#5E72E4'
      }
    }
  ];

  var layout = {
    showlegend: false,
    responsive: true,
    margin: {
      t: 0,
      b: 80,
      r: 30,
      l: 40,
      pad: 0
    },
    dragmode: false
  };

  var configs = {
    displayModeBar: false,
    responsive: true,
  };
  Plotly.newPlot(idDiv, traces, layout, configs);
};






  function processData_GEO(allRows, idDiv) {
    var z = [];
    var z_abs = [];
    var y = [];
    var nome = [];
    for (var i=0; i < allRows.length; i++) {
        row = allRows[i];
        z_abs.push( row['Acumulados semana 7'] );
        z.push(row['Acumulados semana 7']* 1e4/row['pop']);
        y.push( row['objectid']);
        nome.push(row['nomes_certos']);
      }
    makePlotly_GEO( z, y, z_abs, nome, idDiv );
  }
  
  function makePlotly_GEO(z, y, z_abs, nome, idDiv){
    var max = z.reduce(function(a, b) {
      return Math.max(a, b);
    });
    var data = [{
      type: "choroplethmapbox",
      locations: y,
      z: z,
      colorscale: 'YlOrRd',
      reversescale: true,
      zmin: 0,
      zmax: max,
      customdata: z_abs,
      text: nome,
      geojson: "https://raw.githubusercontent.com/modelagemcovid19/covid19/master/dados/RJ/cidade_rj/dados_geo/geojs_Bairros.json",
      featureidkey: "properties.OBJECTID",
      hovertemplate: '%{text} <br>Casos: %{customdata:.0f} <br>Casos rel.: %{z:.3f}',
      name: ''
    },
  ];
    
    var layout = { 
      geo: { fitbounds: "locations", visible: false },
      mapbox: {
              style: 'light',
              center: {lat: -22.9457256, lon: -43.4100146},
              zoom: 9
            },
      coloraxis: {
        cmin: 0,
        cmax: 1,
        reversescale: true
      },
      showlegend: false,
      responsive: true,
      margin: {
        t: 0,
        b: 80,
        r: 30,
        l: 40,
        pad: 0
      }
    };
            
    
    var config = {mapboxAccessToken: "pk.eyJ1IjoiZ2lsc21uZXRvIiwiYSI6ImNrYWN6ZWwzbDAyaXMyd3M3Y2FsN2tmOGMifQ.YT4O17BkkaihU_o9fzUxqg",
      scrollZoom: false,
      modeBarButtonsToRemove: ['lasso2d']};
    
    Plotly.newPlot(idDiv, data, layout, config);
  };




makeplot('TS_ACUMULADO', 'plot_serieTemporal');
makeplot('BP_GEODATA_CONFIRMADOS', 'plot_BP_GEODATA_CONFIRMADOS');
makeplot('GEO_ACUMULADO_CONFIRMADOS', 'plot_GEO_ACUMULADO_CONFIRMADOS');


  // var data = [{
  //   type: "choroplethmapbox",
  //   locations: ["Tijuca", "Cachambi", "Centro"],
  //   z: [-50, -10, -20],
  //   colorscale: 'YlOrRd',
  //   geojson: "https://raw.githubusercontent.com/modelagemcovid19/covid19/master/dados/RJ/cidade_rj/dados_geo/geojs_Bairros.json",
  //   featureidkey: "properties.NOME"
  // }];
  
  // var layout = { 
  //   geo: { fitbounds: "locations", visible: false },
  //   mapbox: {
  //           style: 'light',
  //           center: {lat: -22.9457256, lon: -43.4100146},
  //           zoom: 9
  //         },
  //   };
          
  
  // var config = {mapboxAccessToken: "pk.eyJ1IjoiZ2lsc21uZXRvIiwiYSI6ImNrYWN6ZWwzbDAyaXMyd3M3Y2FsN2tmOGMifQ.YT4O17BkkaihU_o9fzUxqg"};
  
  // Plotly.newPlot('plot_Mapa', data, layout, config);
// }
