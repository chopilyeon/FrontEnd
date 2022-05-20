/**
 * People
 * this.name 프로퍼티를 갖게 된다. 
 * this.age 프로퍼티를 갖게 된다. 
 * this 상황에 따라 가리키는 범위 달라짐.
 *      지금 현재 실행되는 영역의 바로 바깥을 가리킨다. 
 * 
 * 
 */



class People {
    //생성자는 값을 초기화 할 때 사용한다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() { //method임. 
        console.log(`${this.name}은 ${this.age}살 입니다.`);
        //this를 사용해야 인식을 함 
    }
}
// 생성자를 호출함.
const people = new People("김병관", 20);
people.show();

/**
 * 
 * 간단한 객체 생성해 보기
 * 
 * 
 * 
 */

const name = "IU";
const age = 30;

// 간단하게 객체를 생성하면 
//이렇게 값을 설정할 수가 있음.

const obj = {
    name: name, //                           왜 this를 안치나요?
    age: age
}

function getObj() {
    const name2 = "잇지";
    const getName2 = function () { //get
        return name2;
    }
    const setName = function (newName) { //set
        name2 = newName;
    }
    const printName = function () { //출력
        console.log(name2);
    }
    return {
        getName2,
        setName
        /**
         *  getName2(파라미터) : getName2 윗 함수 자체
         *  setName(파라미터) : setName 윗 함수 자체
         */
    }
}

let obj2 = getObj();
console.log(obj2);
console.log(obj2.getName2());




/**
 * java는 클래스기반 객체지향 언어
 * javascript 프로토 타입 기반 객체지향 언어 
 * 
 */

//user.singing = true;
//객체가 존재하는데 , 그 객체에 속성을 추가해서
// 객체를 만드는 방식임 


//java code - 클래스기반임 
// class UserInfo{
//     private String name = "IU";
//     public void setName(String name){
//         this.name=name;
//     }
// }
// Userinfo userInfo = new UserInfo();
// userInfo.age=10; 이러면 에러남 


class Coffee {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
    //get set this.type하면은 계속 불러내서 stack 에 쌓이기만함 
    //get set 예약어라서 그냥 this.type이 안먹는다. 
    //get1 으로 이름을 주면은 this.type이 먹음. 

    get type(){ // get metohd
        return this._type; //javascript에서는 getter setter 이렇게 쓴다! 
    } //type 때문에 get1 type이런거 쓰면 안됨 type 지우고 get1 만 쓰면 작동함 .
    set type(value){ //set method 
         this._type = value;

    }

}




const coffee = new Coffee("라떼", 5000);
console.log(coffee.type);