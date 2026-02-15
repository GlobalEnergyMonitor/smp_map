
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
              147.834422,
              -20.751591
            ],
            [
              147.834422,
              -20.748449
            ],
            [
              147.849186,
              -20.748449
            ],
            [
              147.849711,
              -20.746444
            ],
            [
              147.850913,
              -20.74142
            ],
            [
              147.850743,
              -20.741081
            ],
            [
              147.851988,
              -20.736637
            ],
            [
              147.852184,
              -20.736115
            ],
            [
              147.852473,
              -20.734901
            ],
            [
              147.852654,
              -20.734011
            ],
            [
              147.852989,
              -20.731393
            ],
            [
              147.853491,
              -20.726893
            ],
            [
              147.856499,
              -20.697126
            ],
            [
              147.860126,
              -20.661444
            ],
            [
              147.857879,
              -20.660764
            ],
            [
              147.854675,
              -20.650318
            ],
            [
              147.82164,
              -20.635781
            ],
            [
              147.812602,
              -20.631804
            ],
            [
              147.801125,
              -20.631794
            ],
            [
              147.801111,
              -20.64845
            ],
            [
              147.784431,
              -20.648435
            ],
            [
              147.784415,
              -20.665116
            ],
            [
              147.784415,
              -20.665116
            ],
            [
              147.784415,
              -20.665116
            ],
            [
              147.784415,
              -20.665116
            ],
            [
              147.784415,
              -20.665116
            ],
            [
              147.784423,
              -20.748449
            ],
            [
              147.784423,
              -20.763831
            ],
            [
              147.792801,
              -20.758113
            ],
            [
              147.801413,
              -20.755507
            ],
            [
              147.811249,
              -20.75446
            ],
            [
              147.82266,
              -20.754681
            ],
            [
              147.828842,
              -20.753889
            ],
            [
              147.834422,
              -20.751591
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0035.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2025-01-24 00:00:00",
        "notes": "According to paragraph 3 of the introduction on page 4 of the Annual Compliance Report Drake Coal Mine EPBC 2010/5457 8 November 2023 to 7 November 2024, published 24 January 2025, Drake Coal Mine is wholly contained within Mining Leases 10349, 10350 and 10351, which cover an area of 9,215 Ha (92.15 sq km). Also, the mine is one of four adjoining coal mines managed by QCoal, the others being the Sonoma Coal Mine, the Cows Coal Mine and the Jax Coal Mine (JCM). These four mines are collectively operated and managed as an integrated mining operation by QCoal, and referred to as the QCoal Northern Hub (QNH).\n\nMining lease geometries were extracted from the Queensland Mining Leases dataset (https://web.archive.org/web/2/https://www.data.qld.gov.au/dataset/queensland-mining-and-exploration-tenure-series/resource/f87794b8-7b9a-4732-89bb-56ccb2228d27).  The area of the boundary is 92.4 sq km.",
        "description": "Drake coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0035",
        "Owners": "QCoal [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "QCoal",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Drake_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Drake Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Oct 16, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-20.763831, 147.784415), L.latLng(-20.631794, 147.860126));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([-20.697812499999998, 147.8222705], 12.0)                     
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
                        
	GEMMine = L.marker([-20.705189, 147.812727], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Drake Coal Mine', { permanent: true, direction: 'right'});
