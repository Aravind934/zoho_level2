//Node.js 10.14.0
//Plain Javascript and Node.js is supported

class Main {
  constructor() {
    this.arr = [];
    //Make array to count letters frequency
    //letters freuency counted a-z as index 0-25
    //intially counts will be zero
    for (let i = 0; i < 26; i++) {
      this.arr[i] = 0;
    }
  }
  largestString(str) {
    let index = null,
      charector = null,
      result = "";
    //find the ascii of every charector
    //make a index from subtract 67 as imdex of 'a'
    //a ascill is 67 so 67-67 =0
    for (let i = 0; i < str.length; i++) {
      index = str[i].charCodeAt() - 97;
      this.arr[index] += 1;
    }
    //make a string based their counts in reverse order
    for (let i = 25; i >= 0; i--) {
      charector = String.fromCharCode(i + 97);
      for (let j = 0; j < this.arr[i]; j++) {
        result += charector;
      }
    }
    return result;
  }
}

const obj = new Main();
console.log(obj.largestString("hafd")); //hfda
