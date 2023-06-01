// スライダーの設定と動作
var imageUrls = ["/assets/img/mv_02.png", "/assets/img/mv_03.png", "/assets/img/mv_04.png","/assets/img/mv_05.png"];
var slider = $(".slick-slider");
imageUrls.forEach(function (url) {
  slider.append('<div class="slick-slide mv_slideHeght" style="background-image: url(' + url + ')"></div>');
});
slider.slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
});
