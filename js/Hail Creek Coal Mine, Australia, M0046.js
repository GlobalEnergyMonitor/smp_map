
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
              148.194051,
              -21.437795
            ],
            [
              148.18835,
              -21.483068
            ],
            [
              148.201258,
              -21.492754
            ],
            [
              148.205084,
              -21.504767
            ],
            [
              148.224916,
              -21.508449
            ],
            [
              148.233323,
              -21.510044
            ],
            [
              148.235774,
              -21.507011
            ],
            [
              148.238874,
              -21.5092
            ],
            [
              148.237544,
              -21.510845
            ],
            [
              148.367754,
              -21.535497
            ],
            [
              148.396115,
              -21.540852
            ],
            [
              148.451087,
              -21.551216
            ],
            [
              148.472933,
              -21.555329
            ],
            [
              148.469277,
              -21.523737
            ],
            [
              148.468676,
              -21.518301
            ],
            [
              148.467948,
              -21.511988
            ],
            [
              148.456114,
              -21.50541
            ],
            [
              148.435947,
              -21.474359
            ],
            [
              148.426825,
              -21.436969
            ],
            [
              148.382989,
              -21.409115
            ],
            [
              148.342201,
              -21.43721
            ],
            [
              148.351732,
              -21.448683
            ],
            [
              148.351748,
              -21.485999
            ],
            [
              148.351748,
              -21.48645
            ],
            [
              148.351725,
              -21.506499
            ],
            [
              148.351715,
              -21.515043
            ],
            [
              148.351713,
              -21.516777
            ],
            [
              148.351699,
              -21.524694
            ],
            [
              148.284971,
              -21.511451
            ],
            [
              148.268294,
              -21.498711
            ],
            [
              148.26831,
              -21.443104
            ],
            [
              148.254464,
              -21.419722
            ],
            [
              148.252806,
              -21.419528
            ],
            [
              148.247582,
              -21.418918
            ],
            [
              148.240234,
              -21.418285
            ],
            [
              148.219306,
              -21.4604
            ],
            [
              148.194051,
              -21.437795
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0046.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2024-01-01 00:00:00",
        "notes": "The boundary is the mining lease ML 4738 found in the Queensland Mining leases dataset https://web.archive.org/web/2/https://www.data.qld.gov.au/dataset/queensland-mining-and-exploration-tenure-series/resource/f87794b8-7b9a-4732-89bb-56ccb2228d27. This lease was also corroborated against the HCOC_ML4738 boundary shown in figure 4 on page 25 of the Hail Creek Environmental Assessment Report - Hail Creek Eastern Margin Extension Project from 1/2024 at https://web.archive.org/web/20240528022706/https://www.glencore.com.au/.rest/api/v1/documents/095ae370185b23a2d7b47779dc8b91a8/Hail+Creek+Eastern+Margin+Extension+Environmental+Assessment+Report.pdf.  This figure also shows mining is occuring in the eastern half of the lease and exploration is occurring in the western half of the lease. The mining lease was granted on 12/15/1977 and expires on 12/31/2040. The area of the mining lease is 204 sq km.",
        "description": "Hail Creek coal mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0046",
        "Owners": "Hail Creek Coal Pty Ltd [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Glencore PLC [85.00%]; Marubeni Corp [12.00%]; Sumitomo Corp [3.00%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Hail_Creek_coal_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal & Met",
        "Mine Name": "Hail Creek Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jun 02, 2025",
        "build_version": "Coal Mine Boundaries and Methane Sources - version 1.0.1 (built on February 13 2026 18.38.33 EST)"
      }
    }
  ]
}
    var bounds = L.latLngBounds(L.latLng(-21.555329, 148.18835), L.latLng(-21.409115, 148.472933));                        
    var googleStreet =  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    var googleHybrid =  L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {maxZoom: 20, attribution: '&copy; Google Maps'})
    
    // When this map is embedded in the GEM Wiki via an iframe widget, the enclosing html css for width and height of #map does not consistently
    // come through, resulting in sometimes being 0, 0. This seems to mess fitBounds up resulting in a fully zoomed out map showing the entire planet.
    // I tried many different adjustments, but in the end chose a setView with a fixed zoom of 12 to be much more reliable.
    //var map = L.map('map', {layers: [googleHybrid]}).fitBounds(bounds) 
                        
    var map = L.map('map', {layers: [googleHybrid]}).setView([-21.482222, 148.3306415], 12.0)                     
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
                        
    GEMMine = L.marker([-21.484811, 148.37], {icon: GEMMineIcon}).addTo(map); 
    GEMMine.bindPopup('Operating status(es): Operating');
    GEMMine.bindTooltip('Hail Creek Coal Mine', { permanent: true, direction: 'right'});
