//crear mascara en string sustituyendo todos los caracteres, 
//menos los 4 ultimos por #

export function maskify(cc: string): string {
  const length = cc.length;

  if (length <= 4) {
    return cc;
  }

  const maskedPart = "#".repeat(length - 4);
  const visiblePart = cc.slice(-4);

  return maskedPart + visiblePart;
}

console.log(maskify("123456789"));    
console.log(maskify("hola"));        
console.log(maskify("56789"));        
console.log(maskify(""));  