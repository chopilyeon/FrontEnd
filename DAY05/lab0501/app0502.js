// var hoisting test(var 호이스팅) 
//어디에 선언했던지 간에 최상위로 끌어올려서 실행한다. 
//영역도 {}안에서만 사용이 되는데. 블록도 무시한다.
console.log(testVar); // undefined  가 됨 

testVar=2;









//var로 선언되어 있지 않아도
//변수명 = 값 이렇게 할당이 되면
// var testVar=2;로 할당된 것처럼 동작한다

var testVar;  
console.log(testVar);

/*
var testVar2;
testVar2=2;
console.log(testVar2);
*/

//오류 발생
//아래서 선언이 되어있지 않고,
//호출할 경우 오류가 발생함 
console.log(testVar3);
testVar3 = 10;



//이러면 에러는 안나고 
//undefined가 나게 됨
//끌어는 올렸으나 값을 받아올 수 없으므로. 
//선언이 안되어 있으면 못알아 먹음
//var로 선언을 해줘야 함. 
//셋팅이 되기 떄문에 undefined 
console.log(testVar4);
testVar4 = 10;
var testVar4;


{
    let age = 20;
    console.log("inner: "+age);
}

console.log("outter:"+age);

{
    
    age2 = 30; // age2=30; 만 써도 block안에서 선언이 되어도 밖에서도 적용이 딘다. 
               //let은 blcok안에서만 선언이 됨.
    var age2;
}
console.log(age2);

let age3=50;
age3=40;
const age4=50;









