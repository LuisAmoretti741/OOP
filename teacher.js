class Teacher extends Human{
    constructor(name, surname, students = []) {
        super(name, surname)
        this.students = students;
    }

    toString() {
        let result = 
                    "nome: " + this.name + "\n" + 
                    "cognome: " + this.surname + "\n" + 
                    "----------------------\n" +
                    "allievi:\n";
        
        for (const i of this.students) {
            result += i.toString() + "\n"; 
        }
        let allMean = 
                    "----------------------\n" +
                    "media della clase: " +  this.allMean;
        return result.trim();
    }
}