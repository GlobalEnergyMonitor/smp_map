
    var mine = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              110.868676,
              37.64109
            ],
            [
              110.882508,
              37.635158
            ],
            [
              110.891006,
              37.635166
            ],
            [
              110.906945,
              37.663561
            ],
            [
              110.887442,
              37.66895
            ],
            [
              110.868676,
              37.64109
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1967.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2013-11-26 00:00:00",
        "notes": "The boundary coordinates were found on page 8 from the document Classification Report on Hydrogeological Type of Huaye Coal Mine (\u534e\u70e8\u7164\u77ff\u6c34\u6587\u5730\u8d28\u7c7b\u578b\u5212\u5206\u62a5\u544a)\nhttps://web.archive.org/web/20250804170856/https://www.doc88.com/p-1126844365611.html",
        "description": "Huaye coal mine boundary",
        "coordinates precision": "reported",
        "GEM Mine ID": "M1967",
        "Owners": "Shanxi Lin County Huaye Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Lin County Huaye Energy Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Huaye_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E4%B8%B4%E5%8E%BF%E5%8D%8E%E7%83%A8%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Huaye Coal Mine",
        "Country / Area": "China",
        "Last researched": "Aug 04, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.888437,
          37.650345
        ]
      },
      "properties": {
        "id": "M1967.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2022-09-04 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "return air shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1967",
        "Owners": "Shanxi Lin County Huaye Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Lin County Huaye Energy Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Huaye_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E4%B8%B4%E5%8E%BF%E5%8D%8E%E7%83%A8%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Huaye Coal Mine",
        "Country / Area": "China",
        "Last researched": "Aug 04, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(37.635158, 110.868676), L.latLng(37.66895, 110.906945));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([37.652054, 110.8878105], 12)                     
    
    var baseMaps = {"Street view": googleStreet,"Satellite view": googleHybrid};
    var layerControl = L.control.layers(baseMaps).addTo(map);
    function onEachFeature(feature, layer) {
        let popupContent = "<b><u>" + feature.properties['description'] + "</u></b><br /><br />"
        for (const [key, value] of Object.entries(feature.properties)) {
            popupContent += '<b>' + key + '</b>: ' + value + '<br />'
        }
        layer.bindPopup(popupContent, { maxHeight: 200 , maxWidth: 400})
        if (feature.properties['mine feature category'] == "mine boundary") {
           layer.setStyle({ color: '#CA4A50', fillColor: '#CA4A50', opacity: 1.0 });
        }
	}
    const mineLayer = L.geoJSON(mine, {onEachFeature}).addTo(map)
    var GEMMineIcon = L.icon({ iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/red-circle.png', iconSize:  [40, 40]});
    
    const myDiv = document.getElementById('map');
    const width = myDiv.offsetWidth;
    const height = myDiv.offsetHeight;
    console.log("#map width: " + width + ", height: " + height);                    

    var GEMMine;
                        
	GEMMine = L.marker([37.651636, 110.887129], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Huaye Coal Mine', { permanent: true, direction: 'right'});
