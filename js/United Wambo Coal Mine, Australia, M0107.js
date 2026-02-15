
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
              150.93074,
              -32.543641
            ],
            [
              150.932057,
              -32.545735
            ],
            [
              150.933931,
              -32.546675
            ],
            [
              150.934184,
              -32.548896
            ],
            [
              150.937981,
              -32.553445
            ],
            [
              150.935745,
              -32.566003
            ],
            [
              150.949523,
              -32.566092
            ],
            [
              150.948964,
              -32.570022
            ],
            [
              150.962853,
              -32.571776
            ],
            [
              150.984393,
              -32.590401
            ],
            [
              150.987688,
              -32.589718
            ],
            [
              150.989107,
              -32.584036
            ],
            [
              150.989716,
              -32.583866
            ],
            [
              150.989918,
              -32.582328
            ],
            [
              150.993568,
              -32.58237
            ],
            [
              150.99367,
              -32.586428
            ],
            [
              150.996407,
              -32.586898
            ],
            [
              150.998181,
              -32.586641
            ],
            [
              151.002642,
              -32.585915
            ],
            [
              151.003453,
              -32.585402
            ],
            [
              151.005633,
              -32.585487
            ],
            [
              151.01501,
              -32.582325
            ],
            [
              151.015314,
              -32.581855
            ],
            [
              151.015668,
              -32.580958
            ],
            [
              151.015365,
              -32.579962
            ],
            [
              151.013082,
              -32.574964
            ],
            [
              151.012269,
              -32.571931
            ],
            [
              151.011457,
              -32.567788
            ],
            [
              151.01323,
              -32.566122
            ],
            [
              151.015562,
              -32.565396
            ],
            [
              151.017358,
              -32.564275
            ],
            [
              151.017408,
              -32.561883
            ],
            [
              151.019689,
              -32.561669
            ],
            [
              151.017558,
              -32.558466
            ],
            [
              151.017621,
              -32.548175
            ],
            [
              151.013405,
              -32.545926
            ],
            [
              150.995663,
              -32.545594
            ],
            [
              150.993871,
              -32.544637
            ],
            [
              150.98771,
              -32.544666
            ],
            [
              150.987664,
              -32.545676
            ],
            [
              150.967742,
              -32.545631
            ],
            [
              150.967811,
              -32.53914
            ],
            [
              150.965877,
              -32.538992
            ],
            [
              150.963952,
              -32.538906
            ],
            [
              150.961722,
              -32.538778
            ],
            [
              150.959848,
              -32.538308
            ],
            [
              150.957923,
              -32.537239
            ],
            [
              150.956556,
              -32.536
            ],
            [
              150.955593,
              -32.534676
            ],
            [
              150.954834,
              -32.532284
            ],
            [
              150.954581,
              -32.530746
            ],
            [
              150.953113,
              -32.528439
            ],
            [
              150.931218,
              -32.541404
            ],
            [
              150.93074,
              -32.543641
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0107.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2022-06-29 00:00:00",
        "notes": "Section 1.1 of the United Wambo Joint Venture Export Management Plan, July 2024, https://web.archive.org/web/2/https://www.glencore.com.au/.rest/api/v1/documents/f609fd6f69085eb35d7b7d802faaa6d8/Export+Management+Plan.pdf, defines 'Project' : \"The purpose of the joint venture is to develop and operate the United Wambo Open Cut Coal Mine (Project).\", and section 1.2 associates the development consent SSD 7142 with the Project. \n\nFigure 2-2 United Wambo Coal Mine Boundaries, page 3 of the 2021 United Wambo Joint Venture , https://web.archive.org/web/2/https://minedocs.com/23/United-Wambo-Annual-Review-12312021.pdf  shows the SSD 7142 Project Area boundary as of June 29, 2022, including mine lease boundaries in which it sits.\n\nThe mine boundary is the SSD 7142 Project Area boundary shown in Figure 2-2 United Wambo Coal Mine Boundaries. The area of the boundary is 31 sq km.",
        "description": "United Wambo mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0107",
        "Owners": "United Collieries and Wambo Coal [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Glencore PLC [50.00%]; Peabody Energy Corp [50.00%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/United_Wambo_coal_project",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "United Wambo Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 17, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-32.590401, 150.93074), L.latLng(-32.528439, 151.019689));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([-32.55942, 150.9752145], 12.0)                     
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
                        
	GEMMine = L.marker([-32.549369, 150.984787], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('United Wambo Coal Mine', { permanent: true, direction: 'right'});
