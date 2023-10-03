function telephoneCheck(str) {
  // define regex pattern for valid US phone numbers
  const validNum = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  // test to for validity
  return validNum.test(str);
}

telephoneCheck("555-555-5555");
