
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
              113.397153,
              33.804
            ],
            [
              113.391703,
              33.774377
            ],
            [
              113.397379,
              33.772902
            ],
            [
              113.396544,
              33.759252
            ],
            [
              113.404935,
              33.751909
            ],
            [
              113.413361,
              33.748556
            ],
            [
              113.416424,
              33.743131
            ],
            [
              113.413739,
              33.739782
            ],
            [
              113.438091,
              33.731166
            ],
            [
              113.434831,
              33.738341
            ],
            [
              113.439563,
              33.74202
            ],
            [
              113.461493,
              33.74328
            ],
            [
              113.483928,
              33.741197
            ],
            [
              113.496574,
              33.730024
            ],
            [
              113.511239,
              33.738876
            ],
            [
              113.506008,
              33.749474
            ],
            [
              113.479968,
              33.764929
            ],
            [
              113.449552,
              33.776485
            ],
            [
              113.428639,
              33.785111
            ],
            [
              113.397153,
              33.804
            ]
          ]
        ]
      },
      "properties": {
        "id": "M1210.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2014-04-10 00:00:00",
        "notes": "The mine boundary was georeferenced from Figure 1-1 transportation map on page 16 in the document Pingmei Tian'an No.5 Mine Geological Report - For Reference Use (\u5e73\u7164\u5929\u5b89\u4e94\u77ff\u77ff\u4e95\u5730\u8d28\u62a5\u544a---\u53c2\u8003\u4f7f\u7528) https://web.archive.org/web/20250919154215/https://www.doc88.com/p-7905485568595.html . The coordinates precision is estimated because the map is not to scale.",
        "description": "Estimated Tianan No. 8 coal mine boundary",
        "coordinates precision": "estimated",
        "GEM Mine ID": "M1210",
        "Owners": "Pingdingshan Tianan Coal Mining Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "China Pingmei Shenma Energy and Chemical Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tianan_No.8_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B9%B3%E9%A1%B6%E5%B1%B1%E5%A4%A9%E5%AE%89%E7%85%A4%E4%B8%9A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%85%AB%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tianan No. 8 Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          113.399228,
          33.759886
        ]
      },
      "properties": {
        "id": "M1210.P1",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2024-12-22 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft 1",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M1210",
        "Owners": "Pingdingshan Tianan Coal Mining Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "China Pingmei Shenma Energy and Chemical Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Tianan_No.8_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B9%B3%E9%A1%B6%E5%B1%B1%E5%A4%A9%E5%AE%89%E7%85%A4%E4%B8%9A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%85%AB%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Tianan No. 8 Coal Mine",
        "Country / Area": "China",
        "Last researched": "Sep 18, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(33.730024, 113.391703), L.latLng(33.804, 113.511239));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([33.767012, 113.451471], 12.0)                     
    
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
                        
	GEMMine = L.marker([33.758125, 113.426262], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('Tianan No. 8 Coal Mine', { permanent: true, direction: 'right'});
