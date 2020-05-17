// TESTER = document.getElementById('tester');
// 	Plotly.newPlot( TESTER, [{
// 	x: [[1, 2, 3, 4, 5,6],[1,2,3,4,5,6]],
// 	y: [[1, 2, 4, 8, 16,15],[3,2,1,5,6,7]] }], {
//     margin: { t: 0 } } );
    
// var mydata = JSON.parse(bairros);

// dates = [1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49];

// console.log(mydata);
//   var lines = [];

//   for (i = 0; i < 2; i++) {
//     console.log(mydata[i].Nome);
//     lines.push({x: dates, y: mydata[i].Casos, name: mydata[i].Nome});
//   };
//     // var trace1 = {
//     //     x: a,
//     //     y: [10, 15, 13, 17],
//     //     type: 'scatter'
//     //   };
      
//     //   var trace2 = {
//     //     x: [1, 2, 3, 4],
//     //     y: [16, 5, 11, 9],
//     //     type: 'scatter',
//     //     name: 'Alow'
//     //   };
      
//     //   var data = [trace1, trace2];
      
//      Plotly.newPlot('tester', lines);

// function makeplot() {
//   Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv", function(data){ processData(data) } );
// };


// function processData(allRows) {
//   console.log(allRows[0]['AAPL_x']);
//   // console.log(allRows);
//   var x = [], y = [], standard_deviation = [];

//   for (var i=0; i < allRows.length; i++) {
//     row = allRows[i];
//     x.push( row['AAPL_x'] );
//     y.push( row['AAPL_y'] );
//   }
//   // console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
//   makePlotly( x, y, standard_deviation );
// }

// function makePlotly( x, y, standard_deviation ){
//   // var plotDiv = document.getElementById("tester");
//   var traces = [{
//     x: x,
//     y: y,
//     type: 'scatter',
//     name: 'Trace 1'
//   }, {
//     x: y,
//     y: x,
//     type: 'scatter',
//     name: 'Trace 2'
//   }];

//   var traces2 = {
//     x: x,
//     y: y,
//     type: 'scatter',
//     name: 'Trace 2'
//   };

//   var data = [traces, traces];

//   Plotly.newPlot('tester', traces);
// };

// makeplot();

BAIRROS = ['VICENTE DE CARVALHO', 'PENHA', 'JARDIM BOTANICO', 'MAGALHAES BASTOS', 'BANCARIOS', 'CENTRO', 'SENADOR CAMARA', 'ENGENHO DE DENTRO', 'PAVUNA', 'ABOLICAO', 'CIDADE DE DEUS', 'HIGIENOPOLIS', 'COSME VELHO', 'PRACA DA BANDEIRA', 'ROCHA', 'CIDADE NOVA', 'BENTO RIBEIRO', 'PAQUETA', 'SANTA TERESA', 'ROCHA MIRANDA', 'RAMOS', 'COPACABANA', 'JARDIM AMERICA', 'HONORIO GURGEL', 'CURICICA', 'VARGEM PEQUENA', 'TURIACU', 'SENADOR VASCONCELOS', 'COMPLEXO DO ALEMAO', 'LINS DE VASCONCELOS', 'QUINTINO BOCAIUVA', 'RICARDO ALBUQUERQUE', 'MEIER', 'CASCADURA', 'GARDENIA AZUL', 'GALEAO', 'CORDOVIL', 'SAO CRISTOVAO', 'VARGEM GRANDE', 'INHAUMA', 'PECHINCHA', 'GAMBOA', 'RIBEIRA', 'VILA ISABEL', 'GLORIA', 'MARE', 'VIDIGAL', 'ENGENHEIRO LEAL', 'ENGENHO DA RAINHA', 'TAQUARA', 'DEL CASTILHO', 'ANCHIETA', 'COSTA BARROS', 'MARIA DA GRACA', 'VASCO DA GAMA', 'JACAREPAGUA', 'PARADA DE LUCAS', 'MANGUINHOS', 'ENCANTADO', 'GUADALUPE', 'MARACANA', 'ROCINHA', 'URCA', 'JACAREZINHO', 'FREGUESIA-JPA', 'FLAMENGO', 'SAO CONRADO', 'GRAJAU', 'CACHAMBI', 'VILA KOSMOS', 'CAMPO GRANDE', 'LAGOA', 'IPANEMA', 'OSWALDO CRUZ', 'ESTACIO', 'PACIENCIA', 'COSMOS', 'ACARI', 'HUMAITA', 'LARANJEIRAS', 'PORTUGUESA', 'TODOS OS SANTOS', 'BARROS FILHO', 'VILA DA PENHA', 'BANGU', 'LEBLON', 'MADUREIRA', 'CATETE', 'TOMAS COELHO', 'ANIL', 'RIO COMPRIDO', 'LEME', 'SAUDE', 'SEPETIBA', 'CAMORIM', 'SAO FRANCISCO XAVIER', 'JARDIM GUANABARA', 'COELHO NETO', 'PADRE MIGUEL', 'JOA', 'RECREIO DOS BANDEIRANTES', 'ITANHANGA', 'JARDIM SULACAP', 'PRAIA DA BANDEIRA', 'CAJU', 'BRAS DE PINA', 'DEODORO', 'VISTA ALEGRE', 'JACARE', 'PARQUE COLUMBIA', 'BARRA DE GUARATIBA', 'VILA MILITAR', 'CACUIA', 'VILA KENNEDY', 'VIGARIO GERAL', 'TIJUCA', 'PEDRA DE GUARATIBA', 'OLARIA', 'GUARATIBA', 'PITANGUEIRAS', 'BOTAFOGO', 'SANTISSIMO', 'BONSUCESSO', 'RIACHUELO', 'PIEDADE', 'VAZ LOBO', 'SANTO CRISTO', 'TANQUE', 'CAVALCANTE', 'PENHA CIRCULAR', 'CIDADE UNIVERSITARIA', 'COLEGIO', 'INHOAIBA', 'PARQUE ANCHIETA', 'TAUA', 'VILA VALQUEIRE', 'PRACA SECA', 'CATUMBI', 'IRAJA', 'MONERO', 'MARECHAL HERMES', 'ENGENHO NOVO', 'SAMPAIO', 'PILARES', 'REALENGO', 'JARDIM CARIOCA', 'MANGUEIRA', 'COCOTA', 'FREGUESIA-ILHA', 'SANTA CRUZ', 'AGUA SANTA', 'CAMPINHO', 'BENFICA', 'CAMPO DOS AFONSOS', 'ZUMBI', 'BARRA DA TIJUCA', 'ALTO DA BOA VISTA', 'ANDARAI', 'GAVEA']

function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/modelagemcovid19/covid19/master/dados/RJ/cidade_rj/dados_covid/TS_Acumulado_MRJ.csv", function(data){ processData(data) } );
};

function processData(allRows) {
  var xs = [];
  var ys = [];
  console.log(allRows[0]);
  for (var j = 0; j < BAIRROS.length; j++){
    var x = [];
    var y = [];
    for (var i=0; i < allRows.length; i++) {
      row = allRows[i];
      x.push( row['Data'] )
      y.push( row[BAIRROS[j]]);
    }
    xs.push(x);
    ys.push(y);
  }
  makePlotly( xs, ys);
}

function makePlotly( x, y){
  // var plotDiv = document.getElementById("tester");
  var traces = [];
  for (i = 0; i < x.length; i++){
    traces.push({x: x[i], y: y[i], type: 'scatter', name: BAIRROS[i]})
  }
  //console.log(traces);
  Plotly.newPlot('tester', traces);
};

makeplot();