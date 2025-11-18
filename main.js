// console.log('object oriented programming')

// //const stefania = {name: "stefania", surname: "dagnino", marks: [10, 9, 7, 8, 8]};
const stefania = new Student("stefania", "dagnino", [10, 9, 7, 8, 8]);

// //const leonardo = {name: "leonardo", surname: "silva", marks: [3, 4, 4, 2, 5]};
const leonardo = new Student("leonardo", "silva", [3, 4, 4, 2, 5]);

const salma = new Student("salma", "sobhi", []);

// // function calculateStudentMean(student){

// //     let sum = 0;

// //     for (let i = 0; i < student.marks.length; i++) {
// //         const mark = student.marks[i];
        
// //         sum += mark;
// //     }

// //     const mean = sum / student.marks.length;

// //     return mean;

// // }

// console.log(calculateStudentMean(stefania));
// console.log(calculateStudentMean(leonardo));

// console.log(stefania.calculateMean())
// console.log(leonardo.calculateMean())
// console.log(salma.calculateMean())

// // function addMark(student, newMark) {

// //     if(newMark >= 0 && newMark <= 10){
// //         student.marks.push(newMark);
// //     } else {
// //         console.log('errore, voto non valido');
// //     }
    
// // }

// // addMark(stefania, 10);
// // console.log(calculateStudentMean(stefania));

// // addMark(leonardo, 20);
// // console.log(calculateStudentMean(leonardo));

// stefania.addMark(10);
// console.log(stefania.calculateMean());

// leonardo.addMark(20);
// console.log(leonardo.calculateMean());

// salma.addMark(8);
// console.log(salma.calculateMean());

// // function creaScheda(student) {

// //     const scheda = "nome: " + student.name + "\n" +
// //                    "cognome: " + student.surname + "\n" +
// //                    "media: " + calculateStudentMean(student)
    
// //     return scheda;
    
// // }
// // console.log(creaScheda(stefania));
// // console.log(creaScheda(leonardo));

// console.log(stefania.toString());
// console.log(leonardo.toString());
// console.log(salma.toString());

// console.log("///////////////////////////////////");
// console.log("////////ESERCIZIO RETTANGOLO///////");
// console.log("///////////////////////////////////");

// const rettangolo01 = new Rettangolo(30, 20 , 'rosso');
// console.log(rettangolo01.calculateArea());
// console.log(rettangolo01.calculatePerimeter());
// console.log(rettangolo01.toString());

const andrea = new Teacher("andrea", "asioli", [stefania, leonardo, salma]);

const eros = new StudentTutor("eros", "balan", [10, 9, 7, 8, 8], leonardo);

console.log(stefania.toString());
console.log(andrea.toString());
console.log(eros.toString());

eros.addMark(7);
console.log(eros.calculateMean());
console.log(leonardo.calculateMean());

leonardo.addMark(10);
leonardo.addMark(9);
leonardo.addMark(9.5);
leonardo.addMark(8);
console.log(leonardo.calculateMean());
console.log(eros.calculateMean());

