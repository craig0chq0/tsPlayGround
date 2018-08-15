//字符串类型的变量可以带有数字 
let list: string[] = ["a", "b", "c"];
list.forEach((item: string, index: number) => { console.log(`index[${index}]${item}`) });


let trys: string = "myname" + "里" + "my age" + 3;
function as(hh: number) {
    let hhh = trys;
    return hhh;
}
console.log(as(2));
console.log( "-----------------------------");
//实验return是直接跳出函数而不是跳出语句
let x1: 1 | 0 = 1;
function s1(s: 0 | 1) {

    if (s === 0) {
        return 2
    }
    else {
        return 1;
    }
    let apl = 11223377;
    console.log(apl);
}
console.log(s1(x1));
console.log( "-----------------------------");

/**将数字转换成二进制(八进制抑或其他)形式的字符串
 * 并将其分隔为一个个单独的字符
 * 然后判断其某个位置的字符是否为"1"或"0"或"undefined"
 * */
function getByteLoaction(num: number, location: number) {
    let numstr = num.toString(2);
    let numarr = numstr.split("").reverse();
    console.log(numstr);
    console.log(numarr);
    if (typeof numarr[location] === "undefined")
        return false;
    else if (numarr[location] === "1")
        return true;
    else return false;
}

console.log(getByteLoaction(12, 2));
console.log( "-----------------------------");
//!!强制将数字或字符转换为布尔值
let numst:string="s";
console.log(!numst);
console.log(!!numst);
console.log( "-----------------------------");