$(document).ready(function() {

  $("#top-nav .drop-down").mouseenter(function(){
    $(".drop-down-content").hide();
    $(this).children(".drop-down-content").toggle();
  });
  $("#top-nav .drop-down").mouseleave(function(){
    $(".drop-down-content").hide();
  });

  $(".hamburger-dropdown-parent").click(function(){
    $(".hamburger-dropdown").show();
  });

  $(".hamburger-dropdown .item h3").click(function(){
    $(".hamburger-dropdown .item ul").slideUp()
    $(this).next().slideToggle();
  });

  $(".hamburger-dropdown .close").click(function(){
    $(".hamburger-dropdown").slideUp();
  });

  $(".hamburger-dropdown .item ul li").click(function () {
    $(".hamburger-dropdown .item ul li").css("text-decoration","none")
    $(this).css("text-decoration","underline","color","black");
  });
});
