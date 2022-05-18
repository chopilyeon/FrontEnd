/**
 * 가장 기본적인 함수 생성 방법
 * function 함수명(){}
 * 
 * 
 * 
 * 
 */
function loadData(){
    document.getElementById("start").innerHTML
    ="0.00";

}

/**
 * 함수를 만들면 얻을수 있는 장점
 * 
 * 1.재사용이 가능하다
 * 2.만든 프로그램을 이해하기가 쉽다
 * 3.프로그램 수정이 간단해진다
 */

//함수표현방법
function square(x){
    return x*x;
}
//함수 리터럴로 정의하기
const square2=function(x){
    return x*x;
}

//function 생성자로 정의 방법
const square3 = Function("x","return x*x");

//화살표 함수(arrow function) 표현식으로 정의하는 방법

const square4=x => x*x;

//즉시 실행함수

(function(){})();
//즉시 실행함수도 인자값(아규먼트)를 잘 전달할 수 있다. 


(function(a,b){})(1,2);
//즉시 실행함수에도 이름을 붙일 수 있지만 함수 내부에서만 유효하다. 
(function square(n){
    return x*x;
})(3);


//함수 정의식을 함수값으로 만들 수도 있다.

+function(){
    return 1+1;
}();