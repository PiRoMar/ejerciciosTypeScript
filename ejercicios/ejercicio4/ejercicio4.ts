/*
Given two positive integers n and p, we want to find a positive integer k, 
if it exists,such that the sum of the digits of n raised to consecutive
powers starting from p is equal to k * n.
*/

export function beautifulNumbers(num1:number, num2:number): number {

    var arrayNum: number[]= [];
    var exponente: number = num2;

    arrayNum = num1.toString()
                    .split("")
                    .map(digit=>(parseInt(digit,10)));

                    
    for (let i:number=0;i<arrayNum.length;i++){
        arrayNum[i]= arrayNum[i]**exponente;
        exponente++;
    } 

    const suma: number= arrayNum.reduce((acumulador,actual)=>acumulador+actual,0);
    const multiplicacion: number = num1*num2;

    if (suma===multiplicacion){
        return num2;
    }
    
    return -1;  
}

console.log(beautifulNumbers(89, 1)); // → 1
console.log(beautifulNumbers(695, 2)); // → 2
console.log(beautifulNumbers(48, 2)); // -1
console.log(beautifulNumbers(88, 3)); // -1