function resize_text(){
    var width = window.innerWidth;
    var new_size = width*0.2;
    document.querySelector("hero-text").style.fontSize = new_size+'px';
}

window.addEventListener('resize', resize_text);
window.addEventListener('load', resize_text);