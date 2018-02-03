        //畫出地圖    
        function initMap() {

            //設定地圖初始的位置與尺度  
            var map; //畫出地圖 
            var markers = [];

            map = new google.maps.Map(document.getElementById('gmap'), {
                center: {
                    lat: 25.083397,
                    lng: 121.872716
                },
                zoom: 10,

                //控制捲動控制項目
                gestureHandling: 'auto',


                //設定地圖樣式
                styles: [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]

            });


            map.data.loadGeoJson('p_area.geojson');
            map.data.loadGeoJson('path2.geojson');
            map.data.loadGeoJson('path3.geojson');
            map.data.loadGeoJson('漁獲資料_fake_v3.geojson');

            map.data.setStyle({
                strokeColor: '#ffce00',
                strokeWeight: 2.5
            });


            map.data.addListener('mouseover', function (event) {
                map.data.revertStyle();
                map.data.overrideStyle(event.feature, {
                    strokeWeight: 5
                });
            });


            map.data.addListener('mouseout', function (event) {
                map.data.revertStyle();
            });




        }