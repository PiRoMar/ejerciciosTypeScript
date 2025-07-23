export function diceGame(roll:number[]): number{
  var resultado: number = 0;

  const count : Record <number, number> ={};
  for (const num of roll){
    count[num] =  (count[num]|| 0) + 1;
  }

  for (let i =0; i<=6;i++){
    if (count[i]>=3){
      if(i===1){
        resultado +=1000;
      }
      else{
        resultado += i*100;
      }
    count[i] -= 3;  
    }
  }

  resultado += (count[1] || 0) * 100;
  resultado += (count[5] || 0) * 50;
  return resultado;
}

console.log(diceGame([5, 1, 3, 4, 1])); // 250
console.log(diceGame([1, 1, 1, 3, 1])); // 1100
console.log(diceGame([2, 4, 4, 5, 4])); // 450
