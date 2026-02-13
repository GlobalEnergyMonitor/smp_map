
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
              150.150978,
              -30.630755
            ],
            [
              150.150217,
              -30.62846
            ],
            [
              150.149345,
              -30.628413
            ],
            [
              150.150651,
              -30.632394
            ],
            [
              150.148909,
              -30.632394
            ],
            [
              150.148963,
              -30.633612
            ],
            [
              150.150324,
              -30.633752
            ],
            [
              150.149888,
              -30.637031
            ],
            [
              150.150269,
              -30.637125
            ],
            [
              150.150705,
              -30.635954
            ],
            [
              150.152774,
              -30.635626
            ],
            [
              150.162899,
              -30.639094
            ],
            [
              150.1623,
              -30.642559
            ],
            [
              150.160449,
              -30.642934
            ],
            [
              150.158924,
              -30.644386
            ],
            [
              150.157834,
              -30.650709
            ],
            [
              150.159848,
              -30.652817
            ],
            [
              150.16355,
              -30.655206
            ],
            [
              150.166381,
              -30.65558
            ],
            [
              150.174657,
              -30.648648
            ],
            [
              150.178413,
              -30.647103
            ],
            [
              150.183966,
              -30.647664
            ],
            [
              150.184184,
              -30.647243
            ],
            [
              150.18598,
              -30.646212
            ],
            [
              150.187994,
              -30.644854
            ],
            [
              150.190661,
              -30.64181
            ],
            [
              150.193001,
              -30.637782
            ],
            [
              150.195123,
              -30.632817
            ],
            [
              150.190605,
              -30.632115
            ],
            [
              150.184455,
              -30.632162
            ],
            [
              150.18489,
              -30.631273
            ],
            [
              150.185869,
              -30.629914
            ],
            [
              150.187883,
              -30.629118
            ],
            [
              150.187883,
              -30.628369
            ],
            [
              150.184672,
              -30.626917
            ],
            [
              150.184508,
              -30.623592
            ],
            [
              150.181624,
              -30.623311
            ],
            [
              150.178086,
              -30.621999
            ],
            [
              150.163064,
              -30.619516
            ],
            [
              150.162466,
              -30.619235
            ],
            [
              150.16154,
              -30.61975
            ],
            [
              150.156315,
              -30.61839
            ],
            [
              150.155389,
              -30.618952
            ],
            [
              150.153321,
              -30.618202
            ],
            [
              150.150381,
              -30.620356
            ],
            [
              150.152122,
              -30.626352
            ],
            [
              150.150978,
              -30.630755
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0105.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2022-08-01 00:00:00",
        "notes": "The WHITEHAVEN COAL TARRAWONGA COAL MINE REHABILITATION MANAGEMENT PLAN, from August 2022, https://web.archive.org/web/2/https://minedocs.com/23/Tarrawonga-Rehabilitation-Management-Plan-082022.pdf, lists the mining leases in the summary table on page 2. The Current Consent section on page 5 describes planning assessment PA 11_0047 which provides for the continuation and extension of the mine, together with 9 modifications, the site layout boundary of which is shown in Figure 2 Site Layout, on page 7. The boundary of the mine is taken from the site layout boundary which appears to better conform to the mining area found in satellite imagery from January 2024, compared to the outer perimeter of the mining leases. The boundary has an area of 10.7 sq km.",
        "description": "Tarrawonga mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0105",
        "Owners": "Tarrawonga Coal Pty Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Whitehaven",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tarrawonga_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Tarrawonga Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Sep 09, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-30.65558, 150.148909), L.latLng(-30.618202, 150.195123));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([-30.636891, 150.17201599999999], 12)                     
    
    var baseMaps = {"Street view": googleStreet,"Satellite view": googleHybrid};
    var layerControl = L.control.layers(baseMaps).addTo(map);
    function onEachFeature(feature, layer) {
        let popupContent = "<b><u>" + feature.properties['description'] + "</u></b><br /><br />"
        for (const [key, value] of Object.entries(feature.properties)) {
            popupContent += '<b>' + key + '</b>: ' + value + '<br />'
        }
        layer.bindPopup(popupContent, { maxHeight: 200 , maxWidth: 400})
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
                        
	GEMMine = L.marker([-30.639584, 150.167277], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Tarrawonga Coal Mine', { permanent: true, direction: 'right'});
