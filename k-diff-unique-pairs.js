// K-Diff Unique Pairs

// وصف المسألة:
// لديك مصفوفة من الأعداد الصحيحة nums وعدد صحيح k. مهمتك هي حساب عدد الأزواج الفريدة (a, b) التي يكون فيها الفرق بين العددين يساوي k بالضبط، أي |a - b| = k.
// يجب أن يأتي العددان من موقعين مختلفين في المصفوفة (i ≠ j). الزوج (1, 3) والزوج (3, 1) يُعتبران زوجًا واحدًا. وإذا تكرر الزوج نفسه بالقيم نفسها أكثر من مرة فهو يُحسب مرة واحدة فقط.

// Example 1:
// nums = [3, 1, 4, 1, 5], k = 2 → 2
// الزوجان هما (1, 3) و(3, 5). العدد 1 موجود مرتين، لكن الزوج (1, 3) يُحسب مرة واحدة.

// Example 2:
// nums = [1, 2, 3, 4, 5], k = 1 → 4
// الأزواج: (1, 2) و(2, 3) و(3, 4) و(4, 5)

// Example 3:
// nums = [1, 3, 1, 5, 4], k = 0 → 1
// الزوج الوحيد هو (1, 1) لأن العدد 1 يظهر في موقعين مختلفين.

// Example 4:
// nums = [1, 2, 3], k = 5 → 0

// الشروط:

// المصفوفة غير مرتبة، وقد تحتوي على أرقام مكررة وأرقام سالبة.
// k >= 0 دائمًا.
// المصفوفة الفارغة أو التي فيها عنصر واحد تُرجع 0.
// المطلوب: تعقيد زمني O(n)، أي بدون ترتيب المصفوفة.

function kDiff(arr, k) {
  if (arr.length < 2) return 0;
  const arr2 = new Set(arr);
  const counts = new Map();
  for (const num of arr) counts.set(num, (counts.get(num) || 0) + 1);
  let length = 0;
  let numbers = [];
  for (const num of arr2) {
    if (k === 0 && counts.get(num) > 1) {
      numbers.push([num, num]);
      length++;
    } else if (k > 0 && arr2.has(num + k)) {
      numbers.push([num, num + k]);
      length++;
    }
  }
  return {
    length,
    numbers,
  };
}

// console.log(kDiff([3, 1, 4, 1, 5], 2)); // { length: 2, numbers: [[3, 5], [1, 3]] }
// console.log(kDiff([1, 2, 3, 4, 5], 1)); // { length: 4, numbers: [[1, 2], [2, 3], [3, 4], [4, 5]] }
// console.log(kDiff([1, 3, 1, 5, 4], 0)); // { length: 1, numbers: [[1, 1]] }
// console.log(kDiff([1, 2, 3], 5)); // { length: 0, numbers: [] }
