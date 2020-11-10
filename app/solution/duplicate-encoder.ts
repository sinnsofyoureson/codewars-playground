/*
 * Duplicate Encoder
 *
 * The goal of this exercise is to convert a string to a new string where each
 * character in the new string is "(" if that character appears only once in the
 * original string, or ")" if that character appears more than once in the original
 * string. Ignore capitalization when determining if a character is a duplicate.
 *
 * Examples
 * "din"      =>  "((("
 * "recede"   =>  "()()()"
 * "Success"  =>  ")())())"
 * "(( @"     =>  "))(("
 * Notes
 *
 * Assertion messages may be unclear about what they display in some languages.
 * If you read "...It Should encode XXX", the "XXX" is the expected
 * result, not the input!
 */

export const duplicateEncode = (word: string) => {
  const arr = word.toLowerCase().split('');
  const uniqueCharacters = new Map<string, number>()

  for (const c of arr) {
    const appears = uniqueCharacters.get(c);
    if (appears) {
      uniqueCharacters.set(c, appears + 1);
    } else {
      uniqueCharacters.set(c, 1);
    }
  }

  return arr.map(c => uniqueCharacters.get(c) === 1 ? '(' : ')').join('')
}
