abstract class cash {
    constructor() { }
    abstract acceptcash(cash: number): number
}

class normalcash extends cash {
    acceptcash(cash: number) {
        return cash;
    }
}

class discountcash extends cash {
    private discount: number = 1;
    constructor(dis: number) {
        super();
        this.discount = dis;
    }
    acceptcash(cash: number) {
        return cash * this.discount;
    }

}

class returncash extends cash {
    constructor(condition: number, return1: number) {
        super();
        this.moneycondition = condition;
        this.moneyreturn = return1;
    }
    private moneycondition: number = 1;
    private moneyreturn: number = 1;


    acceptcash(cash: number) {
        if (cash >= this.moneycondition) {
            let result = cash - Math.floor(cash / this.moneycondition) * this.moneyreturn;
            return result;
        }
        else {
            return cash;
        }
    }
}

class cashFac {
    static caeratFav(type: string, ...arg: number[]) {
        let cs: cash = null;
        switch (type) {
            case "normalcash":
                cs = new normalcash();
                Array.bind
                break;
            case "discountcash":
                let dis1: discountcash = new discountcash(arg[0]);
                cs = dis1;
                break;
            case "returncash":
                let ret1: returncash = new returncash(arg[0], arg[1]);
                cs = ret1;
                break;
            default:
                throw "不存在这个策略"
        }
        return cs;
    }
}


let aaaa = cashFac.caeratFav("discountcash", 0.3);

console.log(aaaa.acceptcash(200));

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);