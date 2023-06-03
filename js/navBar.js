


var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.onload = function () {
  $(document).ready(function () {
    $(".navbar__toggleBtn").click(function () {
      $(".navbar__menu").toggleClass("active");
    });
  });
};
document.head.appendChild(script);

