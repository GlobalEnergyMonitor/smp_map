
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
              -82.422938,
              37.083609
            ],
            [
              -82.427518,
              37.080142
            ],
            [
              -82.406727,
              37.0527
            ],
            [
              -82.390642,
              37.060006
            ],
            [
              -82.376682,
              37.04324
            ],
            [
              -82.330541,
              37.073095
            ],
            [
              -82.341329,
              37.085837
            ],
            [
              -82.334398,
              37.090703
            ],
            [
              -82.351411,
              37.105322
            ],
            [
              -82.41483,
              37.077989
            ],
            [
              -82.422938,
              37.083609
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1308.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "Feb 28, 2025 (from creation data metadata of the pdf referenced)",
        "notes": "This mine is part of Alpha's 'Virginia Complex' which contains surface and underground mines. Adjacent to Deep Mine 41 are the underground inactive McClure No. 1 mine, Mine No. 42 and Black Dog mine, https://web.archive.org/web/20250306120711/https://d18rn0p25nwr6d.cloudfront.net/CIK-0001704715/b7c2a924-c78a-41f9-b57e-bbaae65ab7c8.pdf.  The approximate mine boundary was derived from diagram JB-7 on the 701st page in the above reference.",
        "description": "Deep Mine 41 approximate underground mining area",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M1308",
        "Owners": "Paramont Contura LLC [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Alpha Metallurgical Resources Inc",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Deep_Mine_41_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Deep Mine 41",
        "Country / Area": "United States",
        "Last researched": "May 22, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.374431,
          37.093067
        ]
      },
      "properties": {
        "id": "M1308.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2023-11-01 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery. This shaft may be connected to other adjacent mines.",
        "description": "ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1308",
        "Owners": "Paramont Contura LLC [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Alpha Metallurgical Resources Inc",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Deep_Mine_41_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Deep Mine 41",
        "Country / Area": "United States",
        "Last researched": "May 22, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.38976,
          37.095757
        ]
      },
      "properties": {
        "id": "M1308.P2",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2023-11-01 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery. This shaft may be connected to other adjacent mines.",
        "description": "possible mine shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1308",
        "Owners": "Paramont Contura LLC [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Alpha Metallurgical Resources Inc",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Deep_Mine_41_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Deep Mine 41",
        "Country / Area": "United States",
        "Last researched": "May 22, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.367835,
          37.065892
        ]
      },
      "properties": {
        "id": "M1308.P3",
        "mine feature category": "degasification system",
        "mine feature subcategory": "drainage station",
        "data source date": "2023-11-01 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "possible drainage station connected to the East Tennessee Gas Pipeline owned by Enbridge",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1308",
        "Owners": "Paramont Contura LLC [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Alpha Metallurgical Resources Inc",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Deep_Mine_41_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Deep Mine 41",
        "Country / Area": "United States",
        "Last researched": "May 22, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(37.04324, -82.427518), L.latLng(37.105322, -82.330541));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([37.074281, -82.3790295], 12.0)                     
    
    var baseMaps = {"Street view": googleStreet,"Satellite view": googleHybrid};
    var layerControl = L.control.layers(baseMaps).addTo(map);
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
	}
    const mineLayer = L.geoJSON(mine, {onEachFeature}).addTo(map)
    var GEMMineIcon = L.icon({ iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/red-circle.png', iconSize:  [40, 40]});
    
    const myDiv = document.getElementById('map');
    const width = myDiv.offsetWidth;
    const height = myDiv.offsetHeight;
    console.log("#map width: " + width + ", height: " + height);                    

    var GEMMine;
                        
	GEMMine = L.marker([37.096111, -82.388333], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Deep Mine 41', { permanent: true, direction: 'right'});
