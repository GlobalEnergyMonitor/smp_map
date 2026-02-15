
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
              148.289287,
              -21.532725
            ],
            [
              148.325251,
              -21.601868
            ],
            [
              148.331046,
              -21.601913
            ],
            [
              148.335265,
              -21.614862
            ],
            [
              148.318472,
              -21.633511
            ],
            [
              148.314168,
              -21.678585
            ],
            [
              148.371837,
              -21.743025
            ],
            [
              148.431246,
              -21.771387
            ],
            [
              148.431203,
              -21.827386
            ],
            [
              148.484402,
              -21.827411
            ],
            [
              148.496288,
              -21.80791
            ],
            [
              148.455102,
              -21.746407
            ],
            [
              148.414217,
              -21.732517
            ],
            [
              148.359708,
              -21.689832
            ],
            [
              148.347047,
              -21.672944
            ],
            [
              148.347044,
              -21.663911
            ],
            [
              148.337381,
              -21.648274
            ],
            [
              148.337377,
              -21.612141
            ],
            [
              148.328901,
              -21.586232
            ],
            [
              148.300646,
              -21.531233
            ],
            [
              148.289287,
              -21.532725
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0099.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2024-03-01 00:00:00",
        "notes": "The Introduction section on page 3 of the Compliance Report\nEPBC 2017/7957 South Walker Creek Mine MRA2c, https://web.archive.org/web/20250316141119/https://stanmore.au/wp-content/uploads/2024/03/2024-Annual-Compliance-Report-EPBC2017-7957-MRA2c-Stage-1.pdf, March 2024, describes the mining lease for the mine, 'Mining activities at SWC are conducted on Mining Lease (ML) 4750 across five active pits.'.  The mine lease boundary was extracted from the Queensland Spatial Catalogue's (QSpatial) Mining Leases boundary data,  https://web.archive.org/web/20250603154047/https://qldspatial.information.qld.gov.au/catalogue/custom/index.page. The area of the boundary is 114 sq km.",
        "description": "Mine lease area boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0099",
        "Owners": "Stanmore SMC Pty Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Stanmore Resources Ltd",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/South_Walker_Creek_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Met",
        "Mine Name": "South Walker Creek Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jun 03, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-21.827411, 148.289287), L.latLng(-21.531233, 148.496288));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([-21.679322, 148.3927875], 12.0)                     
    var markerLayerGroup = L.layerGroup();
                        

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
        markerLayerGroup.addLayer(layer)
	}
    
    markerLayerGroup.addTo(map);
    const mineLayer = L.geoJSON(mine, {onEachFeature}).addTo(map)
    var GEMMineIcon = L.icon({ iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/red-circle.png', iconSize:  [40, 40]});
    
    const myDiv = document.getElementById('map');
    const width = myDiv.offsetWidth;
    const height = myDiv.offsetHeight;
    console.log("#map width: " + width + ", height: " + height);                    

    // Create a "dummy" layer group specifically to act as the tooltip toggle switch in the control
    var tooltipToggleLayer = L.layerGroup();
    // Add event listeners to the map that listen for the toggle layer being added or removed
    map.on('layeradd', function (e) {
        if (e.layer === tooltipToggleLayer) {
            // When the "Tooltip" overlay is selected, iterate over all markers and make tooltips permanent
            markerLayerGroup.eachLayer(function (layer) {
                if (layer.getTooltip()) {
                    layer.getTooltip().options.permanent = true;
                    layer.openTooltip(); // Open the tooltip permanently
                }
            });
        }
    });
    map.on('layerremove', function (e) {
        if (e.layer === tooltipToggleLayer) {
            // When the "Tooltip" overlay is deselected, make tooltips non-permanent and close them
            markerLayerGroup.eachLayer(function (layer) {
                if (layer.getTooltip()) {
                    layer.getTooltip().options.permanent = false;
                    layer.closeTooltip();
                }
            });
        }
    });

    map.on('zoomend', function() {
        console.log("Current zoom level: " + map.getZoom());
    });

    var baseMaps = {
        "Satellite view": googleHybrid,
        "Street view": googleStreet
    };
    var overlayMaps = {
        "Labels": tooltipToggleLayer // The toggle switch for tooltips
    };
    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
                        
    var GEMMine;
                        
	GEMMine = L.marker([-21.753393, 148.443289], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Operating status(es): Proposed, Operating');
	GEMMine.bindTooltip('South Walker Creek Coal Mine', { permanent: true, direction: 'right'});
