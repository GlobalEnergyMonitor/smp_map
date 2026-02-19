
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
              16.045234,
              78.152028
            ],
            [
              16.037051,
              78.15522
            ],
            [
              16.0419,
              78.156815
            ],
            [
              16.041326,
              78.159875
            ],
            [
              16.023115,
              78.159763
            ],
            [
              16.021868,
              78.15755
            ],
            [
              16.021134,
              78.155187
            ],
            [
              16.038306,
              78.148922
            ],
            [
              16.108078,
              78.142757
            ],
            [
              16.116668,
              78.13793
            ],
            [
              16.109965,
              78.132667
            ],
            [
              16.119612,
              78.125766
            ],
            [
              16.141294,
              78.124875
            ],
            [
              16.175688,
              78.126719
            ],
            [
              16.197034,
              78.127712
            ],
            [
              16.203707,
              78.125599
            ],
            [
              16.19349,
              78.124169
            ],
            [
              16.194749,
              78.12347
            ],
            [
              16.205222,
              78.122791
            ],
            [
              16.211345,
              78.119677
            ],
            [
              16.251912,
              78.122186
            ],
            [
              16.236244,
              78.132941
            ],
            [
              16.216858,
              78.14463
            ],
            [
              16.191864,
              78.14307
            ],
            [
              16.142342,
              78.149816
            ],
            [
              16.129874,
              78.148762
            ],
            [
              16.117574,
              78.145171
            ],
            [
              16.052121,
              78.150758
            ],
            [
              16.045234,
              78.152028
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1455.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2023-07-18 00:00:00",
        "notes": "The underground mining area of Mine 7 (\"Gruve 7\") was identified in a map of mines in the Longyearbyen area (provided by the Norwegian Polar Institute: https://web.archive.org/save/https://storymaps.arcgis.com/stories/c053c00ac0d045d0b15498f67d6dd3f0). The map was then used as an overlay in Google Earth Pro, and a boundary polygon was manually extracted to include both the underground mining area and aboveground coal processing and transportation infrastructure at the surface facility.",
        "description": "Mine 7 coal mine boundary (\"Gruve 7\")",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1455",
        "Owners": "Store Norske Spitsbergen Kulkompani [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Ministry of Trade and Industry",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Gruve_7_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Mine 7 Coal Mine",
        "Country / Area": "Norway",
        "Last researched": "Aug 01, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.026391,
          78.157385
        ]
      },
      "properties": {
        "id": "M1455.P1",
        "mine feature category": "other",
        "mine feature subcategory": "slope access or production shaft",
        "data source date": "2023-07-18 00:00:00",
        "notes": "The location of this slope access and/or production shaft was extracted using visual analysis of Google Earth Pro satellite imagery.",
        "description": "Slope access or production shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1455",
        "Owners": "Store Norske Spitsbergen Kulkompani [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Ministry of Trade and Industry",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Gruve_7_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Mine 7 Coal Mine",
        "Country / Area": "Norway",
        "Last researched": "Aug 01, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.027108,
          78.157337
        ]
      },
      "properties": {
        "id": "M1455.P2",
        "mine feature category": "other",
        "mine feature subcategory": "mine entrance or exit",
        "data source date": "2023-07-18 00:00:00",
        "notes": "The location of this slope access and/or production shaft was extracted using visual analysis of Google Earth Pro satellite imagery. A description and panoramic photograph of the mine's surface facility provided by Spitsbergen-Svalbard also indicates the location of the mine's entrance as behind \"directly behind the red roller door\" of the main surface facility entrace (https://web.archive.org/save/https://www.spitsbergen-svalbard.com/photos-panoramas-videos-and-webcams/spitsbergen-panoramas/mine-7.html see: Panorama 3: Surface facility).",
        "description": "Possible mine entrance",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1455",
        "Owners": "Store Norske Spitsbergen Kulkompani [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Ministry of Trade and Industry",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Gruve_7_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Mine 7 Coal Mine",
        "Country / Area": "Norway",
        "Last researched": "Aug 01, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(78.119677, 16.021134), L.latLng(78.159875, 16.251912));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([78.139776, 16.136523], 12.0)                     
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
                        
    GEMMine = L.marker([78.1568, 16.0231], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup("Operating status(es): Operating");
    GEMMine.bindTooltip("Mine 7 Coal Mine", { permanent: true, direction: 'right'});
