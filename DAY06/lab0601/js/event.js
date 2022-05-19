
// 이벤트 처리 순서 
// 1) 객체를 찾고(element, object)
// 2) 이벤트를 생성하고
// 3) 객체에 붙인다.(AddEventListener)

// 이벤트 처리 방법 
// 1) 이벤트 처리기를 등록하는 방법 
// <input type="button" onclick="changeColor()"/>

// 2) DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
// const btn1 = document.getElementById("btn"); // id 
// const btn2 = document.querySelector("#btn"); // id 
// const btn3 = document.querySelector(".colorBox"); // class 
// btn.onclick = changeColor();




// 3) addEventListener 메소드를 사용하는 방법
// const btn1 = document.getElemnetById("btn");//id
// const btn2 = document.querySelector("#btn");//id
// const btn3 = document.querySelector(".colorBox");//class
// btn1.addEventListener("click",()=>{ 

//     do something
// });
    

//dom이 실행되면 listner를 꽂아라! 
document.addEventListener("DOMContentLoaded",()=>{
    alert("잘 들어오나?")
    //여기서 말하는 객체 element임 
    const boxEle = document.querySelector("#box");
    const colorBtnEle = document.querySelector(".colorBtn");
    const BtnEle = document.querySelector("button");



//     //각각의 elemnet에 이벤트를 연결시켜준다. 

    // boxEle.addEventListener("click",(e)=>{ // click이 일어났을 떄 
    //     e.currentTarget.style.backgroundColor="red";
    // });
    //e 라는 argument로 빨려들어감. 
    //
    boxEle.addEventListener("click",function(e){ // click이 일어났을 떄 
        e.currentTarget.style.backgroundColor="red";
    });
// 
//     colorBtnEle.addEventListener("click",function(e){ // click이 일어났을 떄 
//         e.currentTarget.style.backgroundColor="blue";
//     });
//     BtnEle.addEventListener("click",function(e){ // click이 일어났을 떄  //e는 event이 e임 
//         e.currentTarget.style.backgroundColor="gray";
//         e.currentTarget.style.padding="10px 20px";
//     });

});




//Destructuring : 비구조화 할당
// 변수에 필요한 값을 할당하는데 매우 유용한 방법 
// let data = ["crong","coffee","bat"];

// let data1 = data[0];
// let data2 = data[2];

// // Destructuring은 
// let [data3, data4] = data;
// console.log(data3,data4);

// let [dataCrong,dataCoffee]=data;
// console.log(dataCrong,dataCoffee);

// //객체형태고 위에는 list 객체 형태임. 
// //구조화가 이미 되어있는 것과 되어있지 않은 것의 차이임 

// let obj = {
//     name1:"bts",
//     address:"korea",
//     age:20
// }

// // let [name,age] = obj;
// let {name,age} = obj;
// // console.log(name,age); // 이건 에러남 위에거랑 다르게 구조화가 되어 있지 않기 때문임. 
// let {name1:myName,age:myAge} = obj;
// console.log(myName,myAge);

//Destructuring 활용 json 피싱

// var news = [
//     {
//         "title":"sbs",
//         "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/001.jpg",
//         "newslist":[
//              "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
//              "리캡차'가 사라진다.",
//              "갤럭시S8’ 출시? ‘갤노트7’ 처리 계획부터 밝혀야",
//              "블로코-삼성SDS, 블록체인 사업 ‘맞손’",
//              "[블록체인 톺아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
//         ]
//     },
//     {
//         "title":"mbc",
//         "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9033/220451/001.jpg",
//         "newslist":[
//              "Lorem ipsum dolor sit amet, consectetur adipisicin",
//              "ipsum dolor sit amet, consectetur adipisicin",
//              "dolor sit amet, consectetur adipisicin",
//              "amet, consectetur adipisicin"
//         ]
//     }
// ];


// //
// let [,mbc1] = news;
// console.log(mbc1);

// // let [title,imgurl] = mbc1;
// // console.log(title,imgurl); 안에 구조가 많아서 이렇게하면 정의가 안됨. 

// let[,{title,imgurl}]=news;
// console.log(imgurl)

// let[,{title:title2,imgurl:imgurl2}]=news;
// console.log(imgurl)

// //함수 호출하는 방법 추가
// //obj.m(); , 이 객체의 m프로퍼티 메소드라고 함.  












// let obj = {};
// obj.m=function(){
//     console.log("함수추가하기");
// }
// obj.m;