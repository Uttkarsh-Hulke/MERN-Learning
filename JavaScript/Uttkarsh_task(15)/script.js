//create array
let numbers=[4,5,6,8,1,6,12];
console.log("Array is "+ numbers)
//Max function
function findMax(array){
let max=array[0];
for(let i = 0; i < array.length; i++){
    if (array[i]>max){
        max = array[i];
    }
}
return max;
}




//========================================//
// Sum Function
function calculateSum(array){
    let sum =0;
for(let i = 0; i < array.length; i ++){
sum = sum + array[i];

}
return sum;
}



//======================================================//
// odd number count
function countOddNumbers(array){
let count = 0;
for(let i = 0 ; i < array.length;  i++){
    if( array[i]%2 !== 0){ // use !== not != 
        count++;
    }
}
return count;
}
//for each
numbers.forEach((number) => {
    console.log(number);
});


console.log("Maximum in array is " + findMax(numbers));
console.log("The total sum is " + calculateSum(numbers));
console.log("Count of ODD numbers is " + countOddNumbers(numbers));
