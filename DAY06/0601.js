const SETTING={
    name:"Lotto",
    count:6,
    maxNum:45

}


function playLotto(){
    const lottoset = new Set(); //java에서의 집합 개념임 
    const {count, maxNum}=SETTING; // 세팅을 받을 때 이런식으로 씀 
    while (lottoset.size<count){
        const randomNumber=parseInt(Math.random()*maxNum,10)+1; //10은 10진수임 
        lottoset.add(randomNumber);

    }
    return Array.from(lottoset);
}
console.log(playLotto());
console.log(playLotto().sort((a,b)=>a-b));
console.log(playLotto().sort((a,b)=>b-a));



