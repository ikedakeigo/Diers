// メニューボタンとナビゲーションのトグル設定
document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.querySelector('#menuButton');
  var navSP = document.querySelector('#navSP');

  menuButton.addEventListener('click', function() {
    navSP.classList.toggle('active');
    menuButton.classList.toggle('active');
    document.getElementById("mask").classList.toggle("active");
  });
});


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

// ページトップへ戻るボタンの設定
$(function() {
  var topBtn = $('#pageTop');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
}
);


// スクロールアニメーション
$('.inviewfadeInUp').on('inview', function (event, isInView) {
  if (isInView) {
    $(this).stop().addClass('fadeInUp');
  } else {
    //$(this).stop().removeClass('fadeInUp');
    $(this).stop().removeClass('');
  }
});
