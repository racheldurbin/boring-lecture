$(document).ready(function() {
  $("button#darkMode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });

  $("button#lightMode").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });

  $("p.noBorder").click(function() {
    $(".noBorder").toggle();
    $(".showBorder").toggle();
  });

  $("p.showBorder").click(function() {
    $(".noBorder").toggle();
    $(".showBorder").toggle();
  });
});
