// Find the Equilibrium Index

// وصف المسألة:
// لديك مصفوفة تحتوي على مجموعة من الأعداد الصحيحة.
// المطلوب إيجاد أول Index يكون فيه مجموع العناصر الموجودة على يساره مساويًا لمجموع العناصر الموجودة على يمينه.
// نسمي هذا الموقع Equilibrium Index.

// Example 1:
// arr = [1, 7, 3, 6, 5, 6] → 3
// يسار الموقع 3: 1 + 7 + 3 = 11، ويمينه: 5 + 6 = 11

// Example 2:
// arr = [2, 1, -1] → 0
// يسار الموقع 0 لا يوجد شيء (0)، ويمينه: 1 + (-1) = 0

// Example 3:
// arr = [1, 2, 3] → -1

// الشروط:

// يجب إرجاع أول Index يحقق الشرط.
// إذا لم يوجد أي Index مناسب، أعد -1.
// إذا كانت المصفوفة فارغة، أعد -1.
// إذا احتوت المصفوفة على عنصر واحد فقط، أعد 0.
// يمكن أن تحتوي المصفوفة على أعداد موجبة أو سالبة أو أصفار.
// لا يدخل العنصر الحالي ضمن مجموع العناصر الموجودة على يساره أو يمينه.

function equilibriumIndex(arr) {
  if (arr.length === 0) {
    return -1;
  } else if (arr.length === 1) {
    return 0;
  }

  let previousSum = 0;
  let sum = 0;
  let nextSum = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    nextSum[i] = sum;
    sum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (previousSum === nextSum[i]) {
      return i;
    }

    previousSum += arr[i];
  }

  return -1;
}

// console.log(equilibriumIndex([1, 7, 3, 6, 5, 6])); // 3
// console.log(equilibriumIndex([2, 1, -1])); // 0
// console.log(equilibriumIndex([1, 2, 3])); // -1
// console.log(equilibriumIndex([-1, -1, -1, 0, 1, 1])); // 0
// console.log(equilibriumIndex([0, 0, 0])); // 0
// console.log(equilibriumIndex([7])); // 0
// console.log(equilibriumIndex([])); // -1
