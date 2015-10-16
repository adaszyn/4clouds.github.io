$(function() {
  $('.flip-container').on('click', function() {
    var element = document.querySelector(".flip-container");
    element.classList.toggle("flip");
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $('#offer').offset().top - 64
      }, 500);
    }, 800);
    setTimeout(function() {
      element.classList.toggle("flip");
    }, 3000);
  });

  $(".dropdown-button").dropdown();

  $(".button-collapse").sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  // $('.parallax').parallax();
  $('.slider').slider({
    full_width: true,
    interval: 6000,
    indicators: false
  });

  $('a[href*=#]').anchor({
    transitionDuration: 500
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
    icon: '/img/marker.svg'
  });


});
