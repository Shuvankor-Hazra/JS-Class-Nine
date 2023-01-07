// (1) getElementsById Method
const id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.innerHTML);
id1.innerHTML = "JavaScript Text";
document.getElementById("id1").innerHTML = "New JavaSript Text";

// (2) getElementsByTagName Method
const tag1 = document.getElementsByTagName("h1")[1];
console.log(tag1.innerHTML);
tag1.innerText = "JavaScript Header Two";

// (3) getElementsByClassName Method
const class1 = document.getElementsByClassName("class1")[0];
console.log(class1.innerText);
class1.innerText = "JavaScript Text!";

// (4) DOM Element Style
const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.style.color = "green";
id1.style.backgroundColor = "yellow";
id1.style.fontSize = "60px";

// (5) DOM Element Attributes
const id1 = document.getElementById("id1");
console.log(id1.innerText);
console.log(id1.attributes);
console.log(id1.attributes.length);
console.log(id1.attributes.class);
console.log(id1.attributes.id);

// (6) DOM Element getAttribute
const id1 = document.getElementById("id1");
console.log(id1.innerText);
console.log(id1.getAttribute("class"));
console.log(id1.getAttribute("id"));

// (7) DOM Element removeAttribute
const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.removeAttribute("class");

// (8) DOM Element setAttribute
const id2 = document.getElementById("id2");
console.log(id2.innerText);
id2.setAttribute("class", "class2");

Task;
