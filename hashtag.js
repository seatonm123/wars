function generateHashTag(str){
  var finalHash = '#';
  for (var i = 0; i < str.length; i++) {
   if (finalHash.length > 140) {
     return false;
   } else {
     for (var i = 0; i < str.length; i++) {
       if (finalHash)
       if (str[i] == ' ' || finalHash.length == 1) {
         finalHash += str[i + 1].toUpperCase();
       } else {
         finalHash += str[i];
       }
     }
   }
  }
  console.log(finalHash);
  return finalHash;
};

const hashThis = 'hello There you dummy dummy.'
generateHashTag(hashThis);
