/*There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations:
 plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand,
 the most inner function represents the right operand
Division should be integer division. 
For example, this should return 2, not 2.666666...*/

type Operation = (right: number) => number;

function zero(op?: Operation): number { return op ? op(0) : 0; }
function one(op?: Operation): number { return op ? op(1) : 1; }
function two(op?: Operation): number { return op ? op(2) : 2; }
function three(op?: Operation): number { return op ? op(3) : 3; }
function four(op?: Operation): number { return op ? op(4) : 4; }
function five(op?: Operation): number { return op ? op(5) : 5; }
function six(op?: Operation): number { return op ? op(6) : 6; }
function seven(op?: Operation): number { return op ? op(7) : 7; }
function eight(op?: Operation): number { return op ? op(8) : 8; }
function nine(op?: Operation): number { return op ? op(9) : 9; }

function plus(right: number): Operation {
  return (left: number) => left + right;
}

function minus(right: number): Operation {
  return (left: number) => left - right;
}

function times(right: number): Operation {
  return (left: number) => left * right;
}

function dividedBy(right: number): Operation {
  return (left: number) => Math.floor(left / right); // división entera
}

console.log(seven(times(five())));   //  must return 35
console.log(four(plus(nine())));     //  must return 13
console.log(eight(minus(three())));  //  must return 5;  
console.log(six(dividedBy(two())));  //  must return 3