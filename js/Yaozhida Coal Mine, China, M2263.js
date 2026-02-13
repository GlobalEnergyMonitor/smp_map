
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
              112.904226,
              35.930189
            ],
            [
              112.939862,
              35.929986
            ],
            [
              112.945754,
              35.965433
            ],
            [
              112.915554,
              35.980073
            ],
            [
              112.904324,
              35.980788
            ],
            [
              112.904226,
              35.930189
            ]
          ]
        ]
      },
      "properties": {
        "id": "M2263.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2025-09-15 00:00:00",
        "notes": "The boundary was estimated based on the location of the mine's industrial complex, locations of neighbouring mines, and the mine size as reported in the GCMT 2025 (17.1 sq km).",
        "description": "Estimated Yaozhida mine boundary",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M2263",
        "Owners": "Shanxi Yaozhida Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shanxi Zhangzi Shengyuan Coal Industry Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Yaozhida_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E5%9E%9A%E5%BF%97%E8%BE%BE%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Thermal",
        "Mine Name": "Yaozhida Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.90535,
          35.977891
        ]
      },
      "properties": {
        "id": "M2263.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2024-08-19 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft 1",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2263",
        "Owners": "Shanxi Yaozhida Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shanxi Zhangzi Shengyuan Coal Industry Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Yaozhida_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E5%9E%9A%E5%BF%97%E8%BE%BE%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Thermal",
        "Mine Name": "Yaozhida Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.916145,
          35.97339
        ]
      },
      "properties": {
        "id": "M2263.P2",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2024-08-19 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft 2",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2263",
        "Owners": "Shanxi Yaozhida Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shanxi Zhangzi Shengyuan Coal Industry Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Yaozhida_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E5%9E%9A%E5%BF%97%E8%BE%BE%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Thermal",
        "Mine Name": "Yaozhida Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(35.929986, 112.904226), L.latLng(35.980788, 112.945754));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([35.955387, 112.92499], 12)                     
    
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
                        
	GEMMine = L.marker([35.977645, 112.909478], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Yaozhida Coal Mine', { permanent: true, direction: 'right'});
