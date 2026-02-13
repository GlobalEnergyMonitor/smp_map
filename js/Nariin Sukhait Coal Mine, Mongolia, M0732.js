
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
              101.243235,
              43.003975
            ],
            [
              101.243288,
              43.003974
            ],
            [
              101.243158,
              42.999929
            ],
            [
              101.259089,
              42.999617
            ],
            [
              101.259099,
              42.999929
            ],
            [
              101.266596,
              42.999929
            ],
            [
              101.275206,
              42.999929
            ],
            [
              101.275179,
              43.00453
            ],
            [
              101.266565,
              43.00453
            ],
            [
              101.259246,
              43.00453
            ],
            [
              101.259291,
              43.00593
            ],
            [
              101.252959,
              43.006054
            ],
            [
              101.252954,
              43.006828
            ],
            [
              101.252954,
              43.011473
            ],
            [
              101.230734,
              43.011473
            ],
            [
              101.174623,
              43.011469
            ],
            [
              101.174623,
              43.017305
            ],
            [
              101.147402,
              43.017305
            ],
            [
              101.147429,
              42.999933
            ],
            [
              101.191874,
              42.999933
            ],
            [
              101.191847,
              43.003973
            ],
            [
              101.230734,
              43.003973
            ],
            [
              101.243235,
              43.003973
            ],
            [
              101.243235,
              43.003975
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0732.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2025-12-19 00:00:00",
        "notes": "This mine operates under the subsoil land-use licenses MV-000227, MV-005458, MV-006852, MV-012225, and MV-012226, as identified through The Project for Formulation of National Comprehensive Development Plan \u2013 Final Report: Sector Report on Crop Farming, Livestock Farming, Mining, Manufacturing and Tourism, prepared by the Ministry of Construction and Urban Development (MCUD), National Development Agency (NDA), and the Japan International Cooperation Agency (JICA),https://www.archive.org/details/the-project-for-formulation-of-national-comprehensive-development-plan, December 2021. The license MV-000227 was issued on October 8, 1995, and is valid until October 8, 2045. The license MV-005458 was issued on February 25, 2003, and is valid until February 25, 2033. The license MV-006852 was issued on January 28, 2004, and is valid until January 28, 2034. The license MV-012225 was issued on November 22, 2006, and is valid until November 22, 2036. The license MV-012226 was issued on November 22, 2006, and is valid until November 22, 2036.The boundary for the license MV-000227 was extracted from the Opendata Lab Mongolia portal at https://web.archive.org/web/20251219211022/https://opendatalab.mn/mininglicense/227. The boundary for the license MV-005458, was extracted from the Opendata Lab Mongolia portal at https://web.archive.org/web/20251219211422/https://opendatalab.mn/mininglicense/5458. The boundary for the license MV-006852, was extracted from the Opendata Lab Mongolia portal at https://web.archive.org/web/20251219211404/https://opendatalab.mn/mininglicense/6852. The boundary for the license MV-012225, was extracted from the Opendata Lab Mongolia portal at https://web.archive.org/web/20251219211427/https://opendatalab.mn/mininglicense/12225. The boundary for the license MV-012226, was extracted from the Opendata Lab Mongolia portal at https://web.archive.org/web/20251219211439/https://opendatalab.mn/mininglicense/12226. Open pits associated with the Ovoot Tolgoi coal mine may overlap the southern edge of the Nariin Sukhait Coal Mine boundary. The reported mine area is 1,161.4 hectares (11.61 square km); the approximate area of the extracted boundary is 12 square km.",
        "description": "Nariin sukhait coal mine",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0732",
        "Owners": "Mongolyn Alt LLC [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Mongolyn Alt Corporation [MAK]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Nariin_Sukhait_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Nariin Sukhait Coal Mine",
        "Country / Area": "Mongolia",
        "Last researched": "Dec 19, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(42.999617, 101.147402), L.latLng(43.017305, 101.275206));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([43.008461, 101.211304], 12)                     
    
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
                        
	GEMMine = L.marker([43.002222, 101.260556], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Nariin Sukhait Coal Mine Operating mine');
	GEMMine.bindTooltip('Nariin Sukhait Coal Mine Operating mine', { permanent: true, direction: 'right'});
