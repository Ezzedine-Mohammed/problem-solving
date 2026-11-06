// Longest Consecutive Sequence

// وصف المسألة:
// لديك مصفوفة غير مرتبة (Unsorted Array) من الأعداد الصحيحة. مهمتك أن تجد طول أطول سلسلة من الأعداد المتتالية (Consecutive Numbers) داخل المصفوفة.
// لا يشترط أن تكون الأعداد المتتالية متجاورة في مواقعها داخل المصفوفة الأصلية.

// Example 1:
// arr = [100, 4, 200, 1, 3, 2] → 4
// أطول سلسلة متتالية هي [1, 2, 3, 4]، وطولها 4.

// Example 2:
// arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] → 9
// أطول سلسلة هي [0, 1, 2, 3, 4, 5, 6, 7, 8].

// Example 3:
// arr = [10, 30, 20, 40] → 1

// الشروط:

// لا يشترط أن تكون المصفوفة مرتبة.
// قد تحتوي المصفوفة على أرقام مكررة.
// المصفوفة الفارغة تعيد 0.
// المطلوب تعقيد زمني متوسط O(n).

// time complexity O(n log n)
function longestConsecutiveSequence(arr) {
  if (arr.length === 0) return 0;

  let arr2 = [...arr];
  arr2.sort((a, b) => a - b);
  let currentLength = 1;
  let longestLength = 1;
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] === arr2[i - 1] + 1) {
      currentLength++;
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }

    if (arr2[i] > arr2[i - 1] + 1) {
      currentLength = 1;
    }
  }

  return longestLength;
}

// console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
// console.log(longestConsecutiveSequence([10, 30, 20, 40])); // 1
// console.log(longestConsecutiveSequence([])); // 0
// console.log(longestConsecutiveSequence([5])); // 1
// console.log(longestConsecutiveSequence([1, 2, 2, 3])); // 3
// console.log(longestConsecutiveSequence([10, 1, 2, 3, 4, 5])); // 5
// console.log(longestConsecutiveSequence([1, 1, 2, 2, 3, 3, 5, 5, 6])); // 3
// console.log(longestConsecutiveSequence([1, 2, 3, 3, 3, 3, 3, 10, 11, 12, 13])); // 4

// claude solution, time complexity = O(n)
// function longestConsecutiveSequence(arr) {
//   const numbers = new Set(arr);
//   let longestLength = 0;

//   for (const num of numbers) {
//     // نبدأ العد فقط من بداية سلسلة
//     if (!numbers.has(num - 1)) {
//       let currentNum = num;
//       let currentLength = 1;

//       // نتقدم ما دام الرقم التالي موجودًا
//       while (numbers.has(currentNum + 1)) {
//         currentNum++;
//         currentLength++;
//       }

//       longestLength = Math.max(longestLength, currentLength);
//     }
//   }

//   return longestLength;
// }
