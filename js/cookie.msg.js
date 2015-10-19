(function($) {
  $.cookieMsg = function() {
    var cs = false, // is coockie set?
      d = 360, // expiration days
      mn = 'cookie-panel',
      n = '__4cloudsio_cm', // cookie name
      i, // counter
      sc, // single cookie
      acs = document.cookie.split('; '), // all cookies
      setExp = function() {
        var ed = new Date();
        ed.setTime(ed.getTime() + (d * 86400000));
        return ed.toGMTString();
      },
      remove = function() {
        $('#' + mn).fadeOut(300, function() {
          $('#' + mn).remove();
        });
      },
      accept = function() {
        document.cookie = ce;
        remove();
      },
      ce = n + '=1; expires=' + setExp() + '; path=/';

    // check if cookie exists
    for (i = 0; i < acs.length; i++) {
      sc = acs[i].split('=');
      if (sc[0] == n) {
        cs = true;
      }
    }
    $('#cookie-accept-btn').click(function() {
      accept();
      return false;
    });
    if (cs === false) {
      $('#' + mn).show();
    }
  };
})(jQuery);
