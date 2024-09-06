window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementsByName("header").style.height = "3rem";
  } else {
    document.getElementsByName("header").style.height = "7rem";
  }
}
