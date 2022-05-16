/*javascript
-javascript는 기본적으로 web에서 사용함 
-웹에서 동적으로 데이터나 dom을 조작하기 위한 언어 
-웹에서 사용하는 클라이언트(web browser) 및 서버(node.js)용 언어이다. 


javascript
현재는 javascript library나 framework과 함께 사용이 된다 
javascript(vanillaJS) - 같은 거임 vanilla = js 
framework는 또다른 언어 느낌임 
angular(google) -ReadableStreamDefaultController.js(meta,facebook) -vue.js(evanyou)-typescript 
jquery:java - springFramework 같은 거랑 비슷하다고 보면 됨 역할
javascript가 가장 해야할 많은 내용을 간단하게 사용할 수 있도록 구현된 library
library는 필요한것들을 모아서 정의 해놓은 것 */


//javascript에서 일반적으로 말하는 객체
//javascript에서 중요한 것은 객체를 구성하는 모양
//아래와 같은 형태의 객체는 가장 일반적이기도 하지만
//이를 literal(값)형태의 객체

let coffee={
    type:"라떼",
    price:5500
}
console.log(coffee);

//값을 변수에 대입해서 출력해보는 방법 
let coffeeType="라떼";
let coffeePrice=5500;
console.log(coffeeType);
console.log(coffeePrice);

let coffee={
    type:"Americano",
    price:4000
}
console.log(coffee.type);
console.log(coffee.price);
console.log(coffee["type"]);
console.log(coffee["price"]);
//리터리 객체에 없는 속성을 가져올 경우

console.log(coffee.name); // undefined 값을 가져온다. 

// 그냥 빈 객체를 선언할 경우 
let obj={};
console.log(obj);

//변수나 객체를 선어할때 사용하는 선언자 
//let:값을 다시 할당해도 되고, 
//{} 안에서만 값이 유용하다 
//local variable
//const:변하지 안흔 상수값을 정의할 때 사용한다. 
    //const PI=3.14,const LOCAL_URL="https://www.daum.net";

const coffee1 ={
    type:"capuccino",
    price:6000

}

//javascript를 사용할때 맨 마지막 문장에는 ;을 붙여준다. 
//javascript에서 ';'을 사용하지 않고 쓰기도 하는데 그럴 경웅에는 
//맨 마지막 문장에서 엔터를 쳐서 작성하면 된다.
//그러면 다음 문장으로 인식을 한다. 

//성능 때문에 javascript의 용량을 최소로 줄이는 경우가 발생할 수 있기 때문에 
//맨 마지막에는 ';'을 붙이는 것
console.log("하이");
javascript에서는 반드시 대소문자를 구분하도록 한다
console.log("하이");
console.log("하이");

//한줄주석 
/**
 * API DOCUMENT 주석 
 * 
 */