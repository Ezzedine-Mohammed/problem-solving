// Longest Substring Without Repeating Characters

// وصف المسألة:
// لديك نص (string). المطلوب إيجاد أطول جزء متصل من النص لا يتكرر فيه أي حرف.
// أول ما يظهر حرف مكرر تنكسر السلسلة الحالية.
// المسافة تُعتبر حرفًا، والحرف الكبير والحرف الصغير حرفان مختلفان.

// Example 1:
// text = "abcabcbb" → "abc"

// Example 2:
// text = "pwwkew" → "wke"
// "pwke" ليس Substring لأن أحرفه غير متصلة في النص الأصلي.

// Example 3:
// text = "dvdf" → "vdf"

// Example 4:
// text = "aAbBcC" → "aAbBcC"

// الشروط:

// يجب أن تكون الأحرف متصلة في النص الأصلي (Substring).
// لا يُسمح بتكرار أي حرف داخل الجزء المختار.
// إذا وُجد أكثر من جزء بالطول الأقصى نفسه، أعد الجزء الذي يبدأ عند أصغر Index.
// إذا كان النص فارغًا، أعد نصًا فارغًا "".
// الأحرف الكبيرة والصغيرة مختلفة، أي إن "A" و"a" لا يُعتبران مكررين.

function longestUniqueSubstring(text) {
  let currentSubstring = "";
  let longestSubstring = "";
  for (let i = 0; i < text.length; i++) {
    if (!currentSubstring.includes(text[i])) {
      currentSubstring = currentSubstring.concat(text[i]);
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
    } else {
      let startSlice = currentSubstring.indexOf(text[i]);
      currentSubstring = currentSubstring.slice(startSlice + 1);
      currentSubstring = currentSubstring.concat(text[i]);
    }
  }
  return longestSubstring;
}

// console.log(longestUniqueSubstring("abcabcbb")); // "abc"
// console.log(longestUniqueSubstring("bbbbb")); // "b"
// console.log(longestUniqueSubstring("pwwkew")); // "wke"
// console.log(longestUniqueSubstring("dvdf")); // "vdf"
// console.log(longestUniqueSubstring("abba")); // "ab"
// console.log(longestUniqueSubstring("aAbBcC")); // "aAbBcC"
// console.log(longestUniqueSubstring("")); // ""
