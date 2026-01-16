
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
              113.247992,
              33.772859
            ],
            [
              113.279995,
              33.757156
            ],
            [
              113.289718,
              33.805224
            ],
            [
              113.267959,
              33.803802
            ],
            [
              113.247992,
              33.772859
            ]
          ]
        ]
      },
      "properties": {
        "id": "M2167.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2014-04-10 00:00:00",
        "notes": "The mine boundary was georeferenced from a transportation map on page 16 in the document Pingmei Tian'an No.5 Mine Geological Report - For Reference Use (\u5e73\u7164\u5929\u5b89\u4e94\u77ff\u77ff\u4e95\u5730\u8d28\u62a5\u544a---\u53c2\u8003\u4f7f\u7528) https://web.archive.org/web/20250919154215/https://www.doc88.com/p-7905485568595.html. The coordinates precision is estimated because the map is not to scale.",
        "description": "Estimated Tian'an No.4 coal mine boundary",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M2167",
        "Owners": "Pingdingshan Tianan Coal Industry Company Tian'an No.4 Coal Mine [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "China Pingmei Shenma Energy and Chemical Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tian%27an_No.4_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B9%B3%E9%A1%B6%E5%B1%B1%E5%A4%A9%E5%AE%89%E7%85%A4%E4%B8%9A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%9B%9B%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tian'an No.4 Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 16, 2025",
        "build_version": "mines - wiki dev (built on January 15 2026 19.44.59 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          113.266933,
          33.783235
        ]
      },
      "properties": {
        "id": "M2167.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2024-12-22 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2167",
        "Owners": "Pingdingshan Tianan Coal Industry Company Tian'an No.4 Coal Mine [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "China Pingmei Shenma Energy and Chemical Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tian%27an_No.4_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B9%B3%E9%A1%B6%E5%B1%B1%E5%A4%A9%E5%AE%89%E7%85%A4%E4%B8%9A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%9B%9B%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tian'an No.4 Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 16, 2025",
        "build_version": "mines - wiki dev (built on January 15 2026 19.44.59 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(33.757156, 113.247992), L.latLng(33.805224, 113.289718));
                        
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
                        
	GEMMine = L.marker([33.778162, 113.266048], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Tian'an No.4 Coal Mine Operating mine');
	GEMMine.bindTooltip('Tian'an No.4 Coal Mine Operating mine', { permanent: true, direction: 'right'});
