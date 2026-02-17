
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
              104.49673,
              26.04478
            ],
            [
              104.5141,
              26.03267
            ],
            [
              104.5746,
              26.03555
            ],
            [
              104.61315,
              26.04028
            ],
            [
              104.6049,
              26.04871
            ],
            [
              104.58365,
              26.06058
            ],
            [
              104.56976,
              26.06194
            ],
            [
              104.57129,
              26.06799
            ],
            [
              104.56377,
              26.07325
            ],
            [
              104.51733,
              26.06511
            ],
            [
              104.50366,
              26.05978
            ],
            [
              104.49673,
              26.04478
            ]
          ]
        ]
      },
      "properties": {
        "id": "M2177.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2021-02-01 00:00:00",
        "notes": "Coordinates can be found in Table 3.1-1 on page 32 from the document Project for the Tucheng Mine of Guizhou Panjiang Refined Coal Co., Ltd. (Merger and Reorganization) (\u8d35\u5dde\u76d8\u6c5f\u7cbe\u7164\u80a1\u4efd\u6709\u9650\u516c\u53f8\u571f\u57ce\u77ff\uff08\u517c\u5e76\u91cd\u7ec4\uff09\u9879\u76ee) https://web.archive.org/web/20250815232527/https://www.doc88.com/p-14387179584726.html",
        "description": "Tucheng Coal Mine boundary",
        "coordinates precision": "reported",
        "GEM Mine ID": "M2177",
        "Owners": "Guizhou Panjiang Refined Coal Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Guizhou Panjiang Coal and Electricity Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tucheng_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E8%B4%B5%E5%B7%9E%E7%9B%98%E6%B1%9F%E7%B2%BE%E7%85%A4%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%9C%9F%E5%9F%8E%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tucheng Coal Mine",
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
          104.515678,
          26.06235
        ]
      },
      "properties": {
        "id": "M2177.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "vent",
        "data source date": "2020-11-10 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery. ",
        "description": "Possible Vent No.1",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2177",
        "Owners": "Guizhou Panjiang Refined Coal Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Guizhou Panjiang Coal and Electricity Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tucheng_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E8%B4%B5%E5%B7%9E%E7%9B%98%E6%B1%9F%E7%B2%BE%E7%85%A4%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%9C%9F%E5%9F%8E%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tucheng Coal Mine",
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
          104.548521,
          26.064825
        ]
      },
      "properties": {
        "id": "M2177.P2",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "vent",
        "data source date": "2020-11-10 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery. ",
        "description": "Possible Vent No.2",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2177",
        "Owners": "Guizhou Panjiang Refined Coal Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Guizhou Panjiang Coal and Electricity Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tucheng_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E8%B4%B5%E5%B7%9E%E7%9B%98%E6%B1%9F%E7%B2%BE%E7%85%A4%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%9C%9F%E5%9F%8E%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tucheng Coal Mine",
        "Country / Area": "China",
        "Last researched": "Aug 19, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(26.03267, 104.49673), L.latLng(26.07325, 104.61315));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([26.05296, 104.55494], 12.0)                     
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
                        
    GEMMine = L.marker([26.05645, 104.503236], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup('Operating status(es): Operating');
    GEMMine.bindTooltip('Tucheng Coal Mine', { permanent: true, direction: 'right'});
