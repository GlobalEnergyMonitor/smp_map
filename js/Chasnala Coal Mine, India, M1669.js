
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
              86.442268,
              23.657676
            ],
            [
              86.447838,
              23.667373
            ],
            [
              86.442176,
              23.676605
            ],
            [
              86.43519,
              23.678645
            ],
            [
              86.427105,
              23.674544
            ],
            [
              86.427483,
              23.664287
            ],
            [
              86.442268,
              23.657676
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1669.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground and surface",
        "data source date": "2017-09-01 00:00:00",
        "notes": "Exact boundary coordinates were not available. The boundary was extracted from Figure 8 - Location of Chasnalla Project on Google Map of the academic paper, \"A Study on Influence of Density and Viscosity of Emulsion Explosive on Its Detonation Velocity.\", https://web.archive.org/web/20250401171313/https://www.researchgate.net/publication/326186928_A_Study_on_Influence_of_Density_and_Viscosity_of_Emulsion_Explosive_on_Its_Detonation_Velocity, in the September 2017.  A total lease area of 3.48 sq km, based on the two underlying mouzas is given in the executive summary of the Chasnalla Colliery pre-feasibility report, https://web.archive.org/web/20250326163531/https://environmentclearance.nic.in/writereaddata/Online/TOR/02_Feb_2019_132940640LZW6L0QMAnnexureBriefPFRChasnallaColliery.pdf, created Feb 1, 2015 (PDF metadata). The area of the extracted boundary closely matches this area and is 3.32 sq km.",
        "description": "Chasnala Coal Mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1669",
        "Owners": "Steel Authority of India Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Steel Authority of India [SAIL]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Chasnala_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Chasnala Coal Mine",
        "Country / Area": "India",
        "Last researched": "Apr 04, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          86.433874,
          23.679281
        ]
      },
      "properties": {
        "id": "M1669.P1",
        "mine feature category": "other",
        "mine feature subcategory": "preparation plant",
        "data source date": "2024-03-21 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "Coal handling and processing plant",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1669",
        "Owners": "Steel Authority of India Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Steel Authority of India [SAIL]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Chasnala_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Chasnala Coal Mine",
        "Country / Area": "India",
        "Last researched": "Apr 04, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(23.657676, 86.427105), L.latLng(23.679281, 86.449764));                        
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
                        
	GEMMine = L.marker([23.658882, 86.449764], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Chasnala Coal Mine Operating mine');
	GEMMine.bindTooltip('Chasnala Coal Mine Operating mine', { permanent: true, direction: 'right'});
