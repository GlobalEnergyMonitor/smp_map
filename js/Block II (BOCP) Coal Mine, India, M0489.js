
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
              86.174994,
              23.775003
            ],
            [
              86.225212,
              23.775302
            ],
            [
              86.225134,
              23.791986
            ],
            [
              86.175075,
              23.791839
            ],
            [
              86.174994,
              23.775003
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0489.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground and surface",
        "data source date": "Unclear since the information is not given in the resource which the boundary is based on.",
        "notes": "The boundary is based on the rectangular Block II area described in the Location section of the website https://web.archive.org/web/20240723002954/https://www.bcclweb.in/?page_id=6261&lang=en. The area of this boundary is 951 hectares, which is close to the area listed in the Details of Leasehold section of the same website of 906.63 hectares. More precise information on the exact boundary was not found.",
        "description": "Block II (BOCP) Coal Mine boundary",
        "coordinates precision": "reported",
        "GEM Mine ID": "M0489",
        "Owners": "Bharat Coking Coal Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Coal India",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Block_II_mines",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Block II (BOCP) Coal Mine",
        "Country / Area": "India",
        "Last researched": "Apr 30, 2025",
        "build_version": "mines - version 1.0.0 (Feb 3 2026) (built on February 03 2026 10.14.00 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          86.194049,
          23.780063
        ]
      },
      "properties": {
        "id": "M0489.P1",
        "mine feature category": "degasification system",
        "mine feature subcategory": "flare",
        "data source date": "2019-02-01 00:00:00",
        "notes": "Based on GEP satellite imagery from 2/2019, there appears to be a large flame above this infrastructure suggesting it might be a flare.",
        "description": "possible flare",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0489",
        "Owners": "Bharat Coking Coal Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Coal India",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Block_II_mines",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "Block II (BOCP) Coal Mine",
        "Country / Area": "India",
        "Last researched": "Apr 30, 2025",
        "build_version": "mines - version 1.0.0 (Feb 3 2026) (built on February 03 2026 10.14.00 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(23.75722302, 86.174994), L.latLng(23.791986, 86.79445561));
                        
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
                        
	GEMMine = L.marker([23.75722302, 86.79445561], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Block II (BOCP) Coal Mine Operating mine');
	GEMMine.bindTooltip('Block II (BOCP) Coal Mine Operating mine', { permanent: true, direction: 'right'});
