//배열(Array)
/**
 * 여러개의 값을 나열해서 저장해 놓은 것 
 * 저장된 데이터에 index가 부여되어 인덱스로 접근한다. 
 * 
 * 
 * 
 * 
 */

//배열은? 참조? 기본타입? -> 참조 
const arr = [2,4,6,8];
const arr1 = ["2","4","6","8"];
//

// 빈 배열 선언 

const empty = [];
console.log(empty);

// 배열 요소 중에서 일부를 생략하면 그 요소는 생성되지 않는다. 
const arrRst=[2, ,4];
console.log(arrRst);

//배열 값에는 기본타입, 참조타입 어떤 타입이라도 올 수 있다.
const arrData=[3.14,"pi",{x:1,y:2},[2,3,4]];
// 배열의 length 프로퍼티는 요소의 갯수를 리턴한다. 

console.log(arrData.length); // 이건 요소기떄문에 () 없이 그냥 씀. 
//console.log(arrData.length()); 메소드면 이렇게 정의해야 함. 

//배열의 length 프로퍼티에 현재 배열들의 갯수보다 작고
//0보다 큰 정수값을 넣으면 배열의 길이가 줄어든다. 
const arrLength = ["A","B","C","D"];
console.log(arrLength.length);
arrLength.length=2;
console.log(arrLength);

console.log(document); // document가 없으므로 에러가 남.  이거 하려면 browser에서 해야 함. 

//없는 배열 요소에 값을 대입하면 새로운 요소가 추가된다. 

const arr3 = ["A","B","C"]; // 0,1,2 
arr3[3] = "D";
console.log(arr3);

//push 메소드를 사용하면 요소를 배열 끝에 추가할 수 있다. 
const arr4 = ["A","B","C","D"];
arr4.push("E"); // set 은 add 
console.log(arr4); 

const arr4 = ["A","B","C","D"];
delete arr4[1];
console.log(arr4);
console.log(arr4.length); // length는 줄어들지 않음 없앨 수는 있지만 공간만 비게 됨. 


function fruit(){
const list = ["apple","orange","watermelon"];
list="podo";
}
fruit();

//const로 정한 배열값에 값을 추가해보자. 

function fruit2(){
    const list = ["apple","orange","watermelon"];
    console.log(list);
    list.push("podo");
    console.log(list);
    console.log(list);
}
fruit2();

const list3 = ["apple","orange","watermelon"];
// list4=[].concat(list3,"banana");

console.log(list3,list4) //이렇게도 찍을 수 있음. 

//list3과 list4를 비교를 해보자 
console.log(list3==list4);
//list3과 list4를 비교해보자. 
//값도 같고, 타입도 같아서 아주 완벽하게 똑같을 때 
//비교하는 것이 ===(동치)
//== X, === O 이렇게 써야 함.
console.log(list3===list4);

