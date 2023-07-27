//needs to be added bc. script loads before item "topButton" exists...
document.addEventListener("DOMContentLoaded", function () {
    //...otherwise cannot geht element "topButton" here
    let mybutton = document.getElementById("topButton");

    // if scrolled...
    window.onscroll = function () {
        scrollFunction();
    };
    //... 20px or more, button is shown, otherwise not
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    //go to 0px
    function toTopFunction() {
        document.body.scrollTop = 0; // safari
        document.documentElement.scrollTop = 0; // chrome, ff, IE, opera
    }

    //if clicked, do toTopFunction
    mybutton.addEventListener("click", toTopFunction);
});