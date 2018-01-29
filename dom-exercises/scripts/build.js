let header = document.createElement("h1");
let textHeader = document.createTextNode("A header!!!");
header.appendChild(textHeader);
let pg = document.createElement("p");
let text = document.createTextNode("This is my paragraph that sucks!!");
pg.appendChild(text);
let img = document.createElement("IMG");
img.setAttribute("src", "pic1.png");
let div = document.createElement("div");
div.appendChild(header);
div.appendChild(pg);
div.appendChild(img);

let existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(div);

/*let img = document.createElement("IMG");
img.setAttribute("src", "pic1.png");

let eE = document.getElementsByTagName("body")[0];
eE.appendChild(img);
*/