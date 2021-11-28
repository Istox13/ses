

function redirect(){
    window.location.href = "https://n245487.yclients.com/";
}


$(function(){ 
    var navMain = $(".navbar-collapse"); 
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});


$(document).ready(function() {

    $(window).resize(function(){
      var windowWidth = $('body').innerWidth();
      if(windowWidth < 480){$("#CompanyName").removeClass('display-3').addClass('display-4');}
      else{$("#CompanyName").removeClass('display-4').addClass('display-3');}
    });
  });
