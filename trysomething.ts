
// let sec1: number = 0;//声明秒
// let sec01: number = 0;//0.1秒
// let sec001: number = 0;//0.01秒
// let ti: number | null = null;
// function timing(sec1: number, sec01: number, sec001: number) {
//     sec001 += 1;
//     if (sec001 >= 10) {
//         sec001 = 0;
//         sec01 += 1;
//     }
//     if (sec01 >= 10) {
//         sec01 = 0;
//         sec1 += 1;
//     }
//     return `${sec1}:${sec01}${sec001}`;
// }
// //开始计时
// function start() {

//     ti = setInterval(timing(sec1, sec01, sec001), 10);
// }
// //暂停计时
// function stop() {
//     if (ti == null) return;
//     clearInterval(ti);
// }
// //重置
// function reSet() {
//     if (ti == null) return;
//     clearInterval(ti);
//     sec1 = 0; sec01 = 0; sec001 = 0;
//     return `${sec1}:${sec01}${sec001}`;
// }


 


// let allfood:string[]=[];
let firfood:string[]=["1","2","3"];
let secfood:string[]=[];


/**第一天的选择 */

function FD() {
    return firfood[Math.random()*firfood.length|0];
     
   }
secfood=secFood(firfood,FD());
function secFood(arr:string[],item:string){
    let nwearr=[];
    for(let  i=0;i<arr.length;i++){
        if(arr[i] != item){
            nwearr.push(arr[i]);
        }
    }
    return nwearr;
}

/**后一天的选择 */
function SECD(){
    return secfood[Math.random()*secfood.length|0];
}
console.log(firfood);
console.log(FD());
console.log(secfood);
console.log(SECD());

