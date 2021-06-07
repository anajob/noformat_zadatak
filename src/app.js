import "./scss/style.scss";

AOS.init();

$(document).ready(function () {
  const targetOffsetTop = $("footer").offset().top;

  const $applyBtn = $(".floating-apply-btn");

  const applyBtnOffsetTop = $applyBtn.offset().top;
  const applyBtnHeight = $applyBtn.height();

  const $window = $(window);
  $window.on("scroll", function () {
    const scrolledFromTop = $window.scrollTop();

    if (
      scrolledFromTop + applyBtnOffsetTop + applyBtnHeight + 40 >
      targetOffsetTop
    ) {
      $applyBtn.addClass("floating-apply-btn--hidden");
    } else {
      $applyBtn.removeClass("floating-apply-btn--hidden");
    }
  });
});

$(".header__info-bar__close-btn").on("click", function () {
  $(".header__info-bar").addClass("remove");
});
