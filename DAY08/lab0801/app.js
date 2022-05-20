/**
 * closure(클로저)
 * 함수가 정의될 떄의 렉시걸 환경을 기억하는 함수를 말한다(etc)
 * 함수가 호출된 이후에도 메모리에 값이 존재해 외부에서 접근할 수 있는 방법(나)
 * 일반적으로 접근할 수 없는 것에 접근하는 효과 
 * 변수를 은닉하여 지속성을 보장할 수 있다.
 * 자바스크립트의 모든 함수는 클로저(closure)를 정의한다.
 * 
 */

//함수가 실행한 이후에 함숭수에 있는 값들은
//메모리에서 사라진다
//함수가 일반적으로 동작하는 방식
//함수가 실행한 이후에 함수에 있는 값들은 메모리에서 사라진다.
// function genelralFunc(){
//     let count=0;
//     return count++;
// }


// const cnt1 = genelralFunc(); // 1-o
// console.log(genelralFunc()); 1-o
// console.log(genelralFunc()); //2-x,1-o




// console.log()
//함수가 실행된 이후에도 값이 남아있어
//외부에서 접근이 가능한 방법
//member field private같은 형태로 사용하려고 
//java에서의 private 개념이라고 생각하면 됨. 


function createCounterClouser(){
    let count=0;
    //return에 함수를 정의해야 closure함수가 됨.
    return{
        increase:function(){
            count++;
        },
        getCount:function(){
            return count;
        }
    }   
}


//-------------질문--------------------
// count는 scope 끝나면 죽어야함
// count는 확인 못함? 
// return에 쓰면 스코프 끝나도 변수가 안죽게 설계?

// const cnt1 = genelralFunc(); // 1-o
// console.log(genelralFunc()); 1-o
// console.log(genelralFunc()); //2-x,1-o



const count1 = createCounterClouser();
const count2 = createCounterClouser();

count1.increase();
count1.increase();
console.log("counter1의 값: "+count1.getCount());



count2.increase();
console.log("counter2의 값: "+count2.getCount());



/**
 * promise
 * ES2015(ex6) 에서 비동기 처리를 하기 위해 promise 객체를 소개함
 * Promise는 객체로서 언젠가 완료될 일을 나타낸다
 * 완료되면 하나의 값을 결과로 반환하는데
 * 정상적인 결과를 반환할 수도 있고(resolve)
 * 실패한 결과를 반환할 수도 있다(reject)
 * 
 * 
 * 
 * 
 * promise 객체는 다음과 같은 세가지 상태를 가진다. 
 * -1) 대기중(pendding) : 아직 결과가 없는 상태, 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
 * -2) 이행됨(Fullfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한  상태. 이 때 결과로서 하나의 값이 전달됨 
 * -3) 거부됨(rejected) : 비동기 처리가 실패한 상태.
 *                        약속이 거부되고 그 결과로 거절된 이유를 전달. 
 *
 * 
 * promise 객체는 두가지의 메소드를 가진다.
 * 1) then(onFullFilled,onReject)
 *        -약속이 완료됐을 떄 호출될 함수를 정리 
 *        -이때 첫번쨰 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 떄 호출 
 *        - 두번 쨰 인자로 전달된 함수는 거부됐을 때 호출 
 *        - 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를
 *          통해 전달된다.
 * 2) catch(OnReject)
 *    - 약속이 거부됐을 떄 호출될 함수(onReject)를 등록한다.
 * 
 * 자바에서의 try-catch 코드임 
 * 
 * 
 */


function promiseForHomework(mustDO){
       return new Promise((resolve,reject)=>{
           setTimeout(()=>{
                console.log("doing homework~~~");
                if(mustDo){
                    resolve({
                        result:'homework-result'
                    });
                }else{
                    reject(new Error("Too lazy~!!"));
                }           
            },3000);
         });

}

//true로 줘야 resolve의 result로 갈 수 있음
const promiseA = promiseForHomework(true);
promiseA.then(v=> console.log(v));

//argument 안줘서 에러남 


console.log("promiseA 출력완료");

promiseA.then(v=> console.log(v));

//promiseB
const promiseB=promiseForHomework();
console.log("promiseB 출력완료!!");
//이렇게 하면 그냥 reference 뭐 참조 못해 이런거 나옴. 
//은행이면은 비밀번호 틀렸습니다 이런 에러메세지 띄울수가 있는거임. 
promiseB.then(v => console.log(v));

//무슨 에러가 났는지 체크할 수가 있음. 
promiseA.catch(e => console.error(e));



const getHen = () => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("암탉"),1000);
});

const getEgg = (hen) => new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve(`${hen}=>달걀`),1000);
    setTimeout(()=>reject(new Error(`${hen} =>달걀`)),1000);
});

const cook = (egg) => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${egg}=>계란후라이`),1000);
});

//chaining임. 

getHen().
then(hen => getEgg(hen)).
then(egg => cook(egg)).
then(meal => console.log(meal));


getHen().
then(getEgg).
then(cook).
then(console.log);



getHen().
then(getEgg).
catch(error=>{
    return "빵";
}).
then(cook).
then(console.log);

