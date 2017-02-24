//Flatten for sorted number arrays:
var array1= [1,2,[4,8],5,[6],[7,8],10];
var flattened =[];
console.log(array1);
function flatten(){
 flattened = array1.reduce((acc, cur) => acc.concat(cur), []); 
  console.log(flattened);
}
flatten();

// Flatten for non sorted number arrays:
var array2= [11, 3, [20, 1], 49, [8], 7];
var flattened2 =[];
function flatten2(){
  flattened2 = array2.reduce((acc, cur) => acc.concat(cur), []);
  flattened2.sort(sortNumbers);
  console.log(flattened2);
}
function sortNumbers(a,b){
  return(a-b);
};
flatten2();

// Flatten for word arrays:
var wordsArray=['appa', ['brady', 'marsha'], 'buddy', 'little'];
var flattenedWords = [];
console.log(wordsArray);

function flattenWords(){
  flattenedWords = wordsArray.reduce((acc, cur) => acc.concat(cur), []);
  flattenedWords.sort();
  console.log(flattenedWords);
};
flattenWords();