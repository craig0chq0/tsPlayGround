abstract class component {
    constructor() { };
    abstract operation(): void;
}
class concreteComponent extends component {
    constructor() {
        super();
    }
    operation() {
        console.log("具体对象的操作");
    }
}
abstract class Decorator extends component {
    constructor() {
        super();
    }
    protected Component: component;
    private setcomponet(Component:component){
        this.Component=Component;
    }
    operation(){
        if (this.Component!==null){
            this.Component.operation();
        }
    }
}
class concreteDecoratorA extends Decorator{
    constructor() {
        super();
    }
    private addedState:string;
    // operation(){
    //     component.
    
}