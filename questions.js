var selectElementsStartingWithA = function(array) {
  return array.filter(function(string) {
      return string[0] == "a";
    });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(string) {
    return (/^[aeiou]/).test(string);
  });
};


var removeNullElements = function(array) {
  return array.filter(function(val) { return val !== null; });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function (n) {
    return (n !== null && n !== false);
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(string) {
    return reverse(string);
  });
}

var everyPossiblePair = function(array) {
    if (array.length < 2) { return []; }
    var first = array[0],
        rest  = array.slice(1),
        pairs = rest.map(function (x) { return [first, x]; });
    return pairs.concat(everyPossiblePair(rest));
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  return array.sort(function(a, b) {
    return a[a.length-1] > b[b.length-1];
  });
}

var getFirstHalf = function(string) {
  return string.slice(0, (string.length/2).toFixed());
}

var makeNegative = function(number) {
  return number < 0 ? number : -number;
}

var numberOfPalindromes = function(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++ ) {
    if (array[i] === reverse(array[i])) {count++};
  }
  return count;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

var shortestWord = function(array) {
  return array.sort(function(a, b) { return a.length > b.length })[0];
}

var longestWord = function(array) {
  return array.sort(function(a, b) { return a.length < b.length })[0];
}

var sumNumbers = function(array) {
  return array.reduce(function(a, b) { return a + b });
}

var repeatElements = function(array) {
  return array.concat(array.slice(0));
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  return (sumNumbers(array) / array.length);
}

var getElementsUntilGreaterThanFive = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 5) { return result };
    result.push(array[i]);
  }
}

var convertArrayToObject = function(array) {
  var result = {};
  for (var i = 0; i < array.length-1; i+=2) {
    result[array[i]] = array[i+1];
  }
  return result;
}

var getAllLetters = function(array) {
  return array.join("").split("")
  //Remove duplicates
  .filter( function( item, index, inputArray ) { return inputArray.indexOf(item) === index})
  //Sort all elements
  .sort(function(a, b) { return a < b ? -1 : 1 });
}

var swapKeysAndValues = function(object) {
  var result = {};
  for(var key in object){
    result[object[key]] = key;
  }
  return result;
}

var sumKeysAndValues = function(object) {
  var result = 0;
  for(var key in object){
    result += (object[key] + parseInt(key));
  }
  return result;
}

var removeCapitals = function(string) {
  return string.replace(/[A-Z]+/g, '');
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return date.toLocaleDateString('en-GB');
}

var getDomainName = function(string) {
 return string.replace(/.*@/, "").replace(/.com$/, '');
}

var titleize = function(string) {
  return str;
};

var checkForSpecialCharacters = function(string) {
 return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(string);
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial( number - 1 );
  }
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
