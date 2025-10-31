const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log("Unique Array:", uniqueArr);

const doubledArr = uniqueArr.map(x => x * 2);
console.log("Doubled Array:", doubledArr);