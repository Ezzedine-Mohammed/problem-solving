// Longest Alternating Sequence

// وصف المسألة:
// لديك مصفوفة أعداد صحيحة. المطلوب إيجاد أطول سلسلة من العناصر المتجاورة
// بحيث يتناوب الاتجاه بين الصعود (up) والهبوط (down).
// تُرجع الدالة كائنًا فيه طول السلسلة وعناصرها: { length, arr }.

// Example 1:
// arr = [3, 7, 4, 9, 5, 2, 8, 3, 6, 10] → { length: 5, arr: [3, 7, 4, 9, 5] }
// 3↑7↓4↑9↓5 ثم 5↓2 هبوط مرتين متتاليتين فتنقطع السلسلة.

// Example 2:
// arr = [5, 5, 3, 7] → { length: 3, arr: [5, 3, 7] }

// Example 3:
// arr = [1, 2, 3, 4] → { length: 2, arr: [1, 2] }

// الشروط:

// يجب أن تكون العناصر متجاورة دون تخطي أي عنصر.
// يجب أن يتناوب الاتجاه: up ثم down أو العكس.
// عند تساوي عنصرين متجاورين تنقطع السلسلة.
// عند وجود سلسلتين بنفس الطول نحتفظ بالأولى.
// المصفوفة الفارغة تعيد طول 0 ومصفوفة فارغة.
// المصفوفة ذات العنصر الواحد تعيد ذلك العنصر.

function con(arr) {
  // معالجة المصفوفة الفارغة
  if (arr.length === 0) {
    return {
      length: 0,
      arr: [],
    };
  }

  // القيم الابتدائية
  let currentArr = [arr[0]];
  let longestArr = [...currentArr];
  let previousDirection = null;

  for (let i = 1; i < arr.length; i++) {
    const currentNumber = arr[i];
    const previousNumber = arr[i - 1];

    // إذا تساوى العنصران ينقطع التناوب
    if (currentNumber === previousNumber) {
      currentArr = [currentNumber];
      previousDirection = null;
    } else {
      // تحديد الاتجاه الحالي
      const currentDirection = currentNumber > previousNumber ? "up" : "down";

      // استمرار السلسلة عند تغير الاتجاه
      // أو عند عدم وجود اتجاه سابق
      if (
        previousDirection === null ||
        currentDirection !== previousDirection
      ) {
        currentArr.push(currentNumber);
      } else {
        // انقطاع التناوب وبداية سلسلة جديدة
        currentArr = [previousNumber, currentNumber];
      }

      // تحديث الاتجاه السابق
      previousDirection = currentDirection;
    }

    // تحديث أطول سلسلة عند العثور على سلسلة أطول
    if (currentArr.length > longestArr.length) {
      longestArr = [...currentArr];
    }
  }

  return {
    length: longestArr.length,
    arr: longestArr,
  };
}

// console.log(con([3, 7, 4, 9, 5, 2, 8, 3, 6, 10])); // { length: 5, arr: [3, 7, 4, 9, 5] }
// console.log(con([3, 7, 4, 8, 5])); // { length: 5, arr: [3, 7, 4, 8, 5] }
// console.log(con([5, 5, 3, 7])); // { length: 3, arr: [5, 3, 7] }
// console.log(con([3, 7, 7, 4])); // { length: 2, arr: [3, 7] }
// console.log(con([1, 2, 3, 4])); // { length: 2, arr: [1, 2] }
// console.log(con([5, 5])); // { length: 1, arr: [5] }
// console.log(con([5])); // { length: 1, arr: [5] }
// console.log(con([])); // { length: 0, arr: [] }
