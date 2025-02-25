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

let array = [1, 2, 3, 4, 5, -6, -7, -8,-9, 10]; // this is the array passed into my array_multiplication function.
let result = multiply_array(array);
console.log(result);

let sentence = "This is a sentence that is a sentence that is testing my sentence command out"; // this is used for my second word counter function.
let result2 = string_processor(sentence);
console.log(result2);



