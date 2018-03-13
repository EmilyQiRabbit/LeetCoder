/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) { // 题目要求：...which can be followed by some other words to form another longer word...
  return sentence.split(' ').map(function(item){
    let candidateWord = item;
    dict.forEach(function(d){
      if(candidateWord.startsWith(d)){ // 这个方法！
        candidateWord = d
      }
    })
    return candidateWord
  }).join(' ')
};