
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
              117.021773,
              34.854843
            ],
            [
              117.021384,
              34.852516
            ],
            [
              117.033368,
              34.841967
            ],
            [
              117.068578,
              34.816419
            ],
            [
              117.081758,
              34.834419
            ],
            [
              117.0942,
              34.856246
            ],
            [
              117.084702,
              34.865992
            ],
            [
              117.059305,
              34.869198
            ],
            [
              117.040627,
              34.870103
            ],
            [
              117.021338,
              34.870291
            ],
            [
              117.021773,
              34.854843
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1901.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2022-12-24 00:00:00",
        "notes": "Esimated based on the satellite visualization of various ground infrastructure and natural features.",
        "description": "Estimated Fucun coal mine boundary",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M1901",
        "Owners": "Zaozhuang Mining Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shandong Energy",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Fucun_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E6%9E%A3%E5%BA%84%E7%9F%BF%E4%B8%9A%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E4%BB%98%E6%9D%91%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Fucun Coal Mine",
        "Country / Area": "China",
        "Last researched": "Aug 19, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          117.053313,
          34.857198
        ]
      },
      "properties": {
        "id": "M1901.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "vent",
        "data source date": "2022-12-24 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1901",
        "Owners": "Zaozhuang Mining Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shandong Energy",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Fucun_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E6%9E%A3%E5%BA%84%E7%9F%BF%E4%B8%9A%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E4%BB%98%E6%9D%91%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Fucun Coal Mine",
        "Country / Area": "China",
        "Last researched": "Aug 19, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          117.074967,
          34.850394
        ]
      },
      "properties": {
        "id": "M1901.P2",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "vent",
        "data source date": "2022-12-24 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1901",
        "Owners": "Zaozhuang Mining Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shandong Energy",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Fucun_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E6%9E%A3%E5%BA%84%E7%9F%BF%E4%B8%9A%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E4%BB%98%E6%9D%91%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Fucun Coal Mine",
        "Country / Area": "China",
        "Last researched": "Aug 19, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(34.816419, 117.021338), L.latLng(34.870291, 117.0942));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([34.843355, 117.05776900000001], 12.0)                     
    var markerLayerGroup = L.layerGroup();
                        

    function onEachFeature(feature, layer) {
        let popupContent = "<b><u>" + feature.properties['description'] + "</u></b><br /><br />"
        let tooltipContent = feature.properties['id'] + ": " + feature.properties['description']
        for (const [key, value] of Object.entries(feature.properties)) {
            popupContent += '<b>' + key + '</b>: ' + value + '<br />'
        }
        layer.bindPopup(popupContent, { maxHeight: 200 , maxWidth: 400})
        layer.bindTooltip(tooltipContent, { permanent: false, direction: 'right'});
        if (feature.properties['mine feature category'] == "mine boundary") {
           layer.setStyle({ color: '#CA4A50', fillColor: '#CA4A50', opacity: 1.0 });
        }
        markerLayerGroup.addLayer(layer)
	}
    
    markerLayerGroup.addTo(map);
    const mineLayer = L.geoJSON(mine, {onEachFeature}).addTo(map)
    var GEMMineIcon = L.icon({ iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/red-circle.png', iconSize:  [40, 40]});
    
    const myDiv = document.getElementById('map');
    const width = myDiv.offsetWidth;
    const height = myDiv.offsetHeight;
    console.log("#map width: " + width + ", height: " + height);                    

    // Create a "dummy" layer group specifically to act as the tooltip toggle switch in the control
    var tooltipToggleLayer = L.layerGroup();
    // Add event listeners to the map that listen for the toggle layer being added or removed
    map.on('layeradd', function (e) {
        if (e.layer === tooltipToggleLayer) {
            // When the "Tooltip" overlay is selected, iterate over all markers and make tooltips permanent
            markerLayerGroup.eachLayer(function (layer) {
                if (layer.getTooltip()) {
                    layer.getTooltip().options.permanent = true;
                    layer.openTooltip(); // Open the tooltip permanently
                }
            });
        }
    });
    map.on('layerremove', function (e) {
        if (e.layer === tooltipToggleLayer) {
            // When the "Tooltip" overlay is deselected, make tooltips non-permanent and close them
            markerLayerGroup.eachLayer(function (layer) {
                if (layer.getTooltip()) {
                    layer.getTooltip().options.permanent = false;
                    layer.closeTooltip();
                }
            });
        }
    });

    map.on('zoomend', function() {
        console.log("Current zoom level: " + map.getZoom());
    });

    var baseMaps = {
        "Satellite view": googleHybrid,
        "Street view": googleStreet
    };
    var overlayMaps = {
        "Labels": tooltipToggleLayer // The toggle switch for tooltips
    };
    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
                        
    var GEMMine;
                        
    GEMMine = L.marker([34.855228, 117.05077], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup('Operating status(es): Operating');
    GEMMine.bindTooltip('Fucun Coal Mine', { permanent: true, direction: 'right'});
