// 用递归 来求 5 的阶乘
// n! = n * (n-1)!

// 定义一个函数，用于求 n 的阶乘
function digui(n:number):number{
    if(n===1){
        return 1
    }
    return n*digui(n-1)
}
function func( n:number ):number
{
    if (n == 0 || n == 1)
    {
        return 1;
    }
    return func(n-1) + func(n-2);
}

var a123 = func(4);
console.log(a123);