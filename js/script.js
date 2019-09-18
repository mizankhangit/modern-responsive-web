$(document).ready(function() {
  $(".slider").ripples({
    dropRadius: 20,
    perturbance: 0.01,
    interactive: true
  });

  $(".text").typed({
    strings: [
      "I love <strong class='primary'>coding.</strong> ",
      "and to share"
    ],
    loop: true
  });

  $(window).scroll(function() {
    let top = $(window).scrollTop();
    if (top > 60) {
      $(".navbar").addClass("secondary");
    } else {
      $(".navbar").removeClass("secondary");
    }
  });

  $(".img-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: { enabled: true }
    // other options
  });

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      768: { items: 3 }
    }
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  $("a.smooth").smoothScroll();
});
