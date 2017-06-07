function tongues(code) {
  var finalString = '';
  var vowels = 'aiyeou';
  var consonants = 'bkxznhdcwgpvjqtsrlmf';
  var codeIndex = '';
  var notThese = '.,!;:- 1234567890()*';
  for (var i = 0; i < code.length; i++) {
    if (notThese.indexOf(code[i]) > -1){
      finalString += code[i];
    } else {
      codeIndex = code[i].toLowerCase();
      if (vowels.indexOf(codeIndex) > -1) {
        if (vowels.indexOf(codeIndex) - 3 >= 0) {
            if (code[i] != codeIndex.toUpperCase()){
            finalString += vowels[vowels.indexOf(codeIndex) - 3]
            } else {
              finalString += vowels[vowels.indexOf(codeIndex) - 3].toUpperCase();
            }
        } else {
          if (code[i] != codeIndex.toUpperCase()){
            finalString += vowels[vowels.length + (-3 + vowels.indexOf(codeIndex))];
          } else {
            finalString += vowels[vowels.length + (-3 + vowels.indexOf(codeIndex))].toUpperCase();
          }
        }
      } else {
        if (consonants.indexOf(codeIndex) - 10 >= 0){
          if (code[i] != codeIndex.toUpperCase()){
            finalString += consonants[consonants.indexOf(codeIndex) - 10];
          } else {
            finalString += consonants[consonants.indexOf(codeIndex) - 10].toUpperCase();
          }
        } else {
          if (code[i] != codeIndex.toUpperCase()){
            finalString += consonants[consonants.length + (-10 + consonants.indexOf(codeIndex))];
          } else {
            finalString += consonants[consonants.length + (-10 + consonants.indexOf(codeIndex))].toUpperCase();
          }
        }
      }
    }
  }
  return finalString;
}

  var thisCode = 'Ita dotf ni dyca nsaw ecc.';
  var translat = 'One ring to rule them all.';
  tongues(thisCode);
