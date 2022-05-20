// 다른데서도 쓰기 위해 export 시킴 
// export 를 사용하지 않으면 쓸 수 없게 됨 
export function log(data){ 
    console.log(data);
}


//오늘 날짜
export const getTime =()=>{
    return Date.now();
}


//현재 시간
export const getCurrentHour=()=>{
return (new Date).getHours();
//javascript도 unstatic static 함수가 있음. 
}



//class

export class MyLogger2{
    constructor(props){
        this.lectures=[`JavaScript`,`HTMLS`,`CSS3`];
    }
    getLectures(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }
}