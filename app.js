// Calculator section start
var isChecked;
function getBtnValue(val){
    if(isChecked == true){
        clearResult();
    }
    var inp = document.getElementById("inp");
    inp.value += val;
    isChecked = false;
}
function clearResult(){
    
    var inp = document.getElementById("inp");
    inp.value = "";
}
function getResult(){
    isChecked = true;
    var inp = document.getElementById("inp");
    inp.value = eval(inp.value)
    
}
// Calculator section end

// Image slider section star
var slides = document.getElementById("slider-img");
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg'];
var i = 0;

function goprev() {
    if(i <= 0) i = images.length; i--;
    return setImg();
}
function gonext() {
    if(i >= images.length -1) i = -1;
    i++;
    return setImg();
}
function setImg() {
    return slides.setAttribute('src', 'images/' +images[i]);

}
// Image slider section end


