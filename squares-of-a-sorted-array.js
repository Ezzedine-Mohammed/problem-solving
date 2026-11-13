/*
  Squares of a Sorted Array
  المستوى: Easy — الموضوع: Two Pointers
  التاريخ: 12/11/2026

  وصف المسألة:
  عندك مصفوفة أعداد صحيحة nums مرتبة تصاعديًا (قد تحتوي سالبة وأصفارًا وموجبة).
  أرجِع مصفوفة جديدة فيها مربع كل عنصر، مرتبة تصاعديًا حسب قيمة المربعات.

  أمثلة:
  [-4, -1, 0, 3, 10]  → [0, 1, 9, 16, 100]
  [-7, -3, 2, 3, 11]  → [4, 9, 9, 49, 121]
  [1, 2, 3]           → [1, 4, 9]
  [-5, -3, -1]        → [1, 9, 25]
  [-15, 5]            → [25, 225]
  []                  → []

  الشروط:
  1) الطول من 0 إلى 10^4، والمصفوفة مرتبة تصاعديًا دائمًا.
  2) القيم بين -10^4 و 10^4، وقد تتكرر.
  3) المطلوب O(n): ممنوع sort() أو أي ترتيب بعد التربيع.
  4) لا تعدّل المصفوفة الأصلية، وأرجِع مصفوفة جديدة.
*/

function sortedSquares(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let pos = nums.length - 1; // مكان الكتابة في الناتج: يبدأ من الآخر

  while (left <= right) {
    const leftSq = nums[left] ** 2;
    const rightSq = nums[right] ** 2;

    if (leftSq > rightSq) {
      result[pos] = leftSq;
      left++;
    } else {
      result[pos] = rightSq;
      right--;
    }
    pos--;
  }

  return result;
}

// console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
// console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
// console.log(sortedSquares([1, 2, 3])); // [1, 4, 9]
// console.log(sortedSquares([-5, -3, -1])); // [1, 9, 25]
// console.log(sortedSquares([-15, 5])); // [25, 225]
// console.log(sortedSquares([-7, -3, 1, 2, 10])); // [1, 4, 9, 49, 100]
// console.log(sortedSquares([])); // []
