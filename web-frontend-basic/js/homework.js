// 1. Tính tổng các số lẻ trong mảng
// Bài này mình sẽ cho trước một mảng các phần tử, sau đó yêu cầu viết chương trình tính tổng các số lẻ trong mảng đó. Mảng cho trước như sau:

// var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];

const sumOfOdds = function (arr) {
  return arr.reduce(function (acc, cur) {
    return cur % 2 ? acc + cur : acc;
  }, 0);
};
console.log(sumOfOdds([1, 2, 3, 4]));

// ----------------------------------------------------------------------------------
// 2. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi, trong trường hợp chuỗi dài hơn 15 ký tự.
const splitString = function (str) {
  return str.length > 15 ? `${str.slice(0, 10)}...` : null;
};
console.log(splitString('the crazy fox jumps over the lazy dog'));

// ----------------------------------------------------------------------------------
// 3. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
// Tham số truyền vào là 1 chuỗi.
// Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
const upperCaseFirstLetter = function (str) {
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
};
console.log(upperCaseFirstLetter('techMaster'));

// ----------------------------------------------------------------------------------
// 4. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
// Tham số truyền vào là 1 mảng các số.
// Kết quả là số nhỏ nhất trong mảng.
const minValue = function (arr) {
  return arr.reduce(function (acc, cur) {
    return acc > cur ? cur : acc;
  }, arr[0]);
};
console.log(minValue([4, 2, 1, 9, 3]));

// ----------------------------------------------------------------------------------
// 5. Sử dụng object constructors, tạo 1 mảng gồm các học sinh có đầy đủ name, age, school theo data bên dưới
// John - 26 - Cambridge
// Mark - 30 - Oxford
// Bill - 28 - Havard
function Person(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}
const john = new Person('John', 26, 'Cambridge');
const mark = new Person('Mark', 30, 'Oxford');
const bill = new Person('Bill', 28, 'Havard');

Person.prototype.coding = function () {
  this.age >= 28 ? console.log('coding master') : console.log('learning code');
};
john.coding();
mark.coding();
bill.coding();

// ----------------------------------------------------------------------------------
// 6. cho 2 mảng dữ liệu số, viết 1 hàm tìm các phần tử cùng xuất hiện ở cả 2 mảng.
const findSameValue = function (arr1, arr2) {
  const result = [];
  const obj = {};
  arr1.forEach(function (value) {
    obj[value] = true;
  });
  arr2.forEach(function (value) {
    if (obj[value]) {
      result.push(value);
    }
  });
  return result;
};
console.log(findSameValue([1, 2, 3, 4, 6, 3], [2, 3, 5, 6]));

// ----------------------------------------------------------------------------------
// 7. tính tổng các chữ số của 1 số.
// input: 1234
// output: 10
const sum = function (num) {
  return String(num)
    .split('')
    .reduce(function (acc, cur) {
      return acc + Number(cur);
    }, 0);
};
console.log(sum(1234));
