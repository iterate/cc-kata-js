var ccValidator = function ccValidator(number) {
  return /\d{16}/.test(number);
};

module.exports = ccValidator;
