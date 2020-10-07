function calculateSum(messageBody, callback) {
  try {
    let numberOne = messageBody.numberOne;
    let numberTwo = messageBody.numberTwo;
    let sum = numberOne + numberTwo;
    callback(undefined, sum);
  } catch (err) {
    callback(err);
  }
}

module.exports = {
  calculateSum: calculateSum,
};
