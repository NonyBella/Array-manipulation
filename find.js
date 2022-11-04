function findItem(array, searchItem) {
    //Complete Implementation

    for (let i = 0; i < array.length; i++) {
        if(array[i] === searchItem) {
           return "YES";
        }
    }
   
    return "NO";
}

const item = 5;
const sampleArray = [1, 2, 3, 4, 5];

let result = findItem(sampleArray, item);
console.log(result);
result = findItem(sampleArray, 1);
console.log(result);
result = findItem(sampleArray, 6);
console.log(result);

