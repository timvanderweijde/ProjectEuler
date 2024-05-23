import { saveArrayToFile } from "./fileWriter";

export function generatePrimesAndSaveToCsv(limit : number): void {
  const result: number = -1;

  const getPrimes = (limit: number): number[] => {
    const primes: number[] = [2, 3, 5, 7, 11, 13];

    for (let nr = 14; nr < limit; nr++) {

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
    }

    return primes;
  };

  const allOfThem = getPrimes(limit) // Does not work with larger numbers.

  saveArrayToFile(allOfThem, "primes.csv" )
}