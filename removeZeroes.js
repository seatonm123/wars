function removeZeroes(arr) {
  finalArr = [];
  var holdArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] != 0){
      finalArr.push(arr[i])
    } else {
      holdArr.push(arr[i]);
    }
  }
  for (var j = 0; j < holdArr.length; j++) {
    finalArr.push(holdArr[j]);
  }
  return finalArr;
};

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
removeZeroes(input);
