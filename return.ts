let ret = st();
let ret1 = st1();
function st() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            return 3
        }
        return i
    }
}
console.log(ret)
function st1() {
    let x:number=0;
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            return 3
        }
    }
    
}
console.log(ret1)
let ret3=st3();
function st3(){
    let x:number=0;
    for(let i=0;i<5;i++){
        x=i
        console.log(x)
    }
    
}
console.log(st3);
