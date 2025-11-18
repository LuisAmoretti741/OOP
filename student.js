class Student extends Human{

    constructor(name, surname, marks) {
        super(name, surname);
        if (marks) {
            this.marks = marks;
        } else {
            this.marks = [];
        }
        
    }

    calculateMean() {
        if (this.marks.length === 0) {
            return 'pippo';
        }

        let sum = 0;

        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];

            sum += mark;
        }

        const mean = sum / this.marks.length;

        return mean;

    }

    // allMean() {
    //     if (this.students.length === 0) return 0;

    //     const sumMean = this.students.map(a => a.calculateMean()).reduce((a, b) => a + b, 0);
    //     return sumMean / this.students.length;
    // }

    addMark(newMark) {

        if (newMark >= 0 && newMark <= 10) {
            this.marks.push(newMark);
        } else {
            console.log('errore, voto non valido');
        }
    }

    // addTutee(newTutee) {
    //     if (newTutee) {
    //         t
    //     }
    // }

    toString() {
        const scheda = super.toString() +
                       "media: " + this.calculateMean();                    
    
        return scheda;
    }

}