/*--------------------BACK-TO-TOP(START)--------------------*/
//This code is used in all pages.
//This code enables the user to use the back-to-top feature when user scroll by 20 pixels from the newly loaded web page.
//The source of this code is https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*--------------------BACK-TO-TOP(END)----------------------*/