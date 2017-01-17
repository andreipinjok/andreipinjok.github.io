
      function initialize() {
                                                var mapOptions = {
                                                    center: new google.maps.LatLng(45.444060, 25.591631),
                                                    zoom: 9,
                                                    mapTypeId: google.maps.MapTypeId.HYBRID,
                                                    scrollwheel: false,
                                                    draggable: false,
                                                    panControl: true,
                                                    zoomControl: true,
                                                    mapTypeControl: true,
                                                    scaleControl: true,
                                                    streetViewControl: true,
                                                    overviewMapControl: true,
                                                    rotateControl: true,
                                                };
                                                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
                                            }
                                            google.maps.event.addDomListener(window, 'load', initialize);

      $(document).ready(function() {
                                                          var $lightbox = $('#lightbox');
                                                          
                                                          $('[data-target="#lightbox"]').on('click', function(event) {
                                                              var $img = $(this).find('img'), 
                                                                  src = $img.attr('src'),
                                                                  alt = $img.attr('alt'),
                                                                  css = {
                                                                      'maxWidth': $(window).width() - 100,
                                                                      'maxHeight': $(window).height() - 100
                                                                  };
                                                          
                                                              $lightbox.find('.close').addClass('hidden');
                                                              $lightbox.find('img').attr('src', src);
                                                              $lightbox.find('img').attr('alt', alt);
                                                              $lightbox.find('img').css(css);
                                                          });
                                                          
                                                          $lightbox.on('shown.bs.modal', function (e) {
                                                              var $img = $lightbox.find('img');
                                                                  
                                                              $lightbox.find('.modal-dialog').css({'width': $img.width()});
                                                              $lightbox.find('.close').removeClass('hidden');
                                                          });
                                                      });
