(function($) {
  "use strict"; // Start of use strict

  $(function () {
    const search = window.location.search;
    if (search.includes('portfolio')) {
      document.getElementById('nav-portfolio').click();
    }
  });

  var timeoutId;
  $(document).scroll(function () {
    if(timeoutId ){
      clearTimeout(timeoutId );  
    }
    timeoutId = setTimeout(function(){
      const search = window.location.search;
      if (search.includes('portfolio')) {
        var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    }, 500);
  });

})(jQuery); // End of use strict
