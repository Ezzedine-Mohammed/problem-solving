// Unique Pairs with Target Sum

// وصف المسألة:
// لديك مصفوفة أعداد صحيحة nums وعدد صحيح target. احسب عدد الأزواج الفريدة (a, b) بحيث a + b = target، والعددان من موقعين مختلفين (i ≠ j).

// Example 1:
// nums = [1, 5, 3, 3, 4, 2, 4], target = 6 → 3
// الأزواج: (1,5) و(2,4) و(3,3)

// Example 2:
// nums = [3, 4, 2, 4], target = 6 → 1
// الزوج: (2,4)؛ والزوج (3,3) غير موجود لأن 3 تظهر مرة واحدة فقط

// Example 3:
// nums = [-1, 7, 0, 6, -1, 7], target = 6 → 2
// الأزواج: (-1,7) و(0,6)

// Example 4:
// nums = [1, 2, 3], target = 10 → 0

// الشروط:

// المصفوفة غير مرتبة، وقد تحتوي مكررات وأعدادًا سالبة.
// مصفوفة فارغة أو بعنصر واحد → 0.
// المطلوب O(n) بدون ترتيب.
// الدالة تُرجع رقمًا واحدًا (عدد الأزواج).

function uniquePairs(arr, target) {
  if (arr.length < 2) {
    return 0;
  }
  let map = new Map();
  let length = 0;
  arr.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  for (let [num, count] of map) {
    if (num * 2 === target && count > 1) {
      length++;
    } else if (map.has(target - num) && num > target - num) {
      length++;
    }
  }
  return length;
}

// console.log(uniquePairs([1, 5, 3, 3, 4, 2, 4], 6)); // 3
// console.log(uniquePairs([3, 4, 2, 4], 6)); // 1
// console.log(uniquePairs([-1, 7, 0, 6, -1, 7], 6)); // 2
// console.log(uniquePairs([1, 2, 3], 10)); // 0
// console.log(uniquePairs([1, 3, 3, 1], 6)); // 1
// console.log(uniquePairs([1, 1, 1, 1], 2)); // 1
// console.log(uniquePairs([-1, 7, 0, 6, -1, 7, 3, 3, 3, 3], 6)); // 3
// console.log(uniquePairs([], 6)); // 0
