const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
// ul.firstElementChild.style.background = "gold";
for (let element of ul.children) {
  element.style.background = "gold";
}
document.body.children[3].lastElementChild.style.background = "coral";

document.body.children[3].firstElementChild.style.background = "aquamarine";

document.body.children[3].children[1].style.background = "lightblue";
