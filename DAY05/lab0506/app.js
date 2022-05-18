/**
 * 함수를 선언하고 사용하기 
 * 
 * 
 * 
 * 
 */
//함수 선언, 리턴 타입이 없는 함수  
function add(a,b){
    console.log(a+b);
}
add(1,2);

//리턴 타입이 있는 함수
function multiple(a,b){
    return(a*b);
}
//first class object
console.log(multiple(3,4));

//함수에서도 hoisting이 된다.
//선언을 아래에서 해 놓아도
//위에서 호출할 수 있다.
 
coffeeMachine("라떼",4000);

function coffeeMachine(type,price){
    console.log(`${price}인 ${type}커피가 나왔습니다.`);
}