/**
 * 🎨 Rangoli Border Maker - String Transform
 *
 * Diwali aa rahi hai! Priya digital rangoli designs bana rahi hai terminal pe.
 * String transform methods use karke patterns banana hai.
 * Tu Priya ki madad kar!
 *
 * Methods to explore: .slice(), .split(), .join(), .replace(),
 *   .replaceAll(), .repeat()
 *
 * Functions:
 *
 *   1. repeatPattern(pattern, times)
 *      - .repeat(times) use karke pattern ko repeat karo
 *      - Agar pattern string nahi hai ya times positive integer nahi hai, return ""
 *      - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 *   2. extractRangoliCenter(design, start, end)
 *      - .slice(start, end) use karke rangoli ka center part nikalo
 *      - Agar design string nahi hai, return ""
 *      - Agar start/end numbers nahi hain, return ""
 *      - Example: extractRangoliCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 *   3. splitAndJoinRangoli(colorString, oldSep, newSep)
 *      - .split(oldSep) se tod aur .join(newSep) se jod
 *      - Separator change karna hai colors ke beech mein
 *      - Agar colorString string nahi hai, return ""
 *      - Example: splitAndJoinRangoli("red,blue,green", ",", " | ") => "red | blue | green"
 *
 *   4. replaceRangoliColor(design, oldColor, newColor)
 *      - .replaceAll() use karke ek color ko doosre se replace karo
 *      - Agar koi bhi param string nahi hai, return ""
 *      - Example: replaceRangoliColor("red-blue-red-green-red", "red", "pink")
 *                 => "pink-blue-pink-green-pink"
 *
 *   5. makeRangoliBorder(char, length)
 *      - .repeat() se char ko bahut baar repeat karo
 *      - Phir .slice(0, length) se exact length ka border banao
 *      - Agar char string nahi hai ya length positive number nahi hai, return ""
 *      - Example: makeRangoliBorder("*", 5) => "*****"
 *      - Example: makeRangoliBorder("=-", 7) => "=-=-=-="
 *
 * @example
 *   repeatPattern("*-", 4)                    // => "*-*-*-*-"
 *   extractRangoliCenter("***LOTUS***", 3, 8) // => "LOTUS"
 *   splitAndJoinRangoli("red,blue", ",", "-")  // => "red-blue"
 */
export function repeatPattern(pattern, times) {
  // Your code here
  let isString = typeof pattern === 'string'
  let turn = Number(times)
  if (isString && turn >= 0 && Number.isSafeInteger(turn)) {

    return pattern.repeat(turn);
  }
  else {
    return "";
  }
}

export function extractRangoliCenter(design, start, end) {
  let isString = typeof design === 'string'
  // Your code here
  if (!isString) {
    return "";
  }
  else {
    return design.slice(start, end);
  }

}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  // Your code here
  let isString = typeof colorString === 'string'
  if (isString) {
    let splitString = colorString.split(oldSep);
    return splitString.join(newSep);

  }
  return "";
}

export function replaceRangoliColor(design, oldColor, newColor) {
  // Your code here
  let isString = typeof design === 'string'

  if (isString && typeof oldColor == 'string' && typeof newColor == 'string') {
    return design.replaceAll(oldColor, newColor);
  }
  else {
    return "";
  }

}

export function makeRangoliBorder(char, length) {
  // Your code here
  let isString = typeof char === 'string'
  if (isString) {
    let newChar = char.repeat(100);
    if (length < 0) {
      return '';
    }
    else {
      return newChar.slice(0, length);
    }

  }
  else {
    return "";
  }

}
