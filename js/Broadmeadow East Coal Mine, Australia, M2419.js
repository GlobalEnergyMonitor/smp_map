
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
              148.14793,
              -21.824088
            ],
            [
              148.148286,
              -21.825988
            ],
            [
              148.151821,
              -21.828118
            ],
            [
              148.152396,
              -21.830506
            ],
            [
              148.152334,
              -21.832147
            ],
            [
              148.155477,
              -21.83219
            ],
            [
              148.155445,
              -21.837774
            ],
            [
              148.171252,
              -21.837688
            ],
            [
              148.168758,
              -21.836333
            ],
            [
              148.170071,
              -21.835619
            ],
            [
              148.168983,
              -21.832897
            ],
            [
              148.171623,
              -21.831539
            ],
            [
              148.168226,
              -21.822327
            ],
            [
              148.165959,
              -21.822143
            ],
            [
              148.165229,
              -21.819753
            ],
            [
              148.164102,
              -21.819039
            ],
            [
              148.163279,
              -21.818386
            ],
            [
              148.162961,
              -21.817598
            ],
            [
              148.162881,
              -21.817265
            ],
            [
              148.16275,
              -21.816623
            ],
            [
              148.159991,
              -21.815933
            ],
            [
              148.15747,
              -21.815995
            ],
            [
              148.157032,
              -21.81565
            ],
            [
              148.156316,
              -21.815465
            ],
            [
              148.156077,
              -21.815059
            ],
            [
              148.155095,
              -21.814578
            ],
            [
              148.154857,
              -21.81464
            ],
            [
              148.154591,
              -21.814344
            ],
            [
              148.152959,
              -21.814307
            ],
            [
              148.152694,
              -21.814024
            ],
            [
              148.152416,
              -21.813999
            ],
            [
              148.15227,
              -21.814381
            ],
            [
              148.152588,
              -21.814751
            ],
            [
              148.152548,
              -21.815071
            ],
            [
              148.152349,
              -21.815231
            ],
            [
              148.15227,
              -21.815354
            ],
            [
              148.152137,
              -21.815514
            ],
            [
              148.151779,
              -21.815724
            ],
            [
              148.151765,
              -21.815884
            ],
            [
              148.151951,
              -21.816056
            ],
            [
              148.152017,
              -21.816448
            ],
            [
              148.151792,
              -21.816719
            ],
            [
              148.15158,
              -21.816756
            ],
            [
              148.151328,
              -21.816633
            ],
            [
              148.151129,
              -21.816842
            ],
            [
              148.151182,
              -21.817052
            ],
            [
              148.151115,
              -21.817249
            ],
            [
              148.150717,
              -21.817372
            ],
            [
              148.150598,
              -21.81763
            ],
            [
              148.150757,
              -21.817864
            ],
            [
              148.150704,
              -21.818185
            ],
            [
              148.150332,
              -21.818542
            ],
            [
              148.150359,
              -21.818887
            ],
            [
              148.150027,
              -21.819404
            ],
            [
              148.149855,
              -21.819429
            ],
            [
              148.14951,
              -21.819293
            ],
            [
              148.149377,
              -21.819108
            ],
            [
              148.149191,
              -21.818924
            ],
            [
              148.148714,
              -21.818763
            ],
            [
              148.148608,
              -21.818653
            ],
            [
              148.148488,
              -21.818394
            ],
            [
              148.148223,
              -21.818197
            ],
            [
              148.147785,
              -21.818788
            ],
            [
              148.147506,
              -21.819373
            ],
            [
              148.146949,
              -21.823549
            ],
            [
              148.14793,
              -21.824088
            ]
          ]
        ]
      },
      "properties": {
        "id": "M2419.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2024-03-01 00:00:00",
        "notes": "Section 4 Description of proposed amendment, on page 10 of Broadmeadow East Mine Environmental Authority Amendment Application \u2013 Supporting Document Bowen Coking Coal Limited Reference: P525016, published March 1 2024,  https://web.archive.org/web/20250313144235/https://www.bowencokingcoal.com.au/wp-content/uploads/2024/08/Broadmeadow-East-Mine-EA-Major-Amendment-Supporting-Document-and-Appendices.pdf, states \"The proposed amendments relate to land within the currently authorised disturbance area of EA0002465 and ML70257, as shown on Figure 4-1 and Figure 4-2.\"\n\nThe boundary is the approved disturbance area in Figure 4-1 Mine Plan (Appendix 2, Figure 2 EA0002465), excluding the Explosive Compound and adjoining access road to the north of the pit. The area of the boundary is 4.34 sq km (434 ha).",
        "description": "Broadmeadow East mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2419",
        "Owners": "Bowen Coking Coal Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Bowen Coking Coal",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Broadmeadow_East_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Broadmeadow East Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 22, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-21.837774, 147.979227), L.latLng(-21.813999, 148.171623));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([-21.8258865, 148.075425], 12.0)                     
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
                        
    GEMMine = L.marker([-21.823999, 147.979227], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup("Operating status(es): Operating");
    GEMMine.bindTooltip("Broadmeadow East Coal Mine", { permanent: true, direction: 'right'});
