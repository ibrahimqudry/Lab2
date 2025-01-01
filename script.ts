class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calcCircumference() {
        return 2 * (this.width + this.height);
    }
    static whoAmI() {
        console.log("I am rectangle");
    }
}
class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
    calcCircumference() {
        return 4 * this.width;
    }
    static whoAmI() {
        console.log("I am square");
    }
}

let rectangle = new Rectangle(4, 5);
let square = new Square(4);
console.log(rectangle.calcCircumference());
console.log(square.calcCircumference());
Rectangle.whoAmI();
Square.whoAmI();
