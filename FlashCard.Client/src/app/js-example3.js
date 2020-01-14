//  example#3
var str = "hello";
var obj = { name: "fares", age: "53" };
var arr = ["one", "two", "three"];

var strCopy = str;
var objCopy = obj;
var arrCopy = arr;

// copy bay value
str = "";
console.log(str);
console.log(strCopy);

// copy by ref
obj.name = "";
console.log(obj);
console.log(objCopy);

// by ref?
arr = arr.splice(0);
console.log(arr);
console.log(arrCopy);