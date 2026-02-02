
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
              148.634423,
              -22.815107
            ],
            [
              148.634423,
              -22.815107
            ],
            [
              148.617434,
              -22.815107
            ],
            [
              148.617432,
              -22.822156
            ],
            [
              148.626686,
              -22.845045
            ],
            [
              148.634424,
              -22.849812
            ],
            [
              148.634425,
              -22.881773
            ],
            [
              148.652473,
              -22.881773
            ],
            [
              148.662797,
              -22.881773
            ],
            [
              148.663979,
              -22.881773
            ],
            [
              148.664927,
              -22.881327
            ],
            [
              148.665452,
              -22.88108
            ],
            [
              148.665944,
              -22.880823
            ],
            [
              148.666443,
              -22.880539
            ],
            [
              148.666928,
              -22.880237
            ],
            [
              148.667399,
              -22.879917
            ],
            [
              148.667928,
              -22.879522
            ],
            [
              148.670239,
              -22.877682
            ],
            [
              148.673423,
              -22.875146
            ],
            [
              148.677189,
              -22.872147
            ],
            [
              148.67763,
              -22.871796
            ],
            [
              148.680457,
              -22.869544
            ],
            [
              148.6809,
              -22.869175
            ],
            [
              148.68131,
              -22.868806
            ],
            [
              148.681711,
              -22.868412
            ],
            [
              148.682097,
              -22.868006
            ],
            [
              148.682462,
              -22.867583
            ],
            [
              148.682811,
              -22.867147
            ],
            [
              148.683153,
              -22.866675
            ],
            [
              148.683356,
              -22.866376
            ],
            [
              148.683648,
              -22.865907
            ],
            [
              148.683922,
              -22.86543
            ],
            [
              148.684172,
              -22.864939
            ],
            [
              148.684402,
              -22.864441
            ],
            [
              148.684589,
              -22.863988
            ],
            [
              148.688467,
              -22.854008
            ],
            [
              148.688432,
              -22.854004
            ],
            [
              148.689802,
              -22.852062
            ],
            [
              148.690581,
              -22.850963
            ],
            [
              148.692348,
              -22.84844
            ],
            [
              148.684415,
              -22.848439
            ],
            [
              148.680663,
              -22.84844
            ],
            [
              148.673771,
              -22.843183
            ],
            [
              148.667756,
              -22.831807
            ],
            [
              148.667756,
              -22.831774
            ],
            [
              148.667725,
              -22.831774
            ],
            [
              148.663652,
              -22.82405
            ],
            [
              148.652357,
              -22.815239
            ],
            [
              148.651089,
              -22.815107
            ],
            [
              148.634423,
              -22.815107
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0069.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2020-11-01 00:00:00",
        "notes": "Section ES.2 PROJECT OVERVIEW on page 3 of the Middlemount Coal Mine Southern Extension Project Environmental Values Assessment from 11/2020, https://web.archive.org/web/20250709141044/https://minedocs.com/24/Middlemount-Extension-EA-112020.pdf, describes the an extension of the mining operations within the existing contiguous mining leases of the mine: ML 70379, ML 70417, ML 700014, ML 700027 and ML 70417. The boundary is comprised of these mining leases. The area of the boundary is approximately 35 sq km. Mining lease geometries were extracted from the Queensland Mining Leases dataset (https://web.archive.org/web/2/https://www.data.qld.gov.au/dataset/queensland-mining-and-exploration-tenure-series/resource/f87794b8-7b9a-4732-89bb-56ccb2228d27).\n",
        "description": "Middlemount mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0069",
        "Owners": "Middlemount Coal Limited [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Peabody Energy [50%]; Yancoal Australia Ltd [50%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Middlemount_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Middlemount Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 09, 2025",
        "build_version": "mines - January 30 (built on February 02 2026 12.49.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          148.63726,
          -22.879798
        ]
      },
      "properties": {
        "id": "M0069.P1",
        "mine feature category": "other",
        "mine feature subcategory": "preparation plant",
        "data source date": "2024-03-01 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "coal handling and preparation plant",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0069",
        "Owners": "Middlemount Coal Limited [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Peabody Energy [50%]; Yancoal Australia Ltd [50%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Middlemount_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Middlemount Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 09, 2025",
        "build_version": "mines - January 30 (built on February 02 2026 12.49.33 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(-22.881773, 148.617432), L.latLng(-22.815107, 148.692348));
                        
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
                        
	GEMMine = L.marker([-22.848131, 148.631626], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Middlemount Coal Mine Operating mine');
	GEMMine.bindTooltip('Middlemount Coal Mine Operating mine', { permanent: true, direction: 'right'});
