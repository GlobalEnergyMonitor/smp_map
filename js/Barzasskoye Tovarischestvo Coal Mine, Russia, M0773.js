
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
              86.010619,
              55.712314
            ],
            [
              86.032011,
              55.712592
            ],
            [
              86.037011,
              55.720092
            ],
            [
              86.042844,
              55.725094
            ],
            [
              86.046178,
              55.727872
            ],
            [
              86.046456,
              55.730928
            ],
            [
              86.044789,
              55.731483
            ],
            [
              86.0384,
              55.726761
            ],
            [
              86.035342,
              55.732594
            ],
            [
              86.049789,
              55.736206
            ],
            [
              86.067844,
              55.736206
            ],
            [
              86.072011,
              55.732039
            ],
            [
              86.078122,
              55.736483
            ],
            [
              86.082567,
              55.742594
            ],
            [
              86.076456,
              55.74815
            ],
            [
              86.070067,
              55.747872
            ],
            [
              86.060067,
              55.755094
            ],
            [
              86.054511,
              55.756483
            ],
            [
              86.040619,
              55.738428
            ],
            [
              86.021453,
              55.73565
            ],
            [
              86.015897,
              55.729539
            ],
            [
              86.010619,
              55.712314
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0773.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2025-12-17 00:00:00",
        "notes": "This mine operates under the Barzasskoye tovarischestvo subsoil land-use license \u041a\u0415\u041c01345\u0422\u042d, as identified through the website of the Russian Federal Geological Fund (\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0435\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0444\u043e\u043d\u0434), rosgeolfond.ru/storage/dokumenty/5GR%20UGOL%2015.06.2018.xls?ysclid=mj943rsyiw463095669, 2018. The license was issued on December 26, 2007, and is valid until December 31, 2027. The boundary was extracted from the NedraExpert portal at https://web.archive.org/web/20251217152249/https://www.nedraexpert.ru/license/150214?ysclid=mj947mtec7135488394.The approximate area of the resulting boundary is 8 square km.",
        "description": "Barzasskoye tovarischestvo coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0773",
        "Owners": "Barzasskoye Tovarishestvo LLC [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Stroyservis JSC",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Barzasskoye_tovarischestvo_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Barzasskoye Tovarischestvo Coal Mine",
        "Country / Area": "Russia",
        "Last researched": "Dec 17, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(55.712314, 86.010619), L.latLng(55.756483, 86.082567));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([55.7343985, 86.046593], 12.0)                     
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
                        
	GEMMine = L.marker([55.72548139, 86.01755391], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating, Proposed');
	GEMMine.bindTooltip('Barzasskoye Tovarischestvo Coal Mine', { permanent: true, direction: 'right'});
