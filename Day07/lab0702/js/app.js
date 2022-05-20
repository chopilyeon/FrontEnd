//export 했으니 import 시키자 

import {log,getCurrentHour,getTime, MyLogger2} from  './myLogger.js';



const root = document.querySelector("#root"); //querySelector - 내가 필요한 녀석 가져와 란 뜻임. 
root.innerHTML=`<p>Hello World</p>`;
log("내가 만든 임포트 익스포트 데이터");

log(getTime());
log(getCurrentHour());
log(`getTime is ${getTime()}`);
log(`current hor ${getCurrentHour()}`);


const logger=new MyLogger2();
log(`lectures of Poly are ${logger.getLectures()}`);