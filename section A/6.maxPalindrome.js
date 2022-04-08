//Node.js 10.14.0
//Plain Javascript and Node.js is supported

class Main {
  maxPalindrome(str) {
    let arr = [],
      index,
      len,
      mid,
      temp = "",
      rev = "";
    for (let i = 0; i < 26; i++) {
      arr[i] = 0;
    }
    //count the each elements occured how many times
    for (let i = 0; i < str.length; i++) {
      index = str[i].charCodeAt() - 97;
      arr[index] += 1;
    }
    //find number of elements exits more than 2
    //find the mid element occures one time
    //make a string whoever occures more than 2 time /2 loops
    //also make revered string to add after mid
    for (let j = 0; j < 26; j++) {
      if (arr[j] === 1 && !mid) mid = j;
      if (arr[j] >= 2) {
        len = arr[j] / 2;
        for (let k = 0; k < len; k++) {
          let ch = String.fromCharCode(j + 97);
          temp += ch;
          rev = ch + rev;
        }
      }
    }
    //add the found mid ,temp and rev  strings
    return temp + String.fromCharCode(mid + 97) + rev;
  }
}

const obj = new Main();
let x = obj.maxPalindrome("abcdefghfgbeadc");
console.log(x); //abcdefghgfedcba
