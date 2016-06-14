var answer = function (objectIn){
  // console.log('object in math module ' + objectIn);
  var calculation;
  if (objectIn.operation == "add") {
    calculation = Number(objectIn.x) + Number(objectIn.y);
  }
  else if(objectIn.operation == "sub") {
    calculation = Number(objectIn.x) - Number(objectIn.y);
  }
  else if(objectIn.operation == "mul") {
    calculation = Number(objectIn.x) * Number(objectIn.y);
  }
  else if(objectIn.operation == "div") {
    calculation = Number(objectIn.x) / Number(objectIn.y);
  }

  // console.log('result in module: ' + calculation);
  return calculation;
};

module.exports = answer;
