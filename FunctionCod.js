"use strict";

let num = 90;

function showFirstMessege (text){
    console.log(text);
     let num = 10;
}

showFirstMessege("okey my dear");
console.log(num);

// function calc(a, b, c){//функция Declaration
//     return(a+b*c);
// }
// console.log(calc(3, 4, 5));
// console.log(calc(123, 3, 0));
// console.log(calc(90, 0, 34));

function ret(){
    let num = 90;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { // функция EXPRESSING
    console.log("Hello");


};

logger();

const calc = (a, b)=>a+b; //Если нормальная стрелочная функция

const calc1 = (a, b)=>{ //Если стрелочная функция с большим количеством всего
    console.log('1');
    return a + b;
};
