/* ------------------ Expandable Navigation Sidebar  -----------------*/
$(document).ready(function () {
  $(".toggle-sidebar-btn").click(function () {
    $('body').toggleClass("expandable-sidebar");
  });
});
$(".light-mode .toggle-sidebar-btn").click(function () {
  var src = $('.sidebar-logo').attr('src');
  var newsrc = (src == '../assets/images/icon/favicon.svg') ? '../assets/images/icon/logo-b.svg' : '../assets/images/icon/favicon.svg';
  $('.sidebar-logo').attr('src', newsrc);
});

$(document).ready(function () {
  $(document).on('click', function () {
    $(".dark-mode .toggle-sidebar-btn").click(function () {
      var darksrc = $('.sidebar-logo').attr('src');
      var darksrcnew = (darksrc == '../assets/images/icon/favicon.svg') ? '../assets/images/icon/logo.svg' : '../assets/images/icon/favicon.svg';
      $('.sidebar-logo').attr('src', darksrcnew);
    });
  });
});
/* ------------------ Theme Option Filter Right Sidebar -----------------*/
var themeoptionbar = $('.theme-option-bar');
var close = $('.close-option');
var overlays = $('.filter-backdrop');
themeoptionbar.click(function () {
  filter_show();
});
close.click(function () {
  filter_hide();
});

function filter_show() {
  $("#theme-option").addClass('theme-option-open');
  overlays.show(20);
}

function filter_hide() {
  $("#theme-option").removeClass('theme-option-open');
  overlays.hide();
}
/* ------------------ Color Schema Select  -----------------*/
function ColorFirst() {
  var footer = document.getElementById("palette");
  var currentfooter = footer.className;
  footer.className = currentfooter == "bit" ? "prime" : "primary-palette";
}
function ColorSecond() {
  var footer = document.getElementById("palette");
  var currentfooter = footer.className;
  footer.className = currentfooter == "krav" ? "secon" : "secondary-palette";
}
function ColorThird() {
  var footer = document.getElementById("palette");
  var currentfooter = footer.className;
  footer.className = currentfooter == "dupli" ? "meeta" : "meta-palette";
}
function ColorFour() {
  var footer = document.getElementById("palette");
  var currentfooter = footer.className;
  footer.className = currentfooter == "categ" ? "conpal" : "content-palette";
}

$(".color-plate .btn").click(function () {
  $(".color-plate .btn").removeClass("active");
  $(this).addClass("active");
});


// apply saved theme before page fully loads (no flicker)
(function () {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.getElementById("body").classList.add("dark-mode");
  } else {
    document.getElementById("body").classList.add("light-mode");
  }
})();

function toggleLight() {
  var body = document.getElementById("body");
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  localStorage.setItem("theme", "light");
  $(".mode-change .option-btn").removeClass("active");
  $(".light-btn").addClass("active");
}

function toggleDark() {
  var body = document.getElementById("body");
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  $(".mode-change .option-btn").removeClass("active");
  $(".dark-btn").addClass("active");
}

// set active button after DOM ready
$(document).ready(function () {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    $(".dark-btn").addClass("active");
  } else {
    $(".light-btn").addClass("active");
  }
});

/* ------------------ Header Position Type -----------------*/
function PositionStatic() {
  var body = document.getElementById("header");
  var currentClass = body.className;
  body.className = currentClass == "header-fixed-position" ? "header-static-position" : "header-static-position";
}
function PositionFixed() {
  var body = document.getElementById("header");
  var currentClass = body.className;
  body.className = currentClass == "header-static-position" ? "header-fixed-position" : "header-fixed-position";
}
$(".header-position .option-btn").click(function () {
  $(".header-position .option-btn").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  $(document).on('click', function () {
    if ($('#header').hasClass('header-fixed-position')) {
      $('#main').addClass('header-has-fixed');
    }
    else {
      $('#main').removeClass('header-has-fixed');
    }
  });
});
/* ------------------ Footer Position Type -----------------*/
function FooterPositionStatic() {
  var footer = document.getElementById("footer");
  var currentfooter = footer.className;
  footer.className = currentfooter == "foter-fixed-position" ? "foter-static-position" : "foter-static-position";
}
function FooterPositionFixed() {
  var footer = document.getElementById("footer");
  var currentfooter = footer.className;
  footer.className = currentfooter == "footer-static-position" ? "footer-fixed-position" : "footer-fixed-position";
}
$(".footer-position .option-btn").click(function () {
  $(".footer-position .option-btn").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  $(document).on('click', function () {
    if ($('#footer').hasClass('footer-fixed-position')) {
      $('#main').addClass('footer-has-fixed');
    }
    else {
      $('#main').removeClass('footer-has-fixed');
    }
  });
});
/* ------------------ Frame Layout Type -----------------*/
function SpaceLayout() {
  var footer = document.getElementById("main");
  var currentfooter = footer.className;
  footer.className = currentfooter == "ninjas" ? "asianset" : "spacewidthlayout";
}
function CenteredLayout() {
  var footer = document.getElementById("main");
  var currentfooter = footer.className;
  footer.className = currentfooter == "smalltest" ? "bigtest" : "centeredwidthlayout";
}
function FullwidthLayout() {
  var footer = document.getElementById("main");
  var currentfooter = footer.className;
  footer.className = currentfooter == "styleselect" ? "selectlast" : "fullwidthlayout";
}
$(".layout-frame .option-btn").click(function () {
  $(".layout-frame .option-btn").removeClass("active");
  $(this).addClass("active");
});
/* ------------------ Custom Dropdown -----------------*/
$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})

// Old Jquery
/* ------------------ Equal height -----------------*/
$(document).ready(function () {
  $('.order-card').each(function () {
    var highestBox = 0;
    $('.info-card .viewmore a', this).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });
    $('.info-card .viewmore a', this).height(highestBox);
  });
});

$(document).ready(function () {
  $('.dashboard-order').each(function () {
    var highestBox = 0;
    $('.box-card', this).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });
    $('.box-card', this).height(highestBox);
  });
});

/* ------------------ Sidebar Active Class -----------------*/
$(document).ready(function () {
  $('.sidebar-nav li').find('a[href="' + location.pathname + '"]')
    .addClass('active');
});
$(function () {
  $('.sidebar-nav li a').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
});

/* ------------------ Login page Password Show/Hide -----------------*/

$(document).ready(function () {
  $(".eye-icon").click(function () {
    $(this).toggleClass("eye-show eye-hide");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".eye-icon").click(function () {
    var srcs = $(this).attr('src');
    var newsrcs = (srcs == '../assets/images/icon/show-password.svg') ? '../assets/images/icon/hide-password.svg' : '../assets/images/icon/show-password.svg';
    $(this).attr('src', newsrcs);
  });
});

/* ------------------ Welcome Banner Index.html -----------------*/
$('.wel_close').on('click', function () {
    $('.welcome_banner').slideUp(400);
});