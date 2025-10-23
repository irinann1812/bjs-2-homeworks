//Задача 1
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);

    if (isNaN(parsedValue)) {
        throw new Error ("Невалидное значение");
    } else {
       return parsedValue; 
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

//Задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        const P = this.a + this.b + this.c;
        return P;
    }

    get area() {
        const semiP = this.perimeter / 2;
        const S = Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c));
        return +S.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() { return "Ошибка! Треугольник не существует"; },
            get area() { return "Ошибка! Треугольник не существует"; }
        }
    }
}