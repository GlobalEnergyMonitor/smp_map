
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
              32.059547,
              -20.936121
            ],
            [
              32.059823,
              -20.93618
            ],
            [
              32.060122,
              -20.936384
            ],
            [
              32.060614,
              -20.936227
            ],
            [
              32.060918,
              -20.936141
            ],
            [
              32.061202,
              -20.93612
            ],
            [
              32.061357,
              -20.936112
            ],
            [
              32.061392,
              -20.936189
            ],
            [
              32.061385,
              -20.936351
            ],
            [
              32.06154,
              -20.936309
            ],
            [
              32.061946,
              -20.936193
            ],
            [
              32.062387,
              -20.936222
            ],
            [
              32.062546,
              -20.936224
            ],
            [
              32.062921,
              -20.936202
            ],
            [
              32.062972,
              -20.936089
            ],
            [
              32.063089,
              -20.935947
            ],
            [
              32.063059,
              -20.936173
            ],
            [
              32.063052,
              -20.936425
            ],
            [
              32.063202,
              -20.936598
            ],
            [
              32.063333,
              -20.936508
            ],
            [
              32.063291,
              -20.936257
            ],
            [
              32.063416,
              -20.936153
            ],
            [
              32.063489,
              -20.93589
            ],
            [
              32.063444,
              -20.935402
            ],
            [
              32.063347,
              -20.935154
            ],
            [
              32.063217,
              -20.934892
            ],
            [
              32.062883,
              -20.934585
            ],
            [
              32.062533,
              -20.934447
            ],
            [
              32.062209,
              -20.934516
            ],
            [
              32.0619,
              -20.934702
            ],
            [
              32.061924,
              -20.935039
            ],
            [
              32.061159,
              -20.935255
            ],
            [
              32.060641,
              -20.935403
            ],
            [
              32.060535,
              -20.935556
            ],
            [
              32.060136,
              -20.935601
            ],
            [
              32.059517,
              -20.93565
            ],
            [
              32.059184,
              -20.935967
            ],
            [
              32.059178,
              -20.936138
            ],
            [
              32.059547,
              -20.936121
            ]
          ]
        ]
      },
      "properties": {
        "id": "M2323.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2023-11-19 00:00:00",
        "notes": "Polygon for Coal Zimbabwe surface mine manually estimated from Google Earth Pro satellite imagery",
        "description": "Estimated boundary for Coal Zimbabwe Mine",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M2323",
        "Owners": "SteelMakers Zimbabwe Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "SteelMakers Zimbabwe",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Coal_Zimbabwe_Mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Coal Zimbabwe Mine",
        "Country / Area": "Zimbabwe",
        "Last researched": "Jul 23, 2025",
        "build_version": "mines - January 30 (built on January 30 2026 16.19.47 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(-21.040351, 31.67339), L.latLng(-20.934447, 32.063489));
                        
    // create some basemap layers - use google imagery as this is what we used in research - the attribution might need more refining/research
    var googleStreet =  L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})

    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 

    // add basemaps layer control
    var baseMaps = {"Street view": googleStreet,"Satellite view": googleHybrid};
    var layerControl = L.control.layers(baseMaps).addTo(map);

    // add popup content
    function onEachFeature(feature, layer) {
        let popupContent = "<b><u>" + feature.properties['description'] + "</u></b><br /><br />"
        for (const [key, value] of Object.entries(feature.properties)) {
            popupContent += '<b>' + key + '</b>: ' + value + '<br />'
        }
        layer.bindPopup(popupContent, { maxHeight: 200 , maxWidth: 400})
	}

    // add the mine layer to the map
    const mineLayer = L.geoJSON(mine, {onEachFeature}).addTo(map)

    // Add the GEM mine location as markers                   
    var GEMMineIcon = L.icon({ iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/red-circle.png', iconSize:  [40, 40]});

    var GEMMine;
                        
	GEMMine = L.marker([-21.040351, 31.67339], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Coal Zimbabwe Mine Operating mine');
	GEMMine.bindTooltip('Coal Zimbabwe Mine Operating mine', { permanent: true, direction: 'right'});
