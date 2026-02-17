
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
              -73.65978,
              6.599763
            ],
            [
              -73.646681,
              6.595547
            ],
            [
              -73.629068,
              6.623635
            ],
            [
              -73.619445,
              6.644631
            ],
            [
              -73.619001,
              6.645435
            ],
            [
              -73.635045,
              6.653986
            ],
            [
              -73.628903,
              6.668118
            ],
            [
              -73.610386,
              6.660898
            ],
            [
              -73.602674,
              6.687357
            ],
            [
              -73.5787,
              6.694286
            ],
            [
              -73.557243,
              6.732964
            ],
            [
              -73.58402,
              6.745904
            ],
            [
              -73.624181,
              6.696808
            ],
            [
              -73.634795,
              6.670415
            ],
            [
              -73.641591,
              6.655954
            ],
            [
              -73.647503,
              6.638137
            ],
            [
              -73.65978,
              6.599763
            ]
          ]
        ]
      },
      "properties": {
        "id": "M3844.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground and surface",
        "data source date": "2022-08-29 00:00:00",
        "notes": "The boundary was extracted from a Global Forest Watch (GFW) data set of mining titles in Colombia, which includes shapefiles and proprietary information for the mining title areas in \"Columbia Mining Titles,\" last accessed: Oct. 2, 2025 https://web.archive.org/save/https://data.globalforestwatch.org/datasets/colombia-mining-titles/explore?location=11.275605%2C-86.829278%2C9.97. The GFW data set was opened in Google Earth Pro and the boundary polygons were first identified by location and ownership. Because the GFW data set did not include title numbers, the mining title boundaries were cross-referenced using CoMiMo's interactive map, using the data layer \"T\u00edtulos mineros\" (\"mining titles\") to confirm the location and boundary shapes of the four relevant mining titles: 092-91 (the original mining lease), FEC-131, 029-91, and 065-92. The mining titles were accessible by selecting the data layer \"T\u00edtulos mineros\" from the layers menu (\"Capas\") of the CoMiMo map, last accessed: Oct. 2, 2025 https://web.archive.org/save/https://comimo.sig-gis.com/. The original mining title number 092-91 was also confirmed in a 2025 report by Colombia's national mining agency, \"Agencia Nacional de Miner\u00eda\", \"AUTO PAR BUCARAMANGA No. 0300,\" June 3, 2025 https://web.archive.org/web/20250725172709/https://www.anm.gov.co/sites/default/files/DocumentosAnm/AUTO-PARB-0300-EXP-092-91-2025.pdf. The boundary is the perimeter of the licensed mining boundaries, including the original contracted mining boundary (No. 092-91) and the expansion mining boundaries (065-92, 029-91 and FEC-131). The area of the mine boundary is approximately 49 square km.\n\n",
        "description": "San Luis coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M3844",
        "Owners": "Carbonera San Luis S.A.S.; Centromin S.A.S.; Mincar S.A.S ; San Luis Coal SA",
        "Owners (Non-ENG)": "",
        "Parent Company": "San Luis Coal S.A.",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/San_Luis_Coal_Mine_(Colombia)",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "San Luis Coal Mine",
        "Country / Area": "Colombia",
        "Last researched": "Oct 02, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(6.595547, -73.65978), L.latLng(6.745904, -73.516186));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([6.6707255, -73.58798300000001], 12.0)                     
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
                        
    GEMMine = L.marker([6.69674, -73.516186], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup('Operating status(es): Operating');
    GEMMine.bindTooltip('San Luis Coal Mine', { permanent: true, direction: 'right'});
    GEMMine = L.marker([6.71603597, -73.57893771], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup('Operating status(es): Operating');
    GEMMine.bindTooltip('San Luis Coal Mine', { permanent: true, direction: 'right'});
