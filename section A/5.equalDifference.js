//Node.js 10.14.0
//Plain Javascript and Node.js is supported

class Main {
  isEqual(str) {
    let start = 0,
      end = str.length - 1,
      startDiff,
      endDiff;
    let result = "Equal diffrence";
    while (start < end) {
      //find the difference using ascii b/w start index and its next index
      startDiff = str[start + 1].charCodeAt() - str[start].charCodeAt();
      //find the diffrence between last index and its prev index
      endDiff = str[end].charCodeAt() - str[end - 1].charCodeAt();
      if (startDiff !== endDiff) {
        result = "Unequal diffrence";
        break;
      }
      start += 1;
      end -= 1;
    }
    return result;
  }
}

const obj = new Main();
console.log(obj.isEqual("accdefg")); //Unequal diffrence
