function multiply_array(array){
    let newArray = []; // new array to hold answer

    for (let i =0; i < array.length; i++){ // iterates over the array length and progresses i over each element
        if (array[i] > 0) { // if the element in array is greater than 0
            newArray.push(array[i] * 2); // times that element by 2 and push it to the new array
        }
    }
    return newArray; // return the answer, or newArray
}



function string_processor(sentence){
    let newSentence = {} // new dictionary to hold answer
    let split = sentence.toLowerCase().split(" "); // turning passed through sentence into lowercase and splitting it by each word


    for (let sent of split){ // iterates through each word in split
        if(sent) { // if split is not empty
            newSentence[sent] = (newSentence[sent] || 0) + 1 // takes each word(sent) and initializes it to 0 if not used before and adds 1; If used before, adds 1.
        }
    }
    return newSentence;
}



function average_grades(students){
    let gradesum = {}; //keep grade of total grades per subject
    let subjectcount = {}; //keep track of how many times subject had a grade

    students.forEach(function(student) { //iterates over each student in the array of students
        for (let subject in student.grades){
            if (!(subject in gradesum)){ //if subject is not in gradesum, it sets it to 0 and keeps the value
                gradesum[subject] = 0;
                subjectcount[subject] = 0;
            }
            gradesum[subject] += student.grades[subject]; // adds the grade of each subjet to the gradesum counter
            subjectcount[subject]++; // iterates through the subjects and keeps track of how many there are
        }
    });

    let averagegrade = {}; // dictionary to hold the average for each subject
    for (let subject in gradesum){ // each subject in the gradesum count
        averagegrade[subject] = gradesum[subject] / subjectcount[subject]; // takes the total gradesum and divides it by total subjectcount to get average grade
    }
    return averagegrade; // returns the answer, or the average grade
}




async function user_data(userID, timeout = 3000){
    // I have no clue where to even start this function at !! I am not experienced with async functions or retrieving an API in them.
    // I would not want to attempt to do this problem with the help of AI since I have no idea and give off any type of false hope, so I hope this is understandable! :)
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



