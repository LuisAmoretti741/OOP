class Human{

    constructor(name, surname, yob){
        this.name = name;
        this.surname = surname;
        this._yob = yob;
    }

    get yob(){
        return this._yob;
    }

    get age() {
        const actualYear = new Date().getFullYear();
        const age = actualYear - this._yob;
        return age;
    }

    set yob(newYob){
        const actualYear = new Date().getFullYear();

        const isInThePast = newYob <= actualYear;

        const isYoungerThan150 = (actualYear - newYob) < 150;

        if (isInThePast && isYoungerThan150) {
            this._yob = newYob;
        } else {
            console.log("anno non valido");
        }
    }

    toString(){
        return "nome: " + this.name + "\n" +
               "cognome: " + this.surname + "\n" +
               "data di nascita: " + this._yob + "\n" +
               "età: " + this.age;
    }
}