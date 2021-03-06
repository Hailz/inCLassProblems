//Flatten for one deep sorted number arrays:
var array1= [1,2,[4,8],5,[6],[7,8],10];
var flattened =[];
console.log(array1);
function flatten(){
 flattened = array1.reduce((acc, cur) => acc.concat(cur), []); 
  console.log(flattened);
}
flatten();

// Flatten for one deep non sorted number arrays:
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

// Flatten for one deep word arrays:
var wordsArray=['appa', ['brady', 'marsha'], 'buddy', 'little'];
var flattenedWords = [];
console.log(wordsArray);

function flattenWords(){
  flattenedWords = wordsArray.reduce((acc, cur) => acc.concat(cur), []);
  flattenedWords.sort();
  console.log(flattenedWords);
};
flattenWords();

//Hard code to flatten multiple deep arrays:
var array2Deep= [11, 3, [[20, 1], 49], [8], 7];
var flattened1stLevel =[];
var flattened2ndLevel =[];
console.log(array2Deep);
function flatten1stLevel(){
  flattened1stLevel = array2Deep.reduce((acc, cur) => acc.concat(cur), []);
  console.log(flattened1stLevel);
}
function sortNumbers(a,b){
  return(a-b);
};
flatten1stLevel();
function flatten2ndLevel(){
  flattened2ndLevel = flattened1stLevel.reduce((acc, cur) => acc.concat(cur), []);
  flattened2ndLevel.sort(sortNumbers);
  console.log(flattened2ndLevel);
}
function sortNumbers(a,b){
  return(a-b);
};
flatten2ndLevel();
