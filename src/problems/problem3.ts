// <p>The prime factors of $13195$ are $5, 7, 13$ and $29$.</p>
// <p>What is the largest prime factor of the number $600851475143$?</p>

import { saveArrayToFile } from "../utils/fileWriter";

export function calculateLargestPrimeFactor(): void {
  const limit: number = 1000;
  const result: number = -1;

  const getPrimes = (limit: number): number[] => {
    const primes: number[] = [2, 3, 5, 7, 11];

    for (let nr = 12; nr < limit; nr++) {
      // if (primes.length === 0) {
      //   console.debug(`primes.length === 0`);
      //   primes.push(nr);
      // } else {

      let isPrime: boolean = true;

      for (let index = 0; index < primes.length; index++) {
        const prime = primes[index];

        if (prime > nr) {
          // console.debug(`prime ${prime} > nr ${nr}`);
          isPrime = false;
          break;
        } else if (nr % prime === 0) {
          // console.debug(`nr ${nr} % prime ${prime} === 0`);
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(nr);
      }
      // }
    }

    return primes;
  };

  const limit2 = (1000 / 2) + 1

  const allOfThem = getPrimes(limit2) // Does not work with larger numbers.

  saveArrayToFile(allOfThem, "primes.txt" )
  
  // console.debug(allOfThem);

  console.debug(`Problem 3 - Largest Prime Factor - answer: ${result}`);
}

calculateLargestPrimeFactor();
