var paragraph = document.getElementsByTagName("p")[0];
var btn = document.getElementById("btn");
btn.addEventListener('click', btnChange);
function btnChange(){
    paragraph.style.fontSize = '50px';
    paragraph.style.color = 'green';
}