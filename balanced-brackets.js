/*
  Problem Solving — Sunday, 08/11/2026
  Balanced Brackets
  Level: Easy — Topic: Stack

  وصف المسألة:
  نص str يحتوي على أقواس () و [] و {}، وقد يحتوي حروفًا وأرقامًا ومسافات (تُتجاهل).
  أرجع true إذا كانت الأقواس متوازنة، و false إذا لم تكن.
  متوازنة تعني:
  - كل قوس مفتوح يُغلق بقوس من نفس النوع.
  - الإغلاق بالترتيب الصحيح (آخر قوس فُتح هو أول قوس يُغلق).
  - لا يوجد قوس إغلاق ليس قبله قوس فتح.

  Examples:
  "{[()]}"     -> true
  "a(b[c]d)e"  -> true
  "([)]"       -> false
  "(("         -> false
  "())("       -> false
  "hello"      -> true
  ""           -> true

  الشروط:
  1) طول النص من 0 إلى 10^4.
  2) أي حرف غير الأقواس الستة يُتجاهل.
  3) المطلوب حل بتعقيد O(n) وبمرور واحد على النص.
  4) الدالة تُرجع boolean فقط.
*/

function isBalanced(str) {
  let brackets = new Map();
  brackets.set("(", ")");
  brackets.set(")", "(");
  brackets.set("[", "]");
  brackets.set("]", "[");
  brackets.set("{", "}");
  brackets.set("}", "{");

  let closingBrackets = new Set();
  closingBrackets.add(")");
  closingBrackets.add("]");
  closingBrackets.add("}");

  let openingBrackets = new Set();
  openingBrackets.add("(");
  openingBrackets.add("[");
  openingBrackets.add("{");

  let newStrOpen = [];

  for (let i = 0; i < str.length; i++) {
    if (!brackets.has(str[i])) {
      continue;
    } else if (openingBrackets.has(str[i])) {
      newStrOpen.push(str[i]);
    } else if (closingBrackets.has(str[i]) && newStrOpen.length === 0) {
      return false;
    } else if (str[i] === brackets.get(newStrOpen[newStrOpen.length - 1])) {
      newStrOpen.pop();
    } else {
      return false;
    }
  }

  return newStrOpen.length === 0;
}

// Tests
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("a(b[c]d)e")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("((")); // false
console.log(isBalanced("())(")); // false
console.log(isBalanced("hello")); // true
console.log(isBalanced("")); // true
console.log(isBalanced("(First){Second}[third]")); // true
console.log(isBalanced("()(")); // false
console.log(isBalanced("()((")); // false
