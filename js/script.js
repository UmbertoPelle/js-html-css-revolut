$(document).ready(function() {

  $("#top-nav .drop-down").mouseenter(function(){
    $(".drop-down-content").hide();
    $(this).children(".drop-down-content").toggle();
  });
  $("#top-nav .drop-down").mouseleave(function(){
    $(".drop-down-content").hide();
  });
});
