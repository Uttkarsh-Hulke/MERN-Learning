//sum of number
let number = 152;
let sum = 0;
for(let i = 1; i <= number; i++){
    sum+=i; // or sum = sum + i;
}
console.log("The sum of n number is "+ sum)



//=============================//
//table of number
let numbertable = 19;
console.log("The Table of "+ numbertable + " is")

for(let i = 1; i<=10;i++){

    numbertable * i;

console.log(numbertable + " x " + i + " = " + numbertable * i);
}

//=================================//
//prime or not
let numberP = 57;
let isPrime = true;
for( let i = 2; i < numberP; i++)
   {
if(numberP%i==0){
    isPrime = false;
   }
}
console.log("The Number " + numberP + " is Prime : " + isPrime )

//factorial 
//Don't start from 0, because:
//number % 0 is invalid.
let numberF = 17;
for(let i = 1; i <=numberF; i++){
if (numberF%i==0){
console.log(i);
}   
}


// Sum of digit
let numberSD = 8789;
let temp = numberSD;
let digitSum = 0;
while (temp > 0){
let digit = temp % 10;
digitSum = digitSum + digit;
temp = Math.floor(temp/10);

}
console.log("The sum of digit is : " + digitSum )



// armstrong nno.
let numberARM=153;
let armstrongSum = 0;
let digits = 3;
temp = numberARM;
while (temp > 0) {
let digit = temp % 10;
armstrongSum = armstrongSum + digit ** digits;
temp = Math.floor(temp / 10);
}
if (armstrongSum == numberARM) {
console.log(numberARM + " is an Armstrong number.");
}else {
console.log(numberARM + " is not an Armstrong number.");
}
