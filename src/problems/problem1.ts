// Multiples of 3 or 5

// If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.

// Find the sum of all the multiples of $3$ or $5$ below $1000$.

const maxValue: number = 1000;

// Create an array of length 5 and fill it with numbers starting from 1
// const numbers: number[] = Array.from({ length: maxValue }, (_, i) => i + 1);

// const result = numbers
//   .filter((value, index) => {
//     if (value % 3 === 0 || value % 5 === 0) {
//       return value;
//     }
//   })
//   .reduce((accumulator, currentValue) => accumulator + currentValue);

export function calculateMultiplesOf3Or5(): void {
  // ChatGpt improvement
  const numbers: number[] = Array.from({ length: maxValue }, (_, i) => i + 1);

  const result = numbers
    .filter((value) => value % 3 === 0 || value % 5 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.debug(`Problem 1 - Multiples of 3 or 5 - answer: ${result}`);
}

calculateMultiplesOf3Or5()