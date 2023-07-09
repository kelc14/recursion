/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // //base case
  if (words.length === 0) return 0;

  // //normal case
  let currWord = words[0].length;
  let nextWord = longest(words.slice(1));

  return currWord > nextWord ? currWord : nextWord;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  let currLetter = str.charAt(0);
  return currLetter.concat(everyOther(str.slice(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return "";
  let currLetter = str[0];
  let nextLetter = revString(str.slice(1));
  // if the word is just about completed (backwards) -> add the last letter and check if it matches
  if (nextLetter.length === str.length - 1) {
    let backwards = nextLetter.concat(currLetter);
    return backwards === str ? true : false;
  }
  return nextLetter.concat(currLetter);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  while (idx < arr.length) {
    if (arr[idx] === val) return idx;
    idx += 1;
    findIndex(arr, val, idx);
  }
  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  let currLetter = str[0];
  let nextLetter = revString(str.slice(1));
  return nextLetter.concat(currLetter);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, collection = []) {
  let vals = Object.values(obj);
  vals.forEach((val) => {
    if (typeof val === "object" && !Array.isArray(val) && val !== null) {
      // if its an object >
      gatherStrings(val, collection);
    } else if (typeof val === "string" || val instanceof String) {
      collection.push(val);
    }
  });
  return collection;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      leftIdx = middleIdx + 1;
      return binarySearch(arr, val, leftIdx, rightIdx);
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
      return binarySearch(arr, val, leftIdx, rightIdx);
    } else {
      return middleIdx;
    }
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
