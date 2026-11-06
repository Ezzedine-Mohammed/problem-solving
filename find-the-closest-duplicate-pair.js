// Find the Closest Duplicate Pair

// وصف المسألة:
// لديك مصفوفة أعداد صحيحة. المطلوب إيجاد موقعَي أقرب عنصرين متساويين في القيمة،
// أي الزوج [i, j] الذي تكون فيه المسافة j - i أصغر ما يمكن.

// Example 1:
// arr = [4, 7, 2, 4, 2, 7] → [2, 4]
// - القيمة 4 موجودة عند الموقعين 0 و3، والمسافة بينهما 3.
// - القيمة 7 موجودة عند الموقعين 1 و5، والمسافة بينهما 4.
// - القيمة 2 موجودة عند الموقعين 2 و4، والمسافة بينهما 2.

// Example 2:
// arr = [9, 9, 2, 2] → [0, 1]
// الزوجان (9,9) و(2,2) بنفس المسافة 1، فنعيد صاحب أصغر Index أول.

// Example 3:
// arr = [1, 2, 3] → [-1, -1]

// الشروط:

// أعد مصفوفة تحتوي على الموقعين [i, j]، بحيث i < j.
// يجب أن تكون قيمة العنصرين متساوية.
// يجب أن تكون المسافة j - i أصغر مسافة ممكنة بين أي عنصرين متساويين.
// إذا لم يوجد أي عنصر مكرر، أعد [-1, -1].
// إذا كانت المصفوفة فارغة أو تحتوي على عنصر واحد، أعد [-1, -1].
// يمكن أن تحتوي المصفوفة على أعداد موجبة أو سالبة أو أصفار.
// إذا وُجد أكثر من زوج يحقق أصغر مسافة، أعد الزوج الذي يمتلك أصغر Index أول.
// المخرجات المطلوبة: مصفوفة تحتوي على موقعَي العنصرين، وليس قيمتيهما.

function closestDuplicate(arr) {
  if (arr.length <= 1) {
    return [-1, -1];
  }

  let data = {};
  let closestPair = [-1, -1];
  let currentDistance;
  let closestDistance = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (!data[arr[i]]) {
      data[arr[i]] = [];
    }

    data[arr[i]].push(i);
  }

  for (let num in data) {
    if (data[num].length >= 2) {
      const arr2 = data[num];

      for (let i = arr2.length - 1; i > 0; i--) {
        currentDistance = arr2[i] - arr2[i - 1];

        if (currentDistance < closestDistance) {
          closestDistance = currentDistance;
          closestPair = [arr2[i - 1], arr2[i]];
        } else if (currentDistance === closestDistance) {
          if (closestPair[0] > arr2[i - 1]) {
            closestPair = [arr2[i - 1], arr2[i]];
          }
        }
      }
    }
  }
  return closestPair;
}

// console.log(closestDuplicate([4, 7, 2, 4, 2, 7])); // [2, 4]
// console.log(closestDuplicate([5, 3, 8, 5, 2, 8, 3, 8, 2])); // [5, 7]
// console.log(closestDuplicate([1, 1, 1])); // [0, 1]
// console.log(closestDuplicate([9, 9, 2, 2])); // [0, 1]
// console.log(closestDuplicate([1, 1, 2, 2])); // [0, 1]
// console.log(closestDuplicate([1, 2, 3])); // [-1, -1]
// console.log(closestDuplicate([])); // [-1, -1]
