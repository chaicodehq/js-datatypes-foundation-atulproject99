/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Your code here
  //    * Data format: thali = {
  //  *   name: "Rajasthani Thali",
  //  *   items: ["dal baati", "churma", "papad"],
  //  *   price: 250,
  //  *   isVeg: true
  //  * }
  //    *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
  //  *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
  //  *      - name ko UPPERCASE karo, price ko 2 decimal places tak
  //  *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
  //  *      - Agar thali object nahi hai ya required fields missing hain, return ""
  //  *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
  //  *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
  //  *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"

  /// Validation 
  if (typeof thali !== 'object' || thali == null) {
    return "";
  }
  else {
    if (typeof thali.name !== 'string' || thali.name.length == 0 || !Array.isArray(thali.items) || thali.items.length == 0 || typeof thali.price !== "number" || !Number.isFinite(thali.price) || typeof thali.isVeg !== 'boolean' || thali.isVeg == null) return "";
    else {
      return `${thali.name.toUpperCase()} (${thali.isVeg ? 'Veg' : "Non-Veg"}) - Items: ${thali.items.join(", ")} - Rs.${thali.price.toFixed(2)}`;
    }

  }

}

export function getThaliStats(thalis) {
  // Your code here
  //    * Data format: thali = [{
  //  *   name: "Rajasthani Thali",
  //  *   items: ["dal baati", "churma", "papad"],
  //  *   price: 250,
  //  *   isVeg: true
  //}]
  //    *      - Array of thali objects ka stats nikalo
  //  *      - .filter() se veg/non-veg count
  //  *      - .reduce() se average price
  //  *      - Math.min/Math.max se cheapest/costliest
  //  *      - .map() se saare names
  //  *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
  //  *                  cheapest (number), costliest (number), names (array) }
  //  *      - Agar thalis array nahi hai ya empty hai, return null
  //  *
  if (!Array.isArray(thalis) || thalis.length == 0) return null;
  else {
    const totalThalis = thalis.length;
    const vegCount = thalis.filter((e) => e.isVeg).length;
    const nonVegCount = thalis.filter((e) => !e.isVeg).length;
    const names = thalis.map((e) => e.name);
    const cheapest = Math.min(...thalis.map((e) => e.price));
    const costliest = Math.max(...thalis.map((e) => e.price));
    const avgPrice =
      (thalis.reduce((acc, thali) => acc + thali.price, 0) /
        thalis.length).toFixed(2);

    return {
      totalThalis,
      vegCount,
      nonVegCount,
      avgPrice,
      cheapest,
      costliest,
      names
    };
  }
}

export function searchThaliMenu(thalis, query) {
  //    * Data format: thali = [{
  //  *   name: "Rajasthani Thali",
  //  *   items: ["dal baati", "churma", "papad"],
  //  *   price: 250,
  //  *   }]
  // Your code here
  //    *      - .filter() + .includes() se search karo (case-insensitive)
  //  *      - Thali match karti hai agar name ya koi bhi item query include kare
  //  *      - Agar thalis array nahi hai ya query string nahi hai, return []
  //  *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
  if (!Array.isArray(thalis) || thalis.length == 0 || typeof query !== 'string' || query.length == 0) return [];
  return thalis.filter((e) => e.name.toLowerCase().includes(query.toLowerCase()) || e.items.some(item =>
    item.toLowerCase().includes(query.toLowerCase())
  ))
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here

  //  *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
  //  *      - Format:
  //  *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
  //  *      - Line item: "- {thali name} x Rs.{price}"
  //  *      - customerName UPPERCASE mein
  //  *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
  if (!Array.isArray(thalis) || thalis.length == 0 || typeof customerName !== 'string' || customerName.length == 0) return "";
  const totalAmount = thalis.reduce((acc, currentThali) => acc + currentThali.price, 0);

  return `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${thalis.map((e) => `- ${e.name} x Rs.${e.price}`).join("\n")}\n---\nTotal: Rs.${totalAmount}\nItems: ${thalis.length}`;

}
