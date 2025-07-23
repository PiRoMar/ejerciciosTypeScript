/*Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string (alphabetical ascending), the longest possible, 
containing distinct letters - each taken only once -
 coming from s1 or s2.*/
 
export function mergeStrings(string1: string, string2: string): string {
  const combinada: string = string1 + string2;

  const caracteresUnicos: Set<string> = new Set(combinada);

  const arrayOrdenado: string[] = Array.from(caracteresUnicos).sort();

  return arrayOrdenado.join("");
}

console.log(mergeStrings('caracola','amigo'));