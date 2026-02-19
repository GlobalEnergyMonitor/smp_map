
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
              113.075,
              35.94517
            ],
            [
              113.07395,
              35.90504
            ],
            [
              113.08152,
              35.90492
            ],
            [
              113.08163,
              35.89167
            ],
            [
              113.10227,
              35.89131
            ],
            [
              113.10233,
              35.8936
            ],
            [
              113.10355,
              35.89358
            ],
            [
              113.10359,
              35.89499
            ],
            [
              113.1089,
              35.89489
            ],
            [
              113.10979,
              35.9283
            ],
            [
              113.10591,
              35.92827
            ],
            [
              113.10617,
              35.93832
            ],
            [
              113.10227,
              35.9385
            ],
            [
              113.10243,
              35.94469
            ],
            [
              113.075,
              35.94517
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0283.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground",
        "data source date": "2014-01-04 00:00:00",
        "notes": "The coordinates were reported in Section 2.1 Mining Area on page 15 in the document Preliminary Design for the No. 3 and No. 15 Coal Seams of the Shanxi Wangzhuang Coal Mine (\u5c71\u897f\u738b\u5e84\u7164\u77ff\u77ff\u4e953\u300115\u53f7\u7164\u5c42\u521d\u6b65\u8bbe\u8ba1) https://web.archive.org/web/20250922173835/https://www.doc88.com/p-5147381927027.html and Section 3.1 of Mining Right Valuation Report of Wangzhuang Coal Industry Co., Ltd., Changzhi, Shanxi Province, https://web.archive.org/web/20250516215636/https://q.stock.sohu.com/cn,gg,600780,1700527057.shtml.\n",
        "description": "Lu'an Wangzhuang coal mine boundary",
        "coordinates precision": "reported",
        "GEM Mine ID": "M0283",
        "Owners": "Shanxi Lu'an Environmental Energy Development Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Lu'an Chemical Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Lu%27an_Wangzhuang_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E6%BD%9E%E5%AE%89%E7%8E%AF%E4%BF%9D%E8%83%BD%E6%BA%90%E5%BC%80%E5%8F%91%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%8E%8B%E5%BA%84%E7%85%A4%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Lu'an Wangzhuang Coal Mine",
        "Country / Area": "China",
        "Last researched": "May 27, 2025",
        "build_version": "mines - wiki dev (built on January 15 2026 19.44.59 EST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          113.092954,
          35.917324
        ]
      },
      "properties": {
        "id": "M0283.P2",
        "mine feature category": "ventilation system",
        "mine feature subcategory": "shaft",
        "data source date": "2020-03-22 00:00:00",
        "notes": "Identified visually from Google Earth Pro satellite imagery.",
        "description": "ventilation shaft",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0283",
        "Owners": "Shanxi Lu'an Environmental Energy Development Company [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Lu'an Chemical Group",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Lu%27an_Wangzhuang_Coal_Mine",
        "GEM Wiki Page (Non-ENG)": "https://www.gem.wiki/%E5%B1%B1%E8%A5%BF%E6%BD%9E%E5%AE%89%E7%8E%AF%E4%BF%9D%E8%83%BD%E6%BA%90%E5%BC%80%E5%8F%91%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%8E%8B%E5%BA%84%E7%85%A4%E7%9F%BF",
        "Coal Grade": "Met",
        "Mine Name": "Lu'an Wangzhuang Coal Mine",
        "Country / Area": "China",
        "Last researched": "May 27, 2025",
        "build_version": "mines - wiki dev (built on January 15 2026 19.44.59 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(35.89131, 113.01989), L.latLng(36.373933, 113.10979));
                        
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
                        
	GEMMine = L.marker([36.373933, 113.01989], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup("Lu'an Wangzhuang Coal Mine Operating mine");
	GEMMine.bindTooltip("Lu'an Wangzhuang Coal Mine Operating mine", { permanent: true, direction: 'right'});
