/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  // Your code here
  if (typeof order !== 'string') {
    return -1;
  }
  else {
    let finalOrder = order.trim();

    if (finalOrder.length == 0) {
      return 0;
    }
    else {
      return finalOrder.length;
    }

  }


}

export function shoutChaiOrder(order) {
  // Your code here
  if (typeof order !== "string") {
    return "";
  }
  else {
    let finalOrder = order.trim();
    return finalOrder.toUpperCase()
  }
}

export function whisperChaiOrder(order) {

  if (typeof order !== 'string') {
    return "";
  }
  else {
    let finalOrder = order.trim()

    if (finalOrder.length == 0) {
      return "";
    }
    else {
      return finalOrder.toLowerCase()
    }
  }
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== 'string' || typeof ingredient != 'string') {
    return false
  }
  else {
    let finalOrder = order.trim().toLowerCase()
    let finalIngredient = ingredient.trim().toLowerCase()

    if (finalOrder.length == 0 && finalIngredient.length == 0) {
      return false;
    }
    else if (finalOrder.includes(finalIngredient)) {
      return true;
    }
    else {
      return false;
    }
  }
}

export function getFirstAndLastChar(order) {
  if (typeof order !== 'string') {
    return null;
  }
  else {
    let finalOrder = order.trim()
    if (finalOrder.length == 0) {
      return null;
    }
    else {
      let firstChar = finalOrder.charAt(0)
      let lastChar = finalOrder.at(-1)
      return { 'first': firstChar, "last": lastChar }
    }
  }

}
