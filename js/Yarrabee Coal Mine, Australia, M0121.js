
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
              149.00339,
              -23.275912
            ],
            [
              149.009331,
              -23.275857
            ],
            [
              149.013748,
              -23.266933
            ],
            [
              149.017258,
              -23.275849
            ],
            [
              149.013637,
              -23.279117
            ],
            [
              149.017908,
              -23.288548
            ],
            [
              149.007614,
              -23.302601
            ],
            [
              149.010415,
              -23.331297
            ],
            [
              149.018184,
              -23.331171
            ],
            [
              149.028299,
              -23.363236
            ],
            [
              149.037665,
              -23.36416
            ],
            [
              149.039054,
              -23.346187
            ],
            [
              149.101121,
              -23.353312
            ],
            [
              149.101124,
              -23.313399
            ],
            [
              149.084434,
              -23.311242
            ],
            [
              149.084419,
              -23.281789
            ],
            [
              149.067745,
              -23.281773
            ],
            [
              149.06773,
              -23.271495
            ],
            [
              149.043788,
              -23.268746
            ],
            [
              149.032315,
              -23.249388
            ],
            [
              149.023823,
              -23.245693
            ],
            [
              149.022159,
              -23.249132
            ],
            [
              149.013901,
              -23.245503
            ],
            [
              149.012878,
              -23.239969
            ],
            [
              149.002136,
              -23.240115
            ],
            [
              148.995585,
              -23.243712
            ],
            [
              148.994124,
              -23.254507
            ],
            [
              149.00339,
              -23.275912
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0121.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2021-10-01 00:00:00",
        "notes": "Row 1 of the table titled 'Environmentally relevant activity and location details', of the Environmental Permit EPML00844613 document for Yarrabee Coal Company Pty Ltd from October 1, 2021 at https://web.archive.org/web/2/https://storagesolutiondocsprod.blob.core.windows.net/register-documents-ea/EPML00844613.pdf, lists the following mining leases for the activity of mining black coal: ML80172, ML80049, ML1770, ML80096, ML80195, ML80198, ML80104, ML80196, ML80197 and ML80050. \nNote that mining lease ML 80104 (Yarrabee North) expired 9/2023. The boundary contains the above leases. The area of the boundary is approximately 83 sq km. Mining lease geometries were extracted from the Queensland Mining Leases dataset (https://web.archive.org/web/2/https://www.data.qld.gov.au/dataset/queensland-mining-and-exploration-tenure-series/resource/f87794b8-7b9a-4732-89bb-56ccb2228d27).\n\n",
        "description": "Yarrabee mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0121",
        "Owners": "Yanzhou Coal Mining Co [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shandong Energy",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Yarrabee_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Yarrabee Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 11, 2025",
        "build_version": "mines - January 30 (built on February 02 2026 12.49.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          149.028255,
          -23.29543
        ]
      },
      "properties": {
        "id": "M0121.P1",
        "mine feature category": "other",
        "mine feature subcategory": "preparation plant",
        "data source date": "2023-06-01 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "coal processing plant",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0121",
        "Owners": "Yanzhou Coal Mining Co [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Shandong Energy",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Yarrabee_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Yarrabee Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 11, 2025",
        "build_version": "mines - January 30 (built on February 02 2026 12.49.33 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(-23.36416, 148.994124), L.latLng(-23.239969, 149.101124));
                        
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
        if (feature.properties['mine feature category'] == "mine boundary") {
           layer.setStyle({ color: '#CA4A50', fillColor: '#CA4A50', opacity: 1.0 });
        }
	}

    // add the mine layer to the map
    const mineLayer = L.geoJSON(mine, {onEachFeature}).addTo(map)

    // Add the GEM mine location as markers                   
    var GEMMineIcon = L.icon({ iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/red-circle.png', iconSize:  [40, 40]});

    var GEMMine;
                        
	GEMMine = L.marker([-23.317678, 149.026371], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Yarrabee Coal Mine Operating mine');
	GEMMine.bindTooltip('Yarrabee Coal Mine Operating mine', { permanent: true, direction: 'right'});
