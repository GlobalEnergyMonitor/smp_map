
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
              86.283453,
              23.791769
            ],
            [
              86.286027,
              23.792112
            ],
            [
              86.287613,
              23.79278
            ],
            [
              86.288643,
              23.793512
            ],
            [
              86.288776,
              23.794821
            ],
            [
              86.287418,
              23.795797
            ],
            [
              86.286676,
              23.797407
            ],
            [
              86.286627,
              23.798688
            ],
            [
              86.286959,
              23.798991
            ],
            [
              86.287307,
              23.800422
            ],
            [
              86.288104,
              23.801032
            ],
            [
              86.288118,
              23.801032
            ],
            [
              86.288654,
              23.801897
            ],
            [
              86.288581,
              23.802625
            ],
            [
              86.289149,
              23.803994
            ],
            [
              86.289786,
              23.804304
            ],
            [
              86.290724,
              23.80433
            ],
            [
              86.291781,
              23.803735
            ],
            [
              86.292248,
              23.802791
            ],
            [
              86.292744,
              23.802077
            ],
            [
              86.293915,
              23.801892
            ],
            [
              86.294856,
              23.802555
            ],
            [
              86.294825,
              23.802554
            ],
            [
              86.294866,
              23.804655
            ],
            [
              86.29504,
              23.80679
            ],
            [
              86.29488,
              23.807463
            ],
            [
              86.293114,
              23.807748
            ],
            [
              86.291581,
              23.807863
            ],
            [
              86.290627,
              23.808164
            ],
            [
              86.289362,
              23.808727
            ],
            [
              86.288608,
              23.809091
            ],
            [
              86.287226,
              23.80951
            ],
            [
              86.286058,
              23.809783
            ],
            [
              86.284882,
              23.809977
            ],
            [
              86.284374,
              23.809892
            ],
            [
              86.283797,
              23.809268
            ],
            [
              86.283204,
              23.80764
            ],
            [
              86.282764,
              23.806249
            ],
            [
              86.282284,
              23.805446
            ],
            [
              86.280694,
              23.804643
            ],
            [
              86.279829,
              23.803761
            ],
            [
              86.278264,
              23.803131
            ],
            [
              86.276679,
              23.802269
            ],
            [
              86.275413,
              23.801378
            ],
            [
              86.275419,
              23.801346
            ],
            [
              86.274171,
              23.79999
            ],
            [
              86.274182,
              23.799932
            ],
            [
              86.273663,
              23.799081
            ],
            [
              86.273694,
              23.798937
            ],
            [
              86.274083,
              23.796545
            ],
            [
              86.274342,
              23.795171
            ],
            [
              86.275096,
              23.794553
            ],
            [
              86.278896,
              23.794943
            ],
            [
              86.283453,
              23.791769
            ]
          ]
        ]
      },
      "properties": {
        "id": "M2502.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "underground and surface",
        "data source date": "2019-11-29 00:00:00",
        "notes": "New Akashkinaree Coal Mine, part of Cluster III under Bharat Coking Coal Limited, is a mixed mine with both underground and opencast operations. Since opencast production accounts for about 90% of the output, it covers a significantly larger area compared to the underground portion. Exact boundary coordinates are not available, therefore the boundary has been georeferenced in Google Earth Pro using the Cluster III boundary shown in 'Land Restoration / Reclamation Monitoring of 4\nClusters of Opencast Mines of Bharat Coking Coal Limited producing less than 5 m.cu.m. (Coal + OB) based on Satellite Data for the Year 2017' on page 167 of the six monthly compliance report, https://web.archive.org/web/20250407054911/https://bcclweb.in/Environment%20Clearance/april19_sept19/Cluster-III_Six%20monthly%20compliance%20report%20for%20period%20from%20April%202019%20to%20September%202019.pdf, dated November 29 2019.",
        "description": "New Akashkinaree Coal Mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M2502",
        "Owners": "Bharat Coking Coal Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Coal India",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/New_Akashkinaree_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "New Akashkinaree Coal Mine",
        "Country / Area": "India",
        "Last researched": "Apr 06, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 12 2026 10.59.11 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(23.791769, 86.273663), L.latLng(23.809977, 86.29504));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 18, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleStreet, googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleStreet, googleHybrid]}).setView([23.800873, 86.2843515], 12)                     
    
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
                        
	GEMMine = L.marker([23.802565, 86.278261], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Operating');
	GEMMine.bindTooltip('New Akashkinaree Coal Mine', { permanent: true, direction: 'right'});
