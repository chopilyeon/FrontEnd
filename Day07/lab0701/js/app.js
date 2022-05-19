document.querySelector("div")
        .addEventListener("click",function({target}){
        console.log(target.tagName); //태그 이름을 끌고 오게됨 <div>
        console.log(target.innerText); //innerText 
    });
    //event -> e와 다르게 그 속성을 가져올떄는 
    //target -> element(<div>) 이건 예약어라서 바꾸면 안됨 

    //target1으로 쓰면은 에러 발생함. 

    //console.log(target.tagName);

document.querySelector("div")
        .addEventListener("click",function({type}){
        console.log(type);
    });
/**
 * 타입을 확인해보고 싶으면 type이라는 이름을 주고 출력해야한다
 * (event type);
 * 
 * 
 */

 document.querySelector("div")
 .addEventListener("click",function({type,target}){
 console.log(type,target.tagName); //innerText
 
console.log("eval=",eval(1+2));// eval은 계산해주는 함수임 
});
