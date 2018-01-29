//Exercise 6
function viewPort(){
    console.clear();
    console.log("Viewport Width: " + document.documentElement.clientWidth);
    console.log("Viewport Height: " + document.documentElement.clientHeight);
}
window.addEventListener('resize', viewPort);

//Exercise 1 - Changes the paragraph
let paragraph = document.getElementsByTagName("p")[0];
let btn = document.getElementById("btn");
btn.addEventListener('click', textChange);
function textChange(){
    paragraph.style.fontSize = '50px';
    paragraph.style.color = 'green';
}

//Exercise 2 - Log input data..

let name = document.getElementById("name");
let sex = document.getElementById("sex");
let submitBtn = document.getElementById("submitBtn");
let listener = function storeModal() {
    console.log(name.value, sex.value);
}
    submitBtn.addEventListener('click', listener);


//Exercise 3 - link a log
let link = document.getElementById('linkBand');
let checkBtn = document.getElementById('btnLink');
let listener1 = function checkLink() {
    console.log(link.getAttribute('href'), link.getAttribute('id'), link.getAttribute('hreflang'), link.getAttribute('target'));

}

checkBtn.addEventListener('click', listener1);

//Exercise 5 - Table (Add or remove rows.)
let btnAddRow = document.getElementById("addRow");
let table = document.getElementById("table");
let listener2 = function addRow() {
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "Christoffer";
    cell2.innerHTML = "Nygren";

}
btnAddRow.addEventListener('click', listener2);

let btnRmvRow = document.getElementById("removeRow");
let listener3 = function rmvRow() {
    document.getElementById("table").deleteRow(0);
}
btnRmvRow.addEventListener('click', listener3);

