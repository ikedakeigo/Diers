document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.querySelector('#menuButton');
  var navSP = document.querySelector('#navSP');

  menuButton.addEventListener('click', function() {
    navSP.classList.toggle('active');
    menuButton.classList.toggle('active');
    document.getElementById("mask").classList.toggle("active");
  });
});
