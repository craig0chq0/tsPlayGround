let a1: number[] = [0];
let a2: number[] = [0];
let a4: number[] = a1;
console.log(a1 === a2);
console.log(a1 === a4);
function sdd() {
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            console.log(0)
            return
        }
        console.log(1)
    }
}
console.log(sdd())