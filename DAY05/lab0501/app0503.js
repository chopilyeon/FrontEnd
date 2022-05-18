// {
//     age2=30;
// }
// console.log(age2);
//이러면 var age2
     //age2=30;처럼 인식함


/**
 * 명명법
 *  -관습적으로 이렇게 사용하기로 약속을 했기 때문에
 *  -회사마다 다를 수 있음, 프로젝트마다 다를 수 있음 
 * 카멜(camel) : 소 - 대 - 소 ex)let coffeeType, makeCoffee(){}
 * -함수 변수 메소드
 * 파스칼(pascal) : 대 - 대 -소 ex) class UserInfo{}, function Person(){}
 * -생성자, 클래스
 * lower(전체소문자) : 전체를 소문자로 ex) let. const, 예약어, 키워드
 * upper(전체대문자) : 전체를 대문자로 ex) const PI=3.14; const PI=Math.PI;
 * 
 * 
 * 
 */

/**
 * 
 * 
 * 데이터타입의 분류 
 * 1) 기본타입(primitive type):int,String,boolean,undefined,null,symbol
 * 2) 참조타입(reference type):Object,primitive type이 아닌 것임 
 *            object type
 * 기본타입 제외한 모든 타입은 참조(객체) 타입이다.
 * 
 * pass by value
 * assign by value
 * immutable
 * 
 * pass by reference
 * assign by reference
 * mutable
 * 
 */


let a = 10;
let b = a;
b=20;
console.log(a,b);
//참조 타입 pass by reference

let list = [1,2,3,4,5];
let list2 = list;
console.log("lst=", list, " list2=",list2);
list2[2]=100;
console.log("list=",list," list2=",list2);

/**
 * undefined값이 나오는 경우 
 * - 존재하는데, 값이 없을 경우
 * - 값을 아직 할당받지 못한 변수의 값 
 * - 없는 객체의 프로퍼티를 읽으려고 시도했을 떄의 값 
 * - 없는 배열의 요소를 읽으려고 시도했을 떄의 값
 * - 아무것도 반환하지 않는 함수가 반환하는 값
 * - 함수를 호출했을 떄 전달받지 못한 인수의 값
 * - 
 * 
 * 
 * 
 * 
 *  */
console.log("하이"); // 브라우저 콘솔에서 실행하면 undefined 나옴 
//return 값이 없기 떄문에 undefined가 나오게 됨 

/**
 * 
 * 
 * 
 */

const coffee = {
    type:"Americano",
    price:4000
        
};
//coffee=test; 이런건 안됨 coffee를 정의해놨기 떄문임
//하지만 property같은건 가능함. 
console.log(coffee.price);
console.log(coffee.sirup); // 없는 속성값 undifined
coffee.sirup="설탕많이"; // 프로퍼티 추가
console.log(coffee);
console.log(coffee.sirup);

delete coffee.price; // 프로퍼티 삭제
console.log(coffee); 

console.log("price" in coffee); // true로 나옴 
console.log("type" in coffeee);
//coffee 객체에는 없는 속성이나 js 최상위 객체인 
//Object에 있는 속성도 사용할 수 있끼 떄문에 true가 나온다. 
//js 모든 객체는 object를 상속받는다. 
console.log("toString" in coffee);

//템플릿 리터럴 이걸로 할 수 있는 편한 방법들이 있음.
//' '(역따옴표)로 묶은 문자열을 말한다.

let strTemplate = `오늘도 벌써 3시간 밖에 안남았네`;
console.log(strTemplate);
// 줄바꿈 표시 해보기
let strTemplate2 = `오늘도 벌써 3시간\n 밖에 안남았네`;
console.log(strTemplate);

//문자열 리터럴
let str = String.raw`오늘은 집에 가면\n 잠을 잘 자겠죠?`;
let str1 = String.raw`test tests\ntest`;

console.log(str1); 


//보간 표현식 
/**
 * 템플릿 리터럴 안에 플레이스 홀더를 넣을 수 있다
 * 플레이스 홀더는 ${...}로 표시가 된다.
 * 플레이스 홀더 : 실제 값을 나중에 넣기 위해 확보한 장소
 * ${} 활용하여 문자열 안에 변수나 표현식의 결과값을 삽입할 수 있다.
 * 
 * 
 */

let a=2, b=3; // 한 줄에 두개를 선언할 수도 있다.
console.log(`${a}+${b}=${a+b}`); // java에서 print format같은 것임. 
//동적으로 만들 수 있더라~ 계산도 가능함 
console.log(a+"+"+b+"="+(a+b));
let now = new Date();
console.log(`오늘은 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`)





//const 사용하는 방법

const people = {
    userName:"손흥민",
    age:30
}

people.userName="IU";
console.log(people);

//const로 선언했는데 값이 바뀌는 이유는
//다시 할당만 안되고, 안에 내용을 수정하는 것은 된다. 
console.log(people);

//이렇게 하면 문제가 생김 
//const라고 하는 것은 
//const PI=3.14; 이렇게 하면 PI=20; 이건 불가능함 
//const people={00,00} people안에 내용을 고치는 것은 가능함. 

people={
    userName2:"블랭핑크",
    age2:22
}
console.log(people);


//const 예제 하나 더 확인

const list = [1,2,3,4,5];
console.log(list);
list[2]=100;
console.log(list);

