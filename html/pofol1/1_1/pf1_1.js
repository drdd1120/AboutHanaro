var Nav = (function () {
  var nav = $(".nav"),
    section = $(".section"),
    link = nav.find(".nav__link"),
    navH = nav.innerHeight(),
    isOpen = true,
    hasT = false;

  var toggleNav = function () {
    nav.toggleClass("nav--active");
    shiftPage();
  };

  var switchPage = function (e) {
    var self = $(this);
    var i = self.parents(".nav__item").index();
    var s = section.eq(i);
    var a = $("section.section--active");
    var t = $(e.target);

    if (!hasT) {
      if (i == a.index()) {
        return false;
      }
      a.addClass("section--hidden").removeClass("section--active");

      s.addClass("section--active");

      hasT = true;

      a.on("transitionend webkitTransitionend", function () {
        $(this).removeClass("section--hidden");
        hasT = false;
        a.off("transitionend webkitTransitionend");
      });
    }

    return false;
  };

  var keyNav = function (e) {
    var a = $("section.section--active");
    var aNext = a.next();
    var aPrev = a.prev();
    var i = a.index();

    if (!hasT) {
      if (e.keyCode === 37) {
        if (aPrev.length === 0) {
          aPrev = section.last();
        }

        hasT = true;

        aPrev.addClass("section--active");
        a.addClass("section--hidden").removeClass("section--active");

        a.on("transitionend webkitTransitionend", function () {
          a.removeClass("section--hidden");
          hasT = false;
          a.off("transitionend webkitTransitionend");
        });
      } else if (e.keyCode === 39) {
        if (aNext.length === 0) {
          aNext = section.eq(0);
        }

        aNext.addClass("section--active");
        a.addClass("section--hidden").removeClass("section--active");

        hasT = true;

        aNext.on("transitionend webkitTransitionend", function () {
          a.removeClass("section--hidden");
          hasT = false;
          aNext.off("transitionend webkitTransitionend");
        });
      } else {
        return;
      }
    }
  };

  var bindActions = function () {
    link.on("click", switchPage);
    $(document).on("ready", function () {
      page.css({
        transform: "translateY(" + navH + "px)",
        "-webkit-transform": "translateY(" + navH + "px)",
      });
    });
    $("body").on("keydown", keyNav);
  };

  var init = function () {
    bindActions();
  };

  return {
    init: init,
  };
})();

Nav.init();
