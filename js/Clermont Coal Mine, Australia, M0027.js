
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
              147.660878,
              -22.74371
            ],
            [
              147.660671,
              -22.699068
            ],
            [
              147.62921,
              -22.695481
            ],
            [
              147.621129,
              -22.694555
            ],
            [
              147.621129,
              -22.694555
            ],
            [
              147.619539,
              -22.694373
            ],
            [
              147.61935,
              -22.694705
            ],
            [
              147.610386,
              -22.69368
            ],
            [
              147.610486,
              -22.716415
            ],
            [
              147.610625,
              -22.751126
            ],
            [
              147.632606,
              -22.753466
            ],
            [
              147.632606,
              -22.753466
            ],
            [
              147.645807,
              -22.754871
            ],
            [
              147.658855,
              -22.747403
            ],
            [
              147.660878,
              -22.74371
            ]
          ]
        ]
      },
      "properties": {
        "id": "M0027.B1",
        "mine feature category": "mine boundary",
        "mine feature subcategory": "surface",
        "data source date": "2016-09-14 00:00:00",
        "notes": "The boundary is the outer perimeter of mining leases ML 1884, ML 70343 and ML 1904 shown in Figure 1: Clermont Mine Location and Tenements on page 5 of Clermont Open Cut Glencore Plan for INITIAL DEVELOPMENT PLAN: 1 JANUARY 2016 - 31 DECEMBER 2020 Clermont Mining Lease Application Wolfang #4 (ML1904), from Sep 14, 2016, https://web.archive.org/web/20240617114506/https://minedocs.com/21/Clermont-Initial-Development-Plan-2016-2020.pdf. Mining lease ML 70334, a conveyor belt leading to mining lease ML 1881, coal and water storage and part of the Blair Athol mine, are not included in the boundary. The source date of this pdf was determined by inspecting the pdf creation date.\n\nFigure 2: Project Layout on page 9 of The Clearmont Coal Mine - Initial advice statement from 2003 https://web.archive.org/web/2/https://www.statedevelopment.qld.gov.au/__data/assets/pdf_file/0019/17344/ccm-ias.pdf, shows earlier versions of mining leases ML 1884 and ML 1904, the outer perimeter of which match closely the outer perimeter of the more recent  ML 1884, ML 70343 and ML 1904 mining leases.\n\nMining lease geometries were extracted from the Queensland Mining Leases dataset (https://web.archive.org/web/2/https://www.data.qld.gov.au/dataset/queensland-mining-and-exploration-tenure-series/resource/f87794b8-7b9a-4732-89bb-56ccb2228d27).\n\nThe area of the boundary is 32 sq km.",
        "description": "Clermont mine boundary",
        "coordinates precision": "extracted",
        "GEM Mine ID": "M0027",
        "Owners": "Clermont Coal Operations Pty Limited [100%]",
        "Owners (Non-ENG)": "",
        "Parent Company": "Glencore PLC [37.00%]; Sumitomo Corp [37.00%]; J-POWER Co Ltd [22.00%]; J.C.D. Australia [4.00%]",
        "GEM Wiki Page (ENG)": "https://www.gem.wiki/Clermont_mine",
        "GEM Wiki Page (Non-ENG)": "",
        "Coal Grade": "Thermal",
        "Mine Name": "Clermont Coal Mine",
        "Country / Area": "Australia",
        "Last researched": "Jul 23, 2025",
        "build_version": "mines - wiki dev (built on January 15 2026 19.44.59 EST)"
      }
    }
  ]
}

    var bounds = L.latLngBounds(L.latLng(-22.754871, 147.610386), L.latLng(-22.69368, 147.660878));
                        
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
                        
	GEMMine = L.marker([-22.7201075, 147.6195648], {icon: GEMMineIcon}).addTo(map); 
	GEMMine.bindPopup('Clermont Coal Mine Operating mine');
	GEMMine.bindTooltip('Clermont Coal Mine Operating mine', { permanent: true, direction: 'right'});
