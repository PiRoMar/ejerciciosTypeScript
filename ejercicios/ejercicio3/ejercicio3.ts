/*In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number.*/

export function orderNumbers(cc: string): string {   
    
    const stringNums: string [] = cc.trim().split(" ");

    const numArray: number []= stringNums.map(num=>parseInt(num,10));

    numArray.sort((a,b)=>b-a);

    const resultA: number []= [];
    resultA.push(numArray[0]);
    resultA.push(numArray[numArray.length-1]);

    const resultado: string =  resultA.join(" ");
    
    return resultado;                     
    
}

console.log(orderNumbers("10 4 -5 -10 42 8"));
console.log(orderNumbers("-1 14 -5 12 23 0"));
console.log(orderNumbers("-9 5 15 -1 12 2"));