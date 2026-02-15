
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
              118.345386,
              39.667116
            ],
            [
              118.344404,
              39.658962
            ],
            [
              118.331505,
              39.641512
            ],
            [
              118.327964,
              39.631611
            ],
            [
              118.328386,
              39.621899
            ],
            [
              118.322128,
              39.618666
            ],
            [
              118.313878,
              39.606415
            ],
            [
              118.303152,
              39.593314
            ],
            [
              118.291617,
              39.586341
            ],
            [
              118.261931,
              39.569631
            ],
            [
              118.251494,
              39.560746
            ],
            [
              118.250654,
              39.554397
            ],
            [
              118.249823,
              39.546148
            ],
            [
              118.246806,
              39.541284
            ],
            [
              118.242136,
              39.539165
            ],
            [
              118.230823,
              39.538636
            ],
            [
              118.262969,
              39.512943
            ],
            [
              118.266543,
              39.513794
            ],
            [
              118.268064,
              39.518614
            ],
            [
              118.268353,
              39.521399
            ],
            [
              118.286843,
              39.538233
            ],
            [
              118.323827,
              39.562823
            ],
            [
              118.348488,
              39.57748
            ],
            [
              118.362409,
              39.585471
            ],
            [
              118.377219,
              39.590105
            ],
            [
              118.396141,
              39.588189
            ],
            [
              118.407979,
              39.608454
            ],
            [
              118.401972,
              39.62219
            ],
            [
              118.414929,
              39.650053
            ],
            [
              118.40917,
              39.650271
            ],
            [
              118.400528,
              39.655187
            ],
            [
              118.38729,
              39.658278
            ],
            [
              118.360437,
              39.660398
            ],
            [
              118.345386,
              39.667116
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0307.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2013-02-26 00:00:00",
        "notes": "The boundary coordinates are extracted from the Figure 1-1 on page 11 in the document Design of a New 2.4 Mt/a Mine Fan Gezhuang Coal Mine, Kailuan Group (\u5f00\u6ee6\u96c6\u56e2\u8303\u5404\u5e84\u7164\u77ff2.4Mta\u65b0\u4e95\u8bbe\u8ba1) https://web.archive.org/web/20250916042648/https://www.doc88.com/p-8905395174199.html ",
        "description": "Qianjiaying coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0307",
        "Owners": "Kailuan Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Kailuan Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Qianjiaying_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%BC%80%E6%BB%A6%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%E9%92%B1%E5%AE%B6%E8%90%A5%E7%9F%BF%E4%B8%9A%E5%88%86%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Qianjiaying Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 16, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.37678,
          39.612478
        ]
      },
      "properties": {
        "id": "M0307.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "vent",
        "data source date": "2025-03-03 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "possible ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0307",
        "Owners": "Kailuan Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Kailuan Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Qianjiaying_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%BC%80%E6%BB%A6%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%E9%92%B1%E5%AE%B6%E8%90%A5%E7%9F%BF%E4%B8%9A%E5%88%86%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Qianjiaying Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 16, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(39.512943, 118.230823), L.latLng(39.667116, 118.414929));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([39.5900295, 118.32287600000001], 12.0)                     
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
        "Street view": googleStreet,
        "Satellite view": googleHybrid
    };
    var overlayMaps = {
        "Labels": tooltipToggleLayer // The toggle switch for tooltips
    };
    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
                        
    var GEMMine;
                        
	GEMMine = L.marker([39.599037, 118.364658], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Qianjiaying Coal Mine', { permanent: true, direction: 'right'});
