// Longest Alternating Parity Sequence

// وصف المسألة:
// لديك مصفوفة أعداد صحيحة. المطلوب إيجاد أطول سلسلة من العناصر المتجاورة
// بحيث يتناوب فيها نوع العدد بين زوجي (even) وفردي (odd).
// تُرجع الدالة كائنًا فيه طول السلسلة وعناصرها: { length, arr }.

// Example 1:
// arr = [2, 5, 8, 3, 7, 4, 9, 6, 2, 5, 8] → { length: 4, arr: [2, 5, 8, 3] }
// السلسلة تنقطع عند 3 ثم 7 لأنهما فرديان متتاليان.

// Example 2:
// arr = [4, 7, 2, 9, 6, 1] → { length: 6, arr: [4, 7, 2, 9, 6, 1] }

// Example 3:
// arr = [1, 3, 5, 7] → { length: 1, arr: [1] }

// الشروط:

// يجب أن تكون عناصر السلسلة متجاورة في المصفوفة الأصلية، دون تخطي أي عنصر.
// إذا ظهر عددان متتاليان من النوع نفسه (زوجيان أو فرديان)، ينقطع التناوب.
// إذا وجدت سلسلتان بالطول نفسه، احتفظ بالسلسلة التي ظهرت أولًا.
// يجب معالجة المصفوفة الفارغة والمصفوفة المكونة من عنصر واحد.

function evenOddArr(arr) {
  if (arr.length === 1) {
    return {
      length: 1,
      arr: [arr[0]],
    };
  } else if (arr.length === 0) {
    return {
      length: 0,
      arr: [],
    };
  }

  let currentArr = [arr[0]];
  let longestArr = [...currentArr];

  let previousMove = arr[0] % 2 === 0 ? "even" : "odd";

  for (let i = 1; i < arr.length; i++) {
    const currentParity = arr[i] % 2 === 0 ? "even" : "odd";

    if (currentParity !== previousMove) {
      currentArr.push(arr[i]);
    } else {
      currentArr = [arr[i]];
    }

    previousMove = currentParity;

    if (currentArr.length > longestArr.length) {
      longestArr = [...currentArr];
    }
  }

  return {
    length: longestArr.length,
    arr: longestArr,
  };
}

// console.log(evenOddArr([2, 5, 8, 3, 7, 4, 9, 6, 2, 5, 8])); // { length: 4, arr: [2, 5, 8, 3] }
// console.log(evenOddArr([4, 7, 2, 9, 6, 1])); // { length: 6, arr: [4, 7, 2, 9, 6, 1] }
// console.log(evenOddArr([1, 3, 5, 7])); // { length: 1, arr: [1] }
// console.log(evenOddArr([2, 2, 3, 4, 5, 5, 6, 7])); // { length: 4, arr: [2, 3, 4, 5] }
// console.log(evenOddArr([7])); // { length: 1, arr: [7] }
// console.log(evenOddArr([])); // { length: 0, arr: [] }
