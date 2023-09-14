const spans = document.getElementsByTagName("span");
console.log(spans);

const cls = document.getElementsByClassName("c1");
console.log(cls);

const btn1 = document.getElementById("b1");
console.log(btn1);
const btn2 = document.getElementById("b2");
console.log(btn2);
//동일한 id여도 1개만 선택

const btn3 = document.querySelector("#b3");
console.log(btn3);
const btn4 = document.querySelector(".b4");
console.log(btn4);
//동일한 id나 class여도 1개만 선택

const btn5 = document.querySelectorAll("#b5");
console.log(btn5);
const btn6 = document.querySelectorAll(".b6");
console.log(btn6);
//동일한 id나 class를 모두 선택