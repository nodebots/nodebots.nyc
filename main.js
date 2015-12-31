if (window.pageYOffset !== undefined) {
  var johnny = document.getElementById('johnny');
  var totalScroll = document.body.scrollHeight - window.innerHeight;

  johnny.style.transform = "translateX(100%)";

  var rollJohnny = function () {
    var top = window.pageYOffset;
    var X = 100 - ((top / totalScroll) * 100);

    johnny.style.transform = "translateX(" + X + "%)";
  };

  window.addEventListener('scroll', rollJohnny);
}
