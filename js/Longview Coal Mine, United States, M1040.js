
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
              -80.162409,
              39.114327
            ],
            [
              -80.162904,
              39.114588
            ],
            [
              -80.163006,
              39.114302
            ],
            [
              -80.163321,
              39.114395
            ],
            [
              -80.163029,
              39.114243
            ],
            [
              -80.163349,
              39.11407
            ],
            [
              -80.157015,
              39.110863
            ],
            [
              -80.157457,
              39.110345
            ],
            [
              -80.15774,
              39.110492
            ],
            [
              -80.158534,
              39.109558
            ],
            [
              -80.158838,
              39.109708
            ],
            [
              -80.159017,
              39.109496
            ],
            [
              -80.158744,
              39.109334
            ],
            [
              -80.159008,
              39.108974
            ],
            [
              -80.156276,
              39.107545
            ],
            [
              -80.155323,
              39.107701
            ],
            [
              -80.155328,
              39.10814
            ],
            [
              -80.155639,
              39.108161
            ],
            [
              -80.15548,
              39.108401
            ],
            [
              -80.15486,
              39.108238
            ],
            [
              -80.155363,
              39.108463
            ],
            [
              -80.155067,
              39.108581
            ],
            [
              -80.154995,
              39.109075
            ],
            [
              -80.155522,
              39.109361
            ],
            [
              -80.15497,
              39.1101
            ],
            [
              -80.155194,
              39.110231
            ],
            [
              -80.152913,
              39.112907
            ],
            [
              -80.154036,
              39.113395
            ],
            [
              -80.154212,
              39.113102
            ],
            [
              -80.154603,
              39.113458
            ],
            [
              -80.155667,
              39.112127
            ],
            [
              -80.156406,
              39.11161
            ],
            [
              -80.157994,
              39.112423
            ],
            [
              -80.158199,
              39.112187
            ],
            [
              -80.162409,
              39.114327
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1040.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "Unclear - according to https://web.archive.org/web/2/https://www.wvgs.wvnet.edu/www/coal/cbmp/coalims.html, \"Updates to the data set occur as new data becomes available.\"",
        "notes": "The boundary is the underground mining area polygon extracted from the West Virginia Geological and Economic Survey (WVGES) resource at https://web.archive.org/web/2/https://atlas.wvgs.wvnet.edu/arcgis/rest/services/Coal_Web_Mercator/All_Mining_WM/MapServer. This resource was filtered for mine_name = Longview, and the resulting polygon was simplified using distance-based simplification with a tolerance of 15m.  The area of this boundary is 0.2 sq km.\n\nImportant note: this mine boundary may overlap with other mine boundaries at different depths in this area and care should be taken when attempting methane source attribution.",
        "description": "Longview Coal mine detailed underground mining boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1040",
        "Owners": "Allegheny Metallurgical [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "American Metals and Coal International [42%]; Itochu [25%]; POSCO [22%]; JAZ Ventures LLC [11%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Longview_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Longview Coal Mine",
        "Country / Area": "United States",
        "Last researched": "Oct 14, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.155224,
          39.108696
        ]
      },
      "properties": {
        "id": "M1040.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "Jan 4 2024 and Bing satellite imagery 4/20/2023-9/19/2023",
        "notes": "Frontier-Kemper constructors Inc, Service Shaft, Vent Shaft, & Slope Portal Longview Mine Turn-Key Projects, https://web.archive.org/web/20240305103807/https://www.frontierkemper.com/projects/mining/century-shafts-slope.html#:~:text=DATE:%20May%202022-,Frontier-Kemper%20Constructors%2C%20Inc.,Shaft%20Depth:%20880%20ft., shows the construction of a 16-ft. diameter, raise-drilled ventilation shaft. The if-modified-since response header of the page is 2024-01-04. The location is estimated due to the difficulty in triangulating satellite and the above website images.",
        "description": "possible ventilation shaft",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M1040",
        "Owners": "Allegheny Metallurgical [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "American Metals and Coal International [42%]; Itochu [25%]; POSCO [22%]; JAZ Ventures LLC [11%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Longview_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Longview Coal Mine",
        "Country / Area": "United States",
        "Last researched": "Oct 14, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(39.107545, -80.163349), L.latLng(39.121617, -79.969246));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([39.114581, -80.06629749999999], 12.0)                     
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
                        
	GEMMine = L.marker([39.121617, -79.969246], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Longview Coal Mine', { permanent: true, direction: 'right'});
