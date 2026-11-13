/*
  Pair Sum Closest to Target
  المستوى: Medium — الموضوع: Two Pointers
  التاريخ: 13/11/2026

  وصف المسألة:
  عندك مصفوفة أعداد صحيحة nums مرتبة تصاعديًا، وعدد صحيح target.
  اختر عنصرين من موقعين مختلفين (i ≠ j) بحيث يكون مجموعهما أقرب ما يمكن إلى target،
  وأرجع هذا المجموع.
  إذا وُجد مجموعان بنفس البُعد عن target، أرجع الأصغر منهما.

  أمثلة:
  nums = [1, 3, 4, 7, 10],  target = 15   → 14   (4 + 10)
  nums = [-5, -2, 0, 3, 8], target = 1    → 1    (-2 + 3)
  nums = [1, 3, 6, 9],      target = 8    → 7    (7 و 9 بنفس البُعد، نرجع الأصغر)
  nums = [2, 5, 9],         target = 20   → 14
  nums = [-8, -3, -3, 1],   target = -20  → -11
  nums = [4, 6],            target = 0    → 10

  الشروط:
  1) الطول من 2 إلى 10^4، والمصفوفة مرتبة تصاعديًا دائمًا.
  2) القيم بين -10^4 و 10^4، وقد تتكرر.
  3) المطلوب O(n) وقت و O(1) مساحة إضافية:
     ممنوع Map و Set وأي مصفوفة جديدة، وممنوع حلقتان متداخلتان.
  4) لا تعدّل المصفوفة الأصلية، والدالة ترجع رقمًا واحدًا.
*/

function closestPairSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let best = nums[left] + nums[right];

  while (left < right) {
    const current = nums[left] + nums[right];

    // القرار 1: هل نحدّث أفضل مجموع؟
    const currentDiff = Math.abs(target - current);
    const bestDiff = Math.abs(target - best);
    if (
      currentDiff < bestDiff ||
      (currentDiff === bestDiff && current < best)
    ) {
      best = current;
    }

    // القرار 2: أي مؤشر يتحرك؟ (دائمًا يتحرك واحد)
    if (current === target) return target;
    if (current < target) left++;
    else right--;
  }

  return best;
}

// console.log(closestPairSum([-5, -2, 0, 3, 8], 1)); // 1
// console.log(closestPairSum([1, 3, 6, 9], 8)); // 7
// console.log(closestPairSum([1, 3, 4, 7, 10], 15)); // 14
// console.log(closestPairSum([2, 5, 9], 20)); // 14
// console.log(closestPairSum([-8, -3, -3, 1], -20)); // -11
// console.log(closestPairSum([4, 6], 0)); // 10
// console.log(closestPairSum([-1, 4, 6], 3)); // 3
// console.log(closestPairSum([1, 1, 4, 6], 3)); // 2
