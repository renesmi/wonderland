let target = document.querySelector("#dynamic");

let stringArr=["Learn to HTML","Learn to CSS","Learn to Javascpript"];
let selectString= stringArr[math.floor(Math.random()*stringArr.length)];
let selectStringArr=selectString.split("");

console.log(selectString);
console.log(selectStringArr);



//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);
