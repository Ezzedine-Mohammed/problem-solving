# JavaScript Problem Solving 🧩

This repository documents my journey of learning and improving at **Problem Solving** with **JavaScript**, one exercise at a time.

---

## 💡 Why am I learning this skill?

My goal isn't to memorize ready-made solutions. I want to change the way I think while writing code:

- **Organizing code:** Writing clear, well-structured solutions that are easy to read and modify.
- **Thinking from more than one angle:** Not settling for the first solution that comes to mind, but looking for different ways to solve the same problem.
- **Looking for the best solution:** Comparing solutions in terms of **Time Complexity** and **Space Complexity**, and understanding why one solution is better than another.
- **Understanding Data Structures:** Getting better at working with `Array`, `Object`, `Map`, `Set` and others, and knowing the strengths of each one and when to use it.

---

## 🔄 How I train

I train through a **recurring task with Claude** that follows this order:

1. **The exercise is sent:** Claude sends me a new exercise with its description, conditions and examples, without any hints.
2. **Analysis first:** I analyze the problem and explain my logic before writing a single line of code.
3. **Writing the code:** I write the solution myself and send it.
4. **Reviewing together:** We review the solution for correctness, Edge Cases and complexity.
5. **Finding the bug myself:** If the solution has a bug, Claude sends me **only the input where it fails**, and I find the cause and fix it myself.
6. **Reaching the best solution:** We keep reviewing and improving until we reach the best possible solution.

No exercise is uploaded to this repository until the review confirms its solution is correct.

---

## 📅 Upload schedule and consistency

Right now I don't have enough time to fully focus on developing this skill, but I don't want to give it up. So I set up a light and consistent system:

- **At least one exercise every two days.**
- **The day after solving any exercise is a rest day** from training.
- No new exercise is sent before the current one is finished and reviewed.

---

## 📈 Level and progress

- **AI** determines the level of each exercise and my current level.
- Based on that, it suggests my next exercises and their difficulty (Easy / Medium / Hard).
- It increases the difficulty gradually and varies the topics: Arrays, Strings, Hash Maps, Sets, Two Pointers, Sliding Window, Prefix Sum, Sorting, Intervals, Recursion...

---

## 📄 File format

Each `.js` file in the repository represents one exercise and contains:

1. **The exercise description** and the problem to solve.
2. **The conditions** for the solution.
3. **Examples** with the expected output for each one.
4. **The solution** I wrote.
5. **Test cases** at the end of the file.

```js
// Exercise name

// Problem description: ...

// Example 1:
// input → expected output

// Conditions: ...

function solution(input) {
  // ...
}

// console.log(solution(input)); // expected output
```