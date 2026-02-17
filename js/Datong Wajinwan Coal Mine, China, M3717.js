
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
              112.918509,
              39.9739
            ],
            [
              112.896823,
              39.969037
            ],
            [
              112.88553,
              39.966751
            ],
            [
              112.8811,
              39.963628
            ],
            [
              112.88698,
              39.95872
            ],
            [
              112.897623,
              39.950694
            ],
            [
              112.906777,
              39.941745
            ],
            [
              112.963056,
              39.948
            ],
            [
              112.964526,
              39.948974
            ],
            [
              112.964737,
              39.950612
            ],
            [
              112.958198,
              39.952443
            ],
            [
              112.947173,
              39.95564
            ],
            [
              112.916957,
              39.956135
            ],
            [
              112.916206,
              39.96226
            ],
            [
              112.918509,
              39.9739
            ]
          ]
        ]
      },
      "properties": {
        "id": "M3717.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2021-08-01 00:00:00",
        "notes": "The boundary was drawn according to the Table 2-1-9 on page 61 from the document Tashan Coal Mine Environmental Impact Assessment Report for the 25.0 Mta Production Capacity Verification Project (\u540c\u7164\u5927\u5510\u5854\u5c71\u7164\u77ff\u6709\u9650\u516c\u53f8\u5854\u5c71\u77ff25.0Mta\u751f\u4ea7\u80fd\u529b\u6838\u5b9a\u9879\u76ee\u73af\u5883\u5f71\u54cd\u62a5\u544a\u4e66),  https://web.archive.org/web/20250723174516/https://www.doc88.com/p-99729371313609.html",
        "description": "Datong Wajinwan coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M3717",
        "Owners": "Datong Coal Mine Group Digjinwan Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shanxi State-Owned Capital Investment and Operation Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Datong_Wajinwan_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%A4%A7%E5%90%8C%E7%85%A4%E7%9F%BF%E9%9B%86%E5%9B%A2%E6%8C%96%E9%87%91%E6%B9%BE%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Datong Wajinwan Coal Mine",
        "Country / Area": "China",
        "Last researched": "Jul 23, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.925678,
          39.954
        ]
      },
      "properties": {
        "id": "M3717.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2023-03-06 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "return air shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M3717",
        "Owners": "Datong Coal Mine Group Digjinwan Coal Industry Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shanxi State-Owned Capital Investment and Operation Company",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Datong_Wajinwan_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%A4%A7%E5%90%8C%E7%85%A4%E7%9F%BF%E9%9B%86%E5%9B%A2%E6%8C%96%E9%87%91%E6%B9%BE%E7%85%A4%E4%B8%9A%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8",
        "Coal Grade": "Met",
        "Mine Name": "Datong Wajinwan Coal Mine",
        "Country / Area": "China",
        "Last researched": "Jul 23, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(39.941745, 112.8811), L.latLng(39.9739, 112.965473));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([39.9578225, 112.9232865], 12.0)                     
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
                        
    GEMMine = L.marker([39.951458, 112.965473], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup('Operating status(es): Operating');
    GEMMine.bindTooltip('Datong Wajinwan Coal Mine', { permanent: true, direction: 'right'});
