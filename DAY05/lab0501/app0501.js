/*
행위와 속성을 나타내는 형태의 객체
javascript는 정의를 한후에 
반드시 호출해야 실행이 된다. 

행위와 속성이 같이 존재하게 됨. 

*/

const coffee = {
    type:"라떼",
    price:5500,
    makeCoffeee: function(){
        console.log(this.type+"//"+this.price);
    }
}

//this를 기억하자. 

//호출을 해야 불러올수 있음 여기서 터미널 쳐봤자 안됨

// this에 대해 알자

// this를 정의해야 내부변수로 인식하게 됨. 

// 같은 객체 안에 있어도 property를 사용하려면 this를 써주자

coffeee.makeCoffee();

