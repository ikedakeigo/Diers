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
