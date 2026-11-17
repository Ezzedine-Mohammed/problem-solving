/*
  Valid Palindrome
  المستوى: Easy — الموضوع: Two Pointers + Strings

  وصف المسألة:
  لديك نص s. أرجع true إذا كان النص Palindrome (يُقرأ من البداية كما يُقرأ من النهاية)، و false إذا لم يكن.
  عند المقارنة:
  - الحروف الإنجليزية لا يُفرَّق فيها بين الكبير والصغير (A = a).
  - الأرقام 0-9 تُحسب كما هي.
  - أي رمز آخر يُتجاهل تمامًا: المسافات، علامات الترقيم، _ ، : ، , ، ? ... إلخ.

  أمثلة:
  "A man, a plan, a canal: Panama" → true   (amanaplanacanalpanama)
  "race a car"                     → false  (raceacar ليست متطابقة)
  "Was it a car or a cat I saw?"   → true
  "0P"                             → false  (الرقم 0 لا يساوي الحرف p)
  "ab_a"                           → true   (_ يُتجاهل → aba)
  "12321"                          → true
  " "                              → true   (لا يبقى شيء للمقارنة)
  ""                               → true

  الشروط:
  1) طول النص من 0 إلى 2 × 10^5، ويحتوي أحرف ASCII قابلة للطباعة فقط.
  2) المطلوب O(n) وقت و O(1) مساحة إضافية.
  3) ممنوع بناء نص أو مصفوفة جديدة "منظفة": لا replace، لا split/reverse/join، لا filter،
     ولا تجميع الحروف في متغير جديد. التعامل مع النص الأصلي مباشرة.
  4) الدالة تُرجع boolean فقط.
*/

function isAlNum(code) {
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

function isPalindrome(s) {
  // numbers (0-9) codes => 48 - 57
  // capital latter (A-Z) code => 65 - 90
  // small latter (a-z) code => 97 - 122

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    while (i < j && !isAlNum(s.charCodeAt(i))) i++;
    while (i < j && !isAlNum(s.charCodeAt(j))) j--;

    if (i >= j) {
      return true;
    }

    if (s[i].toLowerCase().charCodeAt(0) !== s[j].toLowerCase().charCodeAt(0)) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome("Was it a car or a cat I saw?")); // true
// console.log(isPalindrome("0P")); // false
// console.log(isPalindrome("ab_a")); // true
// console.log(isPalindrome("12321")); // true
// console.log(isPalindrome(" ")); // true
// console.log(isPalindrome("")); // true
// console.log(isPalindrome("a..a")); //  true
// console.log(isPalindrome("?!")); //  true
