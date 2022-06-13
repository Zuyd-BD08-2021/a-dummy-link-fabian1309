// put your code here
let li = document.querySelector("li");
li.childNodes[0].textContent = "Read more about ";

let a = li.querySelector("a");
a.setAttribute("href", "https://theitcrowd.fandom.com/wiki/Jen_Barber");
a.setAttribute("title", "Klik hier om meer te lezen")