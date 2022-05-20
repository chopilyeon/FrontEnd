//export 했으니 import 시키자 

import PolytechLec from  './PolytechLec';

import util from  './Utility'; // 이것은 class를 불러온 것이 아니라 변수를 긁어옴 



const root = document.querySelector("#root"); //querySelector - 내가 필요한 녀석 가져와 란 뜻임. 
root.innerHTML=`<p>Hello World</p>`;
util.log("내가 만든 임포트 익스포트 데이터");

// util.log(getTime());
// util.log(getCurrentHour());
// util.log(`getTime is ${getTime()}`);
// util.log(`current hor ${getCurrentHour()}`);


// const logger=new MyLogger2();
// log(`lectures of Poly are ${logger.getLectures()}`);

const pt=new PolytechLec();
pt.log(`current hour is ${pt.getCurrentHour()}`);
pt.log(`lecture of polytech are ${pt.getCurrentHour()}`);