let newVariable = document.querySelector('#numberInput');

newVariable.addEventListener("input", function(){
    if (newVariable.value > 10 || newVariable.value < -10){
        alert("The number should be between -10 and 10");
    }
});

const fruit = {
    name: "Black Plum",
    color: "Dark-violet",
    taste:"Sweet cum tart",
    
};

console.log(fruit.nameame);
console.log(fruit.color);
console.log(fruit.taste);

document.querySelector("#fruitName").innerHTML= `Name:${fruit.name}`;
document.querySelector("#fruitColor").innerHTML= `Color:${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML= `Taste:${fruit.taste}`;



