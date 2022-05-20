// const element = document.querySelector("p");
// const myObj = {
//     register(){
//         element.addEventListener("click",function(evt){
//             this.printData();

//         });
//     },
//     printData(){
//         console.log("clicked~!!");
//     }

// }
// myObj.register();

// //위에서 사용했던 arrow function을 사용해보자.


const element = document.querySelector("p");
const myObj = {
    register(){
        element.addEventListener("click",(evt)=>{
            this.printData(); //function은 hoisting이 됨. 
            //호떡처럼 영역이 퍼져버림. 

        });
    },
    printData(){
        console.log("clicked~!!");
    }

}

myObj.register();

