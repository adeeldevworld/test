// AOS init
AOS.init({
  once: true,
  startEvent: "load",
  duration: 1000,
});
// BG Color & Image
jQuery("section,div,footer,header,h1,h2,span,h3").each(function () {
  var bg_color = jQuery(this).attr("data-color");
  if (bg_color) {
    jQuery(this).css("background-color", "" + bg_color + "");
  }
  var txt_color = jQuery(this).attr("data-txt-color");
  if (txt_color) {
    jQuery(this).css("color", "" + txt_color + "");
  }
  var l_height = jQuery(this).attr("data-line-height");
  if (l_height) {
    jQuery(this).css("line-height", "" + l_height + "");
  }
  var url = jQuery(this).attr("data-image");
  if (url) {
    jQuery(this).css("background-image", "url(" + url + ")");
  }
});
jQuery(document).ready(function ($) {
  $(".toggleAcc").click(function (e) {
    e.preventDefault();
    let $this = $(this);
    if ($this.parent().hasClass("_activeAcr")) {
      $this.parent().removeClass("_activeAcr");
    } else {
      $("._acrItem").removeClass("_activeAcr");
      $(this).parent("._acrItem").addClass("_activeAcr");
    }
  });
  $(".toggleAcc").click(function (e) {
    e.preventDefault();
    let $this = $(this);

    if ($this.next().hasClass("showContent")) {
      $this.next().removeClass("showContent");
      $this.next().slideUp(350);
    } else {
      $this
        .parent()
        .parent()
        .find("li .innerContent")
        .removeClass("showContent");
      $this.parent().parent().find("li .innerContent").slideUp(350);
      $this.next().toggleClass("showContent");
      $this.next().slideToggle(350);
    }
  });
  $(".flex-related").slick({
    slidesToShow: 3,
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".flexarticle").slick({
    slidesToShow: 3,
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  jQuery("body ._close").on("click", function (e) {
    e.preventDefault();
    var target = jQuery(this).attr("href");
    jQuery(target).fadeOut();
  });
  jQuery("body .open-popup").on("click", function (e) {
    e.preventDefault();
    var target = jQuery(this).attr("href");
    jQuery(target).fadeIn();
    // jQuery('#projects-slider').carousel(index);
  });
});
document.querySelector(".toggle").addEventListener("click", function () {
  this.classList.toggle("activate");
});
jQuery("document").ready(function ($) {
  $(".toggle").click(function (e) {
    e.preventDefault();
    $(".primary_menu").toggleClass("show");
  });
});
