
function dividenums(num1 , num2) {
    return new Promise((resolve,reject) => {

        if (num2 === 0){ //=== is called strict equality. === checks both value AND data type:
            reject("Error:Cannot divide by zero");
        } else {
            let result = num1 / num2;
            resolve(result);
        }
    
    });
}



dividenums(10,2)
    .then(result => {
        console.log("Result-",result);
    })
    .catch(error => {
        console.log("Error-",error);
    });
 
    dividenums(200,4)
    .then(result => {
        console.log("Result-",result);
    })
    .catch(error => {
        console.log("Error",error);
    });

dividenums(45, 0)
    .then(result => {
        console.log("Result:",result);
    })
    .catch(error => {
        console.log("Error:",error);
    });