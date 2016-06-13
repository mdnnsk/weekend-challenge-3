var answer = function (objectIn) {
  if (objectIn.math == "add") {
    return Number(objectIn.firstVar) + Number(objectIn.secondVar);
  }
  else if(objectIn.math == "sub") {
    return Number(objectIn.firstVar) - Number(objectIn.secondVar);
  }
  else if(objectIn.math == "mul") {
    return Number(objectIn.firstVar) * Number(objectIn.secondVar);
  }
  else if(onjectIn.math == "div") {
    return Number(objectIn.firstVar) / Number(objectIn.secondVar);
  }
  else {
    return "DO YOU EVEN MATH?!";
  }
};

module.exports = answer;
