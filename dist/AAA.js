let aaText 

const aaTextDOMbox = document.querySelector(".aaText")
const normalTextDOMbox = document.querySelector(".normalText")
//IPAD ERROR
const updateNormalText = (e) => {
    if(translateTo == "normal") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "dist/translateToNormal.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 || this.status === 200){ 
                normalTextDOMbox.value = this.responseText; // echo from php
                updatePlaceholders()
            }       
        };
        xmlhttp.send(`text=${aaTextDOMbox.value}` );
        
    }
}
    


const updateAaText = (e) => {
    
    if(translateTo == "Aa") {
        var xmlhttpAa = new XMLHttpRequest();
        xmlhttpAa.open("POST", "dist/translateToAa.php", true);
        xmlhttpAa.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttpAa.onreadystatechange = function() {
            if (this.readyState === 4 || this.status === 200){ 
                aaTextDOMbox.value = this.responseText; // echo from php
                updatePlaceholders()
            }       
        };
        xmlhttpAa.send(`text=${normalTextDOMbox.value}` );
        
        }
    }
//ERROR END

const updatePlaceholders = () => {
    //AA
    setTimeout(() => {
        if(!aaTextDOMbox.value) {
            document.querySelector("#placeholderAa").classList.remove("hidden")
        } else if (aaTextDOMbox.value != "" ) {
            document.querySelector("#placeholderAa").classList.add("hidden")
        }
        //NORMAL
        if(!normalTextDOMbox.value) {
            document.querySelector("#placeholderNormal").classList.remove("hidden")
        } else if (normalTextDOMbox.value !== "") {
            document.querySelector("#placeholderNormal").classList.add("hidden")
        }    
    }, 5);
}

let translateTo

const  translateToNormal = () => {
    translateTo = "normal"
}

const  translateToAa = () => {
    translateTo = "Aa"
}

aaTextDOMbox.addEventListener("touchstart", translateToNormal)
normalTextDOMbox.addEventListener("touchstart", translateToAa)

aaTextDOMbox.addEventListener("click", translateToNormal)
normalTextDOMbox.addEventListener("click", translateToAa)

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector(".button3")

button1.addEventListener("touchstart", () => {
    navigator.vibrate(10)
})
button2.addEventListener("touchstart", () => {
    navigator.vibrate(10)
})
button3.addEventListener("touchstart", () => {
    navigator.vibrate(50)
})



//Desktop
button1.addEventListener("click", () => {
const promise = new Promise((resolve, reject)=>{
 if(window.navigator.clipboard.writeText(normalTextDOMbox.value)) {
     resolve()
     button1.children[0].innerHTML="Text copied";
     setTimeout(() => {
         button1.children[0].innerHTML="COPY";
     }, 5000);
 } else {
     reject()
 }
})

promise.catch((message)=>{
    alert("Device does not support copying to clipboard. Big sad :C. Will try to make a workaround for it. In the meantime you will have to copy manually")
})
})


button2.addEventListener("click", () => {
    const promise2 = new Promise((resolve, reject)=>{
     if(window.navigator.clipboard.writeText(aaTextDOMbox.value)) {
         resolve()
         button2.children[0].innerHTML="Text copied";
         setTimeout(() => {
             button2.children[0].innerHTML="COPY";
         }, 5000);
     } else {
         reject()
     }
    })
    
    promise2.catch((message)=>{
        alert("Device does not support copying to clipboard. Big sad :C. Will try to make a workaround for it. In the meantime you will have to copy manually like the caveman you are.")
    })
    })

button3.addEventListener("click", () => {
    normalTextDOMbox.value = ""
    aaTextDOMbox.value = ""
    button3.children[0].innerHTML="Text cleared"
    updatePlaceholders()
    setTimeout(() => {
        button3.children[0].innerHTML="CLEAR ALL"
    }, 5000);
})

let info = false
const infoButton = document.querySelector("#infobutton")
const infoScreen = document.querySelector("#infoscreen")

infoButton.addEventListener("click", () => {
if (info == false) {
    info = true;
    infoscreen.classList.remove("goout");
    infoscreen.classList.add("comein");
} else {
    info = false; 
    infoscreen.classList.remove("comein");
    infoscreen.classList.add("goout");
}
    
})

setInterval(() => {
    updateAaText();
    updateNormalText();
}, 1000);

window.addEventListener("keydown", updatePlaceholders)

const buttons = document.querySelectorAll('.button')
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        e.target.classList.add('pressed')
        setTimeout(() => {
            e.target.classList.remove('pressed')
        }, 150);
    })
}) 
    

