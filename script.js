// Add your fetch function here
var wildfireJsonUrl = '';
fetch(wildfireJsonUrl) // Load the wildfire geojson file from the data directory, use a relative path
    .then(res => res.json())
    .then((geojson) => { // Code executes after geojson has been loaded
        console.log('geojson: ', geojson); //debugging step
        updateMap(geojson); //Update map with geojson we've loaded
        
}).catch(err => console.error(err));

var fireIconUrl = '';

function updateMap(geojson){
  map.on('load', function() {
  map.loadImage(
    fireIconUrl, // Add the fire.png from the images folder, use a relative path
    function(error, image) {
      if (error) throw error;
      map.addImage('fire', image);
      console.log('load:' + geojson);
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': geojson
        },
        'layout': {
        
          // Add icon-image - replace xxx with label assigned in addImage function
          'icon-image': 'xxx',
        
          // Add icon-size below replace with decimal value 
          // Play around with it somewhere between 0 - 1
          'icon-size': y.yy,

          // get the title name from the source's "name" property
          'text-field': ['get', 'fixme!!!!'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    });
  });
};
