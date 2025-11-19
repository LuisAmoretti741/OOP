class Rettangolo {
    constructor(base, height, colore) {
        this.base = base;
        this.height = height;
        this.colore = colore;
    }

    calculateArea() {
        return this.base * this.height;
    }

    calculatePerimeter() {
        return (this.base * 2) + (this.height * 2);
    }

    toString() {
        const scheda = 
            "RETTANGOLO" + "\n" +
            "base: " + this.base + "\n" +
            "altezza: " + this.height + "\n" +
            "colore: " + this.colore + "\n" +
            "area: " + this.calculateArea() + "\n" +
            "perimetro: " + this.calculatePerimeter()

        return scheda;
    }
}