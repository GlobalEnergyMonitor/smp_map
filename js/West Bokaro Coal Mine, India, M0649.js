
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
              85.53566,
              23.791321
            ],
            [
              85.534989,
              23.788977
            ],
            [
              85.523523,
              23.792538
            ],
            [
              85.522176,
              23.791303
            ],
            [
              85.519085,
              23.784761
            ],
            [
              85.525154,
              23.783783
            ],
            [
              85.524217,
              23.779834
            ],
            [
              85.547279,
              23.773451
            ],
            [
              85.560755,
              23.775318
            ],
            [
              85.567901,
              23.773106
            ],
            [
              85.575312,
              23.773854
            ],
            [
              85.582452,
              23.776945
            ],
            [
              85.585684,
              23.779045
            ],
            [
              85.585948,
              23.783115
            ],
            [
              85.574468,
              23.802837
            ],
            [
              85.570998,
              23.805118
            ],
            [
              85.565713,
              23.805675
            ],
            [
              85.553305,
              23.803637
            ],
            [
              85.546697,
              23.803916
            ],
            [
              85.534152,
              23.807354
            ],
            [
              85.53566,
              23.791321
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0649.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2023-06-18 00:00:00",
        "notes": "Page 2 of 'Presentation TATA steel', published Jun 18, 2023, \"This document discusses highwall mining at Tata Steel's West Bokaro colliery in India. It provides an overview of the geological location and infrastructure at West Bokaro. [etc]', https://web.archive.org/web/20250916154637/https://www.scribd.com/document/653816201/Presentataion-TATA-Steel, shows a diagram in slide 2 of the West Bokaro Colliery boundary. After extraction, the area of the boundary is 1,754 hectares, which closely matches the area of 1,740 hectares, described in page 59 of Integrated Report & Annual Accounts for Financial Year 2023-24, https://web.archive.org/web/20250311000246/https://www.tatasteel.com/media/21244/integrated-report-and-annual-accounts-fy2023-24.pdf.",
        "description": "West Bokaro mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0649",
        "Owners": "Coal India; Tata Steel",
        "Owners (Non-ENG)": "",
        "Parent Company": "Tata Group [50%] Coal India [50%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/West_Bokaro_coal_mine_(Tata)",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "West Bokaro Coal Mine",
        "Country / Area": "India",
        "Last researched": "Sep 16, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(23.773106, 85.519085), L.latLng(23.807354, 85.585948));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([23.79023, 85.5525165], 13.0)                     
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
                        
    GEMMine = L.marker([23.7927473, 85.55423096], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup("Operating status(es): Operating");
    GEMMine.bindTooltip("West Bokaro Coal Mine", { permanent: true, direction: 'right'});
