// Initialize the map centered on your location
const map = L.map('map').setView([-6.418053, 140.390114], 9); // Replace with your coordinates
    
// Add OpenStreetMap tiles with proper attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 20
}).addTo(map);

L.marker([-6.593077, 140.548782]) // Replace with your coordinates
  .addTo(map)
  .bindPopup("<b>Pemukiman Interniran, Butiptiri,</b><br>Boven Digoel,<br>Papua, Indonesia.<a href='#interniran'>klik</a>");
  
  L.marker([-6.107283, 140.307856]) // Replace with your coordinates
  .addTo(map)
  .bindPopup("<b>Tanah Merah,</b><br>Boven Digoel,<br>Papua, Indonesia. <a href='#camp'>klik</a>");
  
  L.marker([-6.418053, 140.390114]) // Replace with your coordinates
  .addTo(map)
  .bindPopup("<b>Kamp Militer, Miri,</b><br>Boven Digoel,<br>Papua, Indonesia. <a href='#militer'>klik</a>");
  

// Optional: Add a circle for visual interest
L.circle([-6.593077, 140.548782], {
  color: '#d23c67',
  fillColor: '#f8b4c4',
  fillOpacity: 0.3,
  radius: 100
}).addTo(map);


var polygon = L.polygon([
    [-6.660450, 140.584935],
    [-6.580308, 140.447905],
    [-6.556062, 140.464655],
    [-6.567234, 140.479426],
    [-6.532037, 140.500448],
    [-6.535172, 140.542176],
    [-6.586892, 140.629051]
]).addTo(map);
    polygon.bindPopup("Kawasan Interniran");

  var polygon = L.polygon([
      [-6.427219, 140.398265],
      [-6.427184, 140.38092],
      [-6.405218, 140.380948],
      [-6.405242, 140.398272],
  ]).addTo(map);
  polygon.bindPopup("Kamp Militer");



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Camp 19 berada di " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// navigation control
