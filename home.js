function hover_card(me) {
    me.style.transform = "scale(1.05)";
    me.style.boxShadow  = "0 .5rem 1rem rgb(109, 196, 224)";
}

function out_card(me) {
    me.style.transform = "scale(1)";
    me.style.boxShadow  = "0 .5rem 1rem rgba(0,0,0,.15)";
}

let popup = document.getElementById("xPopup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}