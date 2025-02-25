function multiply_array(array){
    let newArray = [];

    for (let i =0; i < array.length; i++){
        if (array[i] > 0) {
            newArray.push(array[i] * 2);
        }
    }
    return newArray;
}



function string_processor(sentence){
    let newSentence = {}
    let split = sentence.toLowerCase().split(" ");


    for (let sent of split){
        if(sent) {
            newSentence[sent] = (newSentence[sent] || 0) + 1
        }
        else {
            newSentence[sent] = 1;
        }
    }
    return newSentence;
}



function average_grades(students){
    let gradesum = {}; //keep grade of total grades per subject
    let subjectcount = {}; //keep track of how many times subject had a grade

    students.forEach(function(student) { //iterates over each student in the array of students
        for (let subject in student.grades){
            if (!(subject in gradesum)){ //if subject is not in gradesum, set to 0 and add, otherwise just add
                gradesum[subject] = 0;
                subjectcount[subject] = 0;
            }
            gradesum[subject] += student.grades[subject];
            subjectcount[subject]++;
        }
    });

    let averagegrade = {};
    for (let subject in gradesum){
        averagegrade[subject] = gradesum[subject] / subjectcount[subject];
    }
    return averagegrade;
}


let array = [1, 2, 3, 4, 5, -6, -7, -8,-9, 10]; // this is the array passed into my array_multiplication function.
let result = multiply_array(array);
console.log("The array multiplying function returns", result); //output


let sentence = "This is a sentence that is a sentence that is testing my sentence command out"; // this is used for my second word counter function.
let result2 = string_processor(sentence);
console.log("The string processor function returns... \n", result2); //output


let students = [{ name: "Alice", grades: { math: 90, english: 85, science: 92 }} ,
    { name: "Bob", grades: { math: 75, english: 80, science: 85 }}] // this input is used for my average_grades function
let result3 = average_grades(students);
console.log("Given the parameters of students and their grades, the average of grade of each course was:", result3); // output



