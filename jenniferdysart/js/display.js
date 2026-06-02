// Show class
const popupLink = document.querySelectorAll("li.item-link");

if (popupLink != null) {
    popupLink.forEach(element => {
        let showLink = element.querySelector("a");
        let visBox = element.querySelector("div");
        let closeIcon = element.querySelector(".close-icon");

        showLink.addEventListener("click", function () {
            visBox.setAttribute("class", "show");
        });

        closeIcon.addEventListener("click", function () {
            visBox.setAttribute("class", "hide");
        });
    });
};

// audio play

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

/* Add "https://api.ipify.org?format=json" statement
           this will communicate with the ipify servers in
           order to retrieve the IP address $.getJSON will
           load JSON-encoded data from the server using a
           GET HTTP request */

$.getJSON("https://api.ipify.org?format=json", function (data) {

    // Setting text of element P with id ipDisplay
    $("#ipDisplay").html(data.ip);
})

// background toggle
function changeBackgroundImage(bgImage) {
    document.body.style.backgroundImage = "url(" + bgImage + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }