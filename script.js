/* task2 */
// let nums = [1, 2, 3, 4, 5, 6];
// let result = function sum(numbers) {
//     let i = 0;
//     let sum = 0;
//     while (i < numbers.length) {
//         if (numbers[i] % 2 == 0) {
//             sum += numbers[i] * numbers[i];
//         }
//         i++;
//     }
//     return sum;
// };
// console.log(result(nums));
/* task2 */

/* task3 */
// function addMonthOrder(months) {
//     return months.map((month, index) => `${month} - ${index + 1}`);
// }
// const months = ["January", "February", "March", "April"];
// const orderedMonths = addMonthOrder(months);
// console.log(orderedMonths);
/* task3 */

/* tek ededler */
// let n = 1;
// let m = 10;
// let sum = function (n,m){
//     let count=0;
// let sum = 0;
//     while(n<m){
//         if(n%2>0){
//             count++;
//             sum+=n;
//         }
//         n++;
// }
// return `sum of odd numbers: ${sum}` +" "+ `count of odd numbers: ${count}`;
// }
// console.log(sum(n,m));
/* tek ededler */

/* sade ve ya murekkeb */
// let num = 79;
// function PrimeorComp(num) {
//     let i = 2;
//     let count = 0;

//     while (i < num / 2 && count === 0) {
//         if (num % i === 0) {
//             count++;
//         }
//         i++;
//     }

//     if (count < 1) {
//         return "sade";
//     } else {
//         return "murekkeb";
//     }
// }
// console.log(PrimeorComp(num));
/* sade ve ya murekkeb */

/* quvvet */
// let n = 87;
// function PowerOfTwo(n) {
//     let m = 2;
//     let isPowerOf2 = false;

//     while (m < n) {
//         if (n % m === 0) {
//             m *= 2;
//             isPowerOf2 = true;
//         } else {
//             isPowerOf2 = false;
//             break;
//         }
//     }

//     if (isPowerOf2) {
//         return 'is a power of 2';
//     } else if (n === 1) {
//         return 'is a power of 2 on 0th degree';
//     } else {
//         return 'is not a power of two';
//     }
// }
// console.log(PowerOfTwo(n));
/* quvvet */

/* mertebe */
// function digits(m) {
//     let count = 1;
//     let n = 10;
//     while (n < m) {
//         if (m / n >= 1) {
//             count++;
//             n *= 10;
//         } else {
//             break;
//         }
//     }
//     console.log(`Number has ${count} digits`);
// }
// let m = 564739;
// digits(m);
/* mertebe */

/* array */
// let array = [1, 2, 3, 4, 5, 6];
// function sumAll(array) {
//     let sum = 0;
//     let i = 0;
    
//     while (i < array.length) {
//         sum += array[i];
//         i++;
//     }
    
//     return sum;
// }

// function sumFirstAndLast(array) {
//     return array[0] + array[array.length - 1];
// }

// function findHighest(array) {
//     let highest = array[0];

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] > highest) {
//             highest = array[index];
//         }
//     }

//     return highest;
// }
// console.log("Sum of all elements:", sumAll(array));
// console.log("Sum of first and last elements:", sumFirstAndLast(array));
// console.log("Highest element:", findHighest(array));
/* array */

/* tek ve ya cut */
// let n = 4;
// function checkEvenOrOdd(n) {
//     if (n % 2 === 0) {
//         console.log('Even');
//     } else {
//         console.log('Odd');
//     }
// }
// checkEvenOrOdd(n);
/* tek ve ya cut */

/* 3 ve 7 */
// let n = 21;
// function checkDivisibility(n) {
//     if (n % 3 === 0 && n % 7 === 0) {
//         console.log('Divisible by both 3 and 7');
//     } else {
//         console.log('Not divisible by both 3 and 7');
//     }
// }
// checkDivisibility(n);
/* 3 ve 7 */

/* her ikisi cut */
// let n = 20;
// let m = 13;
// function sum(n, m) {
//     if (n % 2 === 0 && m % 2 === 0) {
//         console.log('Sum of both numbers:', n + m);
//     }
// }
// sum(n, m);
/* her ikisi cut */

/* temperatur */
// let degree = 16;
// function Temperature(degree) {
//     if (degree > 15) {
//         console.log('Hot');
//     }
//     else if (degree==15){
//         console.log('Average');
//     } 
//     else {
//         console.log('Cold');
//     } 
// }
// Temperature(degree);
/* temperatur */

/* cut ededlerin hasili */
// let m = 22;
// function calculate(m) {
//     let n = 1;
//     let product = 1;
//     while (n <= m) {
//         if (n % 2 === 0) {
//             product *= n;
//         }
//         n++;
//     }
//     console.log(product);
// }
// calculate(m);
/* cut ededlerin hasili */