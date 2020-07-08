$(document).ready(function() {

  // hover mouse
  $("#top-nav .drop-down").mouseenter(function(){
    $(".drop-down-content").hide();
    $(this).children(".drop-down-content").toggle();
  });
  $("#top-nav .drop-down").mouseleave(function(){
    $(".drop-down-content").hide();
  });

  // apertura hamburger
  $(".hamburger-dropdown-parent").click(function(){
    $(".hamburger-dropdown").slideDown();
  });

  // apertura liste
  $(".hamburger-dropdown .item h3").click(function(){
    $(".hamburger-dropdown .item ul").slideUp()
    if ($(this).hasClass("open")) {
      $(".hamburger-dropdown .item ul").slideUp()
      $(".hamburger-dropdown .item h3").removeClass("open")
    } else {
      $(this).next().slideToggle();
      $(this).addClass("open")
    }

  });

  // chiusura hamburger menu
  $(".hamburger-dropdown .close").click(function(){
    $(".hamburger-dropdown").slideUp();
  });

  // css lista
  $(".hamburger-dropdown .item ul li").click(function () {
    $(".hamburger-dropdown .item ul li").css("text-decoration","none");
    $(this).css("text-decoration","underline","color","black");
  });

});
