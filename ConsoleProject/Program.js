
const removeDuplicates = (array) => {
    return [...new Set(array)];
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
