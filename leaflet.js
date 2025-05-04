// Initialize the map centered on your location
const map = L.map('map').setView([-6.593077, 140.548782], 10); // Replace with your coordinates
    
// Add OpenStreetMap tiles with proper attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 20
}).addTo(map);

L.marker([-6.593077, 140.548782]) // Replace with your coordinates
  .addTo(map)
  .bindPopup("<b>Camp 19, Butiptiri,</b><br>Boven Digoel,<br>Papua, Indonesia.");
  
  L.marker([-6.618333, 140.278886]) // Replace with your coordinates
  .addTo(map)
  .bindPopup("<b>Camp 18, Gentiri,</b><br>Boven Digoel,<br>Papua, Indonesia.");
  
  L.marker([-6.418053, 140.390114]) // Replace with your coordinates
  .addTo(map)
  .bindPopup("<b>Camp 17, Miri,</b><br>Boven Digoel,<br>Papua, Indonesia.");
  

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


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Camp 19 berada di " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);