
var map = L.map('map', {
  center: [-22.933938, -43.445638],
  zoom: 11
});


var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});

CartoDB_Positron.addTo(map);
//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'OSM'}).addTo(map);


var geojsonLayer = new L.GeoJSON.AJAX('includes/geojson/geojs_bairros_rj.json');

geojsonLayer.addTo(map);

function style(feature) {
    return {
        fillColor: getColor(feature.properties.NOME),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
//alert(bairros_data);
L.geoJson(bairros_data, {style: style}).addTo(map);


