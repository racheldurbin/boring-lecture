$(document).ready(function() {
  $("button#darkMode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });

  $("button#lightMode").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });
});