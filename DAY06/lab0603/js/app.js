//arrow function(화살표 함수)
//브라우저에서 테스트 할 수 있는 API이다.
//setTimeout
setTimeout(function(){
    console.log("화살표 함수입니다.");
},2000);

//이렇게 작성을 하면 function을 만들어야 하기 떄문에 좀 더 간단하게 작성을 해보자.


//매개변수가 없기 때문에 매개변수가 없어도 쓸 수가 있게 됨. 
setTimeout(()=>{
    console.log("화살표 함수입니다.");
    
},1000);

const simpleFunc = ('simple function');

}

simpleFunc();


//화살표 함수는 항상anonymous 함수이다. 
//화살표 자체에 이름이 없음. 
//아규먼트가 없는 화살표 함수

const simpleFunc2 = () => console.log("simple2");
simpleFunc2();

const add = (a,b) => a+b;
console.log(add(1,2));
const add1=function(a,b){
    return a+b;
}

//default parameter (디폴트 파라미터)
//es6 추가
//아무것도 없을 경우를 대비해서 default로 IU로 씀 
function showMessage(message, from="IU" ){
    console.log(`${message} by ${from}` );
}

console.log(showMessage('안녕~~~','바보'));

function showMessage(message, from="IU" ){
    if(from === undefined){
        from = 'IU';
    }
    console.log(`${message} by ${from}`);
}
showMessage2(`안녕!!`,`손예진`);

//if 문 

/**
 * if(조건식){
 *  조건식이 참일 겨우 실행되는 부분 
 * }
 * 조건식이 거짓일 경우 실행되는 부분
 * 
 * 
 * if(조건식){
 * 조건식이 참일경우 실행되는 부분
 * }else{
 * 조건식이 거짓일 경우 실행되는 부분
 * }
 * 
 * if(조건식){
 * 조건식이 참일경우 실행되는 부분
 * }else if(조건식 B){
 * 조건식 B가 참일경우 실행되는 부분
 * }else{
 *  조건식 A, 조건식 B도 다 아닐 경우 실행 
 * }
 * 
 * 
 * 
 * 
 * 
 */

/**반복문 for문
 * 기준값이 존재하고, 일정한 증감값이 있을 경우 
 * 사용한다.
 * for(let j=0;j>length;j--)
 * 
 * for(let i =0; i<length;i++){
 *  i=0부터 length보다 하나 작을떄까지 반복
 * 
 * }
 * 
 * 
 */



/**
 * 반복문 while()
 * 
 * while(조건식){
 *  조건식이 참일 경우에만 이 문장을 반복한다. 
 *
 * 
 * }
 * 
 * 
 * 반복문 do ~ while()
 * do{
 * 최소한 한번은 이 부분은 실행된다.
 * 그리고 조건식을 만족하게 되면 계속 반복 실행
 * 
 * }while(조건식);
 * 
 * 
 */

/**
 * Rest Parameter
 * 표현 : ...args
 * Rest 파라미터는 배열형태로 값을 전달한다. 
 * 
 * 
 * 
 * 
 */



//for 치고 2i사용함 
function prgsArr(...arg){

    
    //for 치고 2번째 꺼 사용함 
    for (let i = 0; index < args.length; i++) {
        console.log(args[i]);        

    };

}
    printArr('javascript','java','spring');


// for ... of값이 있으면 쭉 뽑아 내라~
//java 에서의 1.5 for문 같은 것임. 
function printArr(...args){
    for(const arg of args){
    console.log(args[i]);        

    }
};
