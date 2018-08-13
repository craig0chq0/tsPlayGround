abstract class operate {
    constructor() { };
    numA: number = 0;
    numB: number = 0;
    getresult() {
        let result = 0;
        return result;
    }
}
class opeAdd extends operate {
    constructor() {
        super()
    };
    getresult() {
        let result = 0;
        result = this.numA + this.numB;
        return result;
    }
}
class opeSub extends operate {
    constructor() {
        super()
    };
    getresult() {
        let result = 0;
        result = this.numA - this.numB;
        return result;
    }
}
class opeMul extends operate {
    constructor() {
        super()
    };
    getresult() {
        let result = 0;
        result = this.numA * this.numB;
        return result;
    }
}
class opeDiv extends operate {
    constructor() {
        super()
    };
    getresult() {
        let result: number = 0;
        if (this.numB !== 0) {
            result = this.numA / this.numB;
        }
        else {
            throw "除数不能为0"
        }

        return result;
    }
}
class opeFactory {
    static creatFactory(oper: string) {
        let ope: operate = null;
        switch (oper) {
            case "+":
                ope = new opeAdd();
                break;
            case "-":
                ope = new opeSub();
                break;
            case "*":
                ope = new opeMul();
                break;
            case "/":
                ope = new opeDiv();
                break;
        }
        return ope
    }
}
let ope: operate
ope.numA = 1;
ope.numB = 2;
ope = opeFactory.creatFactory("+");
let result = ope.getresult();
console.log(result)
