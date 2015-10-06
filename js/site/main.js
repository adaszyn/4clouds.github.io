$(function() {
  $(".button-collapse").sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  $('.parallax').parallax();

  $('a[href*=#]').anchor({
      transitionDuration : 500
  });

  var pos = {
    lat: 51.9343505,
    lng: 15.4854042
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 6,
    disableDefaultUI: true,
    scrollwheel: false,
    streetViewControl: false,
    panControl: false,
    styles: [{
      "stylers": [{
        saturation: '-80',
        lightness: '0.3921568627451'
      }]
    }]
  });
  map.panBy(-160, 0);

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: '4clouds.io',
    icon: 'img/marker.svg'
  });


});
