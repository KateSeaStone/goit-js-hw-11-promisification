// function getRandom() {
//   return Math.round(Math.random() * 100)
// }

// function checkOddNumber() {
//   return new Promise((resolve, reject) => {
//     const x = getRandom();
//     if (x % 2 === 0) {
//       resolve(`${x} это четное число`)
//     } else {
//       reject(`${x} ошибка, это нечетное число`)
//     }
//   })
// }

// checkOddNumber()
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res))
//   .finally(() => console.log(`Пока!`))


// function checkNumber(number) {
//   return new Promise((resolve, reject) => {

//     if (number % 3 === 0) {
//       resolve(number / 3)
//     } else {
//       reject(number)
//     }

//   })
// }

// checkNumber(99)
//   .then((res) => {
//     console.log(res);
//     return checkNumber(res)
//   })
//       .then((res) => console.log(res))
//   .catch((res) => console.log(`число ${res} не делится на 3`))
//   .finally(() => console.log(`Пока!`))

// function getCountStr(string) {
//   console.log(string.length);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (string.length % 2 === 0) {

//         resolve(`Success!`)
//       }
//       else {
//         reject(`Error!`)
//       }
//     }, 2000)
//   })
// }

// getCountStr('qwqwqwqwqwqwqwqwqwewrwrwrwrq')
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result))
//   .finally(() => console.log('the end'))
