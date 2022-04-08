//Node.js 10.14.0
//Plain Javascript and Node.js is supported

class Main {
  distinct(str) {
    //acheive this logic through hashmap
    let visited = {},
      i = 0,
      temp = "",
      result = "";
    while (true) {
      //edge case for last index
      if (i === str.length) {
        if (!visited[temp]) result += temp;
        break;
      }
      //if not in hashmap add into the string
      if (str[i] !== " ") {
        temp += str[i];
      } else {
        if (!visited[temp]) {
          result += temp + " ";
          visited[temp] = true;
        }
        temp = "";
      }
      i++;
    }
    return result;
  }
}

const obj = new Main();
let x = obj.distinct("This is zoho and zoho is good ");
console.log(x); //This is zoho and good
