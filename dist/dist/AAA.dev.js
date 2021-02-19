"use strict";

var aaText;
var aaTextDOMbox = document.querySelector(".aaText");
var normalTextDOMbox = document.querySelector(".normalText"); //IPAD ERROR

var updateNormalText = function updateNormalText(e) {
  if (translateTo == "normal") {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "dist/translateToNormal.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 || this.status === 200) {
        normalTextDOMbox.value = this.responseText; // echo from php

        updatePlaceholders();
      }
    };

    xmlhttp.send("text=".concat(aaTextDOMbox.value));
  }
};

var updateAaText = function updateAaText(e) {
  if (translateTo == "Aa") {
    var xmlhttpAa = new XMLHttpRequest();
    xmlhttpAa.open("POST", "dist/translateToAa.php", true);
    xmlhttpAa.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlhttpAa.onreadystatechange = function () {
      if (this.readyState === 4 || this.status === 200) {
        aaTextDOMbox.value = this.responseText; // echo from php

        updatePlaceholders();
      }
    };

    xmlhttpAa.send("text=".concat(normalTextDOMbox.value));
  }
}; //ERROR END


var updatePlaceholders = function updatePlaceholders() {
  //AA
  setTimeout(function () {
    if (!aaTextDOMbox.value) {
      document.querySelector("#placeholderAa").classList.remove("hidden");
    } else if (aaTextDOMbox.value != "") {
      document.querySelector("#placeholderAa").classList.add("hidden");
    } //NORMAL


    if (!normalTextDOMbox.value) {
      document.querySelector("#placeholderNormal").classList.remove("hidden");
    } else if (normalTextDOMbox.value !== "") {
      document.querySelector("#placeholderNormal").classList.add("hidden");
    }
  }, 5);
};

var translateTo;

var translateToNormal = function translateToNormal() {
  translateTo = "normal";
};

var translateToAa = function translateToAa() {
  translateTo = "Aa";
};

aaTextDOMbox.addEventListener("touchstart", translateToNormal);
normalTextDOMbox.addEventListener("touchstart", translateToAa);
aaTextDOMbox.addEventListener("click", translateToNormal);
normalTextDOMbox.addEventListener("click", translateToAa);
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector(".button3");
button1.addEventListener("touchstart", function () {
  navigator.vibrate(10);
});
button2.addEventListener("touchstart", function () {
  navigator.vibrate(10);
});
button3.addEventListener("touchstart", function () {
  navigator.vibrate(50);
}); //Desktop

button1.addEventListener("click", function () {
  var promise = new Promise(function (resolve, reject) {
    if (window.navigator.clipboard.writeText(normalTextDOMbox.value)) {
      resolve();
      button1.children[0].innerHTML = "Text copied";
      setTimeout(function () {
        button1.children[0].innerHTML = "COPY";
      }, 5000);
    } else {
      reject();
    }
  });
  promise["catch"](function (message) {
    alert("Device does not support copying to clipboard. Big sad :C. Will try to make a workaround for it. In the meantime you will have to copy manually");
  });
});
button2.addEventListener("click", function () {
  var promise2 = new Promise(function (resolve, reject) {
    if (window.navigator.clipboard.writeText(aaTextDOMbox.value)) {
      resolve();
      button2.children[0].innerHTML = "Text copied";
      setTimeout(function () {
        button2.children[0].innerHTML = "COPY";
      }, 5000);
    } else {
      reject();
    }
  });
  promise2["catch"](function (message) {
    alert("Device does not support copying to clipboard. Big sad :C. Will try to make a workaround for it. In the meantime you will have to copy manually like the caveman you are.");
  });
});
button3.addEventListener("click", function () {
  normalTextDOMbox.value = "";
  aaTextDOMbox.value = "";
  button3.children[0].innerHTML = "Text cleared";
  updatePlaceholders();
  setTimeout(function () {
    button3.children[0].innerHTML = "CLEAR ALL";
  }, 5000);
});
var info = false;
var infoButton = document.querySelector("#infobutton");
var infoScreen = document.querySelector("#infoscreen");
infoButton.addEventListener("click", function () {
  if (info == false) {
    info = true;
    infoscreen.classList.remove("goout");
    infoscreen.classList.add("comein");
  } else {
    info = false;
    infoscreen.classList.remove("comein");
    infoscreen.classList.add("goout");
  }
});
setInterval(function () {
  updateAaText();
  updateNormalText();
}, 1000);
window.addEventListener("keydown", updatePlaceholders);
var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.target.classList.add('pressed');
    setTimeout(function () {
      e.target.classList.remove('pressed');
    }, 150);
  });
});