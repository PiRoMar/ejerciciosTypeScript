export function duplicateCount(text: string): number {
  const lowerText = text.toLowerCase();
  const charMap: Record<string, number> = {};

  for (const char of lowerText) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  let count = 0;
  for (const key in charMap) {
    if (charMap[key] > 1) {
      count++;
    }
  }

  return count;
}

// Pruebas rápidas
console.log(duplicateCount("aA11"));      // 2
console.log(duplicateCount("abcde"));     // 0
console.log(duplicateCount("aabBcde"));   // 2
console.log(duplicateCount("112233"));    // 3