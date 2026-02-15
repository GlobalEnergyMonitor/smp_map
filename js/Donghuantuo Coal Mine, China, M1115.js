
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
              117.919562,
              39.584033
            ],
            [
              117.965834,
              39.563393
            ],
            [
              117.981087,
              39.572272
            ],
            [
              117.986451,
              39.581233
            ],
            [
              117.995502,
              39.603672
            ],
            [
              118.047993,
              39.668057
            ],
            [
              118.054316,
              39.68151
            ],
            [
              118.01395,
              39.671061
            ],
            [
              118.010355,
              39.664338
            ],
            [
              117.992785,
              39.658005
            ],
            [
              117.961212,
              39.649894
            ],
            [
              117.957717,
              39.649923
            ],
            [
              117.957389,
              39.634615
            ],
            [
              117.9645,
              39.635006
            ],
            [
              117.948408,
              39.608119
            ],
            [
              117.946459,
              39.593274
            ],
            [
              117.919562,
              39.584033
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1115.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2022-09-24 00:00:00",
        "notes": "The boundary lines were drawn from Figure 3-34 on page 188 in the document Kailuan (Group) Co., Ltd. Donghuantuo Mining Branch Mine Geological Environment Protection and Land Reclamation Plan (\u5f00\u6ee6 (\u96c6\u56e2)\u6709\u9650\u8d23\u4efb\u516c\u53f8\u4e1c\u6b22\u5768\u77ff\u4e1a\u5206\u516c\u53f8 \u77ff\u5c71\u5730\u8d28\u73af\u5883\u4fdd\u62a4\u4e0e\u571f\u5730\u590d\u57a6\u65b9\u6848) https://web.archive.org/web/20250519214838/http://nmgkyxh.com/js/kindeditor/attached/file/20181221/20181221095819_43093.pdf ",
        "description": "Donghuantuo coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1115",
        "Owners": "Kailuan Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Kailuan Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Huantuodong_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%BC%80%E6%BB%A6%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%E4%B8%9C%E6%AC%A2%E5%9D%A8%E7%9F%BF%E4%B8%9A%E5%88%86%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Donghuantuo Coal Mine",
        "Country / Area": "China",
        "Last researched": "Jun 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.029318,
          39.648837
        ]
      },
      "properties": {
        "id": "M1115.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2022-09-24 00:00:00",
        "notes": "According to Figure 1-4 on page 19 in the document Kailuan (Group) Co., Ltd. Donghuantuo Mining Branch Mine Geological Environment Protection and Land Reclamation Plan (\u5f00\u6ee6 (\u96c6\u56e2)\u6709\u9650\u8d23\u4efb\u516c\u53f8\u4e1c\u6b22\u5768\u77ff\u4e1a\u5206\u516c\u53f8 \u77ff\u5c71\u5730\u8d28\u73af\u5883\u4fdd\u62a4\u4e0e\u571f\u5730\u590d\u57a6\u65b9\u6848) https://web.archive.org/web/20250519214838/http://nmgkyxh.com/js/kindeditor/attached/file/20181221/20181221095819_43093.pdf , the ventilation site is 2.2 km east from the main mining boundary. Identified the 2 ventilation fans and the ventilation shaft.",
        "description": "ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1115",
        "Owners": "Kailuan Group [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Kailuan Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Huantuodong_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%BC%80%E6%BB%A6%EF%BC%88%E9%9B%86%E5%9B%A2%EF%BC%89%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%E4%B8%9C%E6%AC%A2%E5%9D%A8%E7%9F%BF%E4%B8%9A%E5%88%86%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Donghuantuo Coal Mine",
        "Country / Area": "China",
        "Last researched": "Jun 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(39.563393, 117.919562), L.latLng(39.68151, 118.054316));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([39.6224515, 117.986939], 12.0)                     
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
                        
	GEMMine = L.marker([39.647378, 118.002442], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Donghuantuo Coal Mine', { permanent: true, direction: 'right'});
