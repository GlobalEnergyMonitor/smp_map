
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
              147.944397,
              -21.679546
            ],
            [
              147.941176,
              -21.682686
            ],
            [
              147.938963,
              -21.685211
            ],
            [
              147.93769,
              -21.687256
            ],
            [
              147.937308,
              -21.688222
            ],
            [
              147.936855,
              -21.689446
            ],
            [
              147.934452,
              -21.69693
            ],
            [
              147.934461,
              -21.748107
            ],
            [
              147.928689,
              -21.747953
            ],
            [
              147.928692,
              -21.748471
            ],
            [
              147.917716,
              -21.748436
            ],
            [
              147.917855,
              -21.76525
            ],
            [
              147.929588,
              -21.765161
            ],
            [
              147.934612,
              -21.776389
            ],
            [
              147.934445,
              -21.865112
            ],
            [
              147.970096,
              -21.865113
            ],
            [
              147.968884,
              -21.868835
            ],
            [
              148.002585,
              -21.868733
            ],
            [
              148.006811,
              -21.852418
            ],
            [
              148.020561,
              -21.823301
            ],
            [
              148.023742,
              -21.795313
            ],
            [
              148.002394,
              -21.689884
            ],
            [
              147.966231,
              -21.67208
            ],
            [
              147.963639,
              -21.671252
            ],
            [
              147.962708,
              -21.670418
            ],
            [
              147.956988,
              -21.670464
            ],
            [
              147.95588,
              -21.66971
            ],
            [
              147.955171,
              -21.669754
            ],
            [
              147.944397,
              -21.679546
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0043.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2023-04-18 00:00:00",
        "notes": "The Goonyella-Riverside Coal Mine is part of a BHP Coal Pty Ltd mining complex which also includes the underground Broadmeadow Mine. The boundary is specific to the open-cut surface mine, Goonyella-Riverside. The ventilation and degasification infrastructure found within the mine boundary are assumed to belong to the underground mining operations at the Broadmeadow Mine (M0016). The mine's individual mining lease boundaries were downloaded from the Queensland Spatial Catalogue, https://web.archive.org/web/20250703175324/https://www.data.qld.gov.au/dataset/queensland-mining-and-exploration-tenure-series/resource/5041f29f-7001-467c-803f-963c59da76c1, last updated in 2024. The relevant lease boundary numbers were confirmed in a 2017 Environmental Authority Permit document, https://web.archive.org/save/https://storagesolutiondocsprod.blob.core.windows.net/register-documents-ea/EPML00853413_20240226.pdf, and the associated boundary polygons were identified from the Queensland Spatial Catalogue data. The lease boundaries were merged into a single total boundary polygon in QGIS. The resultant polygon was simplified in Google Earth Pro to remove narrow roadway spaces within the greater boundary. The area of the polygon is approximately 174 square km. The boundary polygon overlaps with the mining boundary of the underground Broadmeadow Mine, which is also owned by BHP Coal Pty Ltd and operated under the same Environmental Authority (EPML00853413) permit as the Goonyella-Riverside Coal Mine.",
        "description": "Goonyella-Riverside total mining boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0043",
        "Owners": "BHP Billiton Mitsubishi Alliance Pty Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "BHP [50%]; Mitsubishi Corporation [50%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Goonyella_Riverside_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Goonyella-Riverside Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 15, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          147.946333,
          -21.756091
        ]
      },
      "properties": {
        "id": "M0043.P1",
        "mine feature category": "other",
        "mine feature subcategory": "preparation plant",
        "data source date": "2023-04-18 00:00:00",
        "notes": "The location of the coal handling and preparation plant was first identified in an environmental impact statement (EIS) of a proposed expansion to the Goonyella Riverside and Broadmeadow (GRB) mine complex, https://web.archive.org/save/https://www.bhp.com/-/media/bhp/regulatory-information-media/coal/bhp-billiton-mitsubishi-alliance/red-hill/red-hill-mining-lease-project-draft-environmental-impact-statement-eis/131213_coal_bma_redhill_section03projectdescription.pdf. The location of the actual CHPP was then identified and extracted from Google Earth Pro.",
        "description": "Coal handling and preparation plant",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0043",
        "Owners": "BHP Billiton Mitsubishi Alliance Pty Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "BHP [50%]; Mitsubishi Corporation [50%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Goonyella_Riverside_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Goonyella-Riverside Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 15, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-21.868835, 147.917716), L.latLng(-21.66971, 148.023742));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
    
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
    console.log(width, height);                    

    var GEMMine;
                        
	GEMMine = L.marker([-21.792321, 147.962045], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Goonyella-Riverside Coal Mine Operating mine');
	GEMMine.bindTooltip('Goonyella-Riverside Coal Mine Operating mine', { permanent: true, direction: 'right'});
