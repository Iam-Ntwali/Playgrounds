// Promises
const checkNumber = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} is an even number`);
      } else {
        reject(`${num} is an odd number`);
      }
    }, 1000);
  });
}
const number = 3;

// Try and Catch
try {
  checkNumber(number).then((res) => {
    console.table(res);
  }).catch((err) => {
    throw new Error(err);
  });
} catch (err) {
  console.error(err.message);
}