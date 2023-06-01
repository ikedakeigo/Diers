// スライダーの設定と動作
var imageUrls = ["/assets/img/mv_02.png", "/assets/img/mv_03.png", "/assets/img/mv_04.png","/assets/img/mv_05.png"];
var slider = $(".slick-slider");
imageUrls.forEach(function (url) {
  slider.append('<div class="slick-slide mv_slideHeght" style="background-image: url(' + url + ')"></div>');
});
slider.slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "ease-in-out",
});

// slickスライドの各スライドの変更時にズームクラスを削除してリセットする
slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slick-slide').removeClass('zoom');
});

// スライドが切り替わった後にズームクラスを追加する
slider.on('afterChange', function(event, slick, currentSlide){
  $('.slick-slide').eq(currentSlide).addClass('zoom');
});



let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

let observer = new IntersectionObserver(onIntersect, options);
let targets = document.querySelectorAll('.slick-slide');
targets.forEach(target => observer.observe(target));

function onIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('zoom');
    } else {
      entry.target.classList.remove('zoom');
    }
  });
}
