//js script

var toggler = document.querySelector(".menu-toggle");
var navigation = document.querySelector("navigation");

toggler.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-bars")
  e.target.classList.toggle("fa-times")
  navigation.classList.toggle("menu-close")
});

jQuery(document).ready(function($) {
  // Hide all panels
  var panels = $('.accordion .panel').hide();

  // Have first panel show
  panels.first().show();

  $('.accordion > button > div').click(function() {
    var $this = $(this);
    let visible = false;

    if ($this.parent().next().is(":visible"))
      visible = true;

    // Slide up all other panels
    panels.slideUp();

    // Set all to closed book
     $('.accordion button div').find('i').removeClass('fas fa-book-open');
     $('.accordion button div').find('i').addClass('fas fa-book')

     // set page being opened to open book
    if (!visible) {
      $this.parent().next().slideDown();
      $(this).find('i').addClass("fas fa-book-open");
    }
    return false;
  });

});
