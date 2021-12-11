var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click", function() {
    toggle = !toggle;
    if (toggle){
        document.body.querySelector(".dropmenu").style.right="0";
    }else{
        document.body.querySelector(".dropmenu").style.right="-150px";
    }
} )