// khai báo biến
// var fullName = 'NGUYỀN THÀNH Ý';
// var age = 26;
// // gọi hàm thông báo
// alert(fullName);
// alert(age);
// 10 cú pháp comment

/*
giới thiệu một số hàm built-in
1. Alert
2. console
3. confim
4. prompt
5 set timeout
6. set interval
*/
// var fullName = 'Nguyễn Thành Ý'
// console.log(fullName);

// confirm('Xac nhan ban du tuoi'); 
// // confirm hàm dùng để xác nhận
// prompt('Xac nhan ban du tuoi');
// prompt sự kết hợp của hàm alert và confim và có thêm một ô input để xác nhận

// setTimeout(function() {
// alert('Thong bao');
//  },3000)

// let a = 0;
// let b = setInterval(function() {
//     if (a < 10) {
//        console.log('Thong bao lien tuc'+ Math.random());
//         a = a += 1;
//     } else {
//         clearTimeout(b);
//     }
// },1000);


// setInterval(callback, 1000)




/** 
Giới thiệu về toán tử trong javascrpt
1.toán tử trong số học - arithmetic
2. toán tử gán - asignment
3. toán tử so sánh - comparison
4. toán tử logic - logical

 */
// Toán Tủ Gán
//  var a = 1 +2;
//  var b = 1*2;
// console.log(a);
// console.log(b);
// var fullName = 'Nguyễn Thành Ý'
// console.log(fullName);


// toán tử so sánh
// let a = 1;
// let b = 2;

// if (a > b) {
//     alert('Dung');
// } 
// else {
//     alert('Phúc <3 Châu');
// }
// toán tử logic - logical
// let a = 2;
// let b = 4;
// if (a*0 == 0 && b * 0 == 0); {
//     alert('a=0 & b=0');
// }


/**
 + --> cộng
 -  --> Trừ
 *  --> Nhân
 ** --> Lũy thừa
 / -->  Chia
 %  --> chia lấy số dư
 ++ --> tăng lên một giá trị số
 --  --> giảm 1 giá trị
 */

// let a = 8;
// let b = 2;

// let c = a % b;

// console.log(c);


// ++ --> tăng lên một giá trị số
//  --  --> giảm 1 giá trị
//  */
// let idol = 5;
// idol ++;
// idol --;
// console.log(idol);


// 1.toán tử trong số học - arithmetic ( thực hành)
// let age = 24;
// let nextAge = age +1;
// console.log(nextAge);


/** Toán tử gán
 Toán tử        Ví dụ       tương đương  
=               x = y       x = y               
+=              x += y      x = x + y      
-=              x -= y      x = x - y
*=              x *= y      x = x * y
/=              x /= y      x = x / y
**=             x **= y     x = x ** y
 */


//  let a = 5;

//  a **= 2;
 
//  console.log(a);
// let a = 5;
// let b = -5;
// let c = a += b;
// let d = a-= b;
// console.log(c,d);


// 20 ví dụ toán tử ++

// console.log('--- Hậu tố ---');

// var number1 = 1;

// console.log(number1++); // 1
// console.log(number1); // 2

// console.log(number1++); // 2
// console.log(number1); // 3

// console.log('--- Tiền tố ---');

// var number2 = 1;

// console.log(++number2); // 2
// console.log(number2); // 2

// console.log(++number2); // 3
// console.log(number2); // 3

// Toán tử -- tương tự các bạn nhé, điểm khác
// là thay vì cộng 1 trừ toán tử -- sẽ trừ 1



// postfix( hậu tố)
// việc 1 copy biến a = 6
//  việc 2 = cộng 1 của a, a = a + 1 => 7 
// việc 3 trả về a copy
// let a = 6;
// let output = a++;

// console.log('output:', output);
// console.log('a:', a);
// prefix( tiền tố)

// việc 1: +1 cho a
// việc 2: trả về a sau khi được cộng 1
// let a = 6;

// let output = ++a;

// console.log('output', output);

// bài tập nâng cao của tiền tố và hậu tố

// let number = 6;
// let output = ++number * 2 * number-- * 2;

// // 7 * 2 -  7 *2

// console.log("long hồ cu thúi như chó", output)


// Toán tử nối chuỗi - string operator******

// let firstName = 'Nguyễn';
// let lastName = 'Ý';

// console.log(lastName + ' ' + firstName)

// let name = 'Long Hồ';
// name += ' ' + 'cu thúi';
// console.log(name);

// var firstName = 'Kiều';
// var lastName = 'Trang';
// var fullName = firstName + ' ' + lastName;
// console.log(fullName);



/**Toán tử so sánh
 ==     -->     Bằng
 !=     -->     Không bằng
 >      -->     Lớn hơn
 <      -->     Nhỏ hơn
 >=     -->     Lớn hơn hoặc bằng
 <=     -->     nhỏ hơn hoặc bằng
 
 */

//  let a = 1;
//  let b  =2;


//  if (a<=b) {
//         console.log('đièu kiện đúng');
//  } else {
//         console.log('điều kiện sai');
//  }


/**
 *Boolean

 */

//  let isSuccess = true;
 
//  console.log(isSuccess);

//  let a = 1;
//  let b = 2;

//  let isSuccess = a > b; 

//  console.log(isSuccess);

/**
 *  If - else ( nếu - thì)
 */

/**( trong javacsript có 6 giá trị này luôn là false)
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
// var  iSuccess = 2 > 1 ;

// if (iSuccess) {
// console.log('dieu kien dung');
// } else {
// console.log('dieu kien sai');
// }
// var number = 13;
// var remain = number % 2
// var isOdd = remain === 1;
// console.log(isOdd);


/**
 * Toán tử logic( bài tập)
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
*/
//  && - And ( tất cả các vế đều phải đúng thì In ra được )
// let a = 1;
// let b = 2;
// let c = 3;
// if (a > 0 && b > 0 && c > 0) {
//        console.log('dieu kien dung')
// }

// || - Or ( chỉ cần ít nhất là 1 vế đúng thì IN ra được )

// let a = 1;
// let b = 2;
// let c = 3;
// if (a < 0 || b < 0 || c > 0) {
//        console.log('dieu kien dung')
// }

// ! - Not (dùng để thay đổi khái niệm đúng sai nhưng trước khi làm phải nhóm lại bằng (!) )

// let a = 1;
// let b = 2;
// let c = 3;
// if (!(a < 0)) {
//        console.log('dieu kien dung')
// }


/**
 Kiểu dũ liệu nguyên thủy trong jacvascript
 1. Dữ liệu nguyên thủy - 
 - Number
 - Boolean
 - Null
 - Symbol

2. Dữ liệu phức tạp - Complex Data
       - Function
       - object
 */
// number type
// var a = 1;
// var b = 2;
// var c = 3;

// String type

// var fullName = 'Son Dang';
// console.log(fullName);

// //  Boolean
//  var isSuccess = true;


// //  undefined type

// var age;
// console.log(age);

// Null

// var isNull = null;  // notthing(k có gì)

// console.log(typeof isNull);

// symbol
// var id = Symbol('id'); // unique
// var id2 = Symbol('id'); //unique

//  console.log(id);
//  console.log(id == id2); false

//function

// var myFunction = function() {
//        alert('hi Xin chao cac ban');
// }
//  myFunction();
 
//  Object types

// var myObject = {
//        name: 'Thanh Y',
//        age: 18,
//        adress: 'HCM',
//        myFunction: function () {

//        }
// };
// console.log('myObject', myObject)


// var myArray = [
//        'Javascỉpt',  
//        'PHP',
//        'Ruby',
// ];
// console.log(myArray);
// console.log(typeof myArray ); // cách kiểm tra kiểu dữ liệu


// TOÁN TỬ SO SÁNH - P2
/**
 * ===
 * !==
 */


// var a = 1;
// var b = '1';

// console.log( typeof (a === b));

// var c = 1;
// var d = '1';

// console.log( c !== d);

// HIỂU HƠN VỀ CÂU LỆNH ĐIỀU KIỆN
//  VÀ PHÉP SO SÁNH

/**( trong javacsript có 6 giá trị này luôn là false)
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */


// var result = a < b;
// console.log('result', result);
// if (a < b) {
//        console.log('a < b');
// } else {
//        console.log('a > b');
// }

// Toán tử logic
// var a = 1;
// var b = 2;
// var result = a < b && a < 0 


// var result = 'A' && 'B' && 'C' && 'D';

// if (result) {
//        console.log(' Dieu kien dung');
// } else {
//        console.log('Dieu kien sai')
// }


// var result = null || 'B' || 'C' || 'D'; // chỉ lấy vế đúng đầu tiên khi khác 6 vế đặc biệt **
// console.log('result', result);

// if (result) {
//        console.log(' Dieu kien dung');
// } else {
//        console.log('Dieu kien sai')
// }


/**
 Hàm (function) trong javascript

 1. Hàm?
 - Một khối mã
 - Làm 1 việc cụ thể

 2, Loại hàm 
 - built - in
 - Tự định nghĩa

 3. Tính chất 
      - không thực thi khi định nghĩa 
      - Sẽ thực thi được gọi
      - Có thể nhận tham số
      - Có thể trả về 1 giá trị

4. Tạo hàm đàu tiên


 */


// function showDialog() {
// alert('Hi xin chào các bạn!');
// }

// showDialog();


/*
// 1. Tham số
      - Định nghĩa?
      - Kiểu dữ liệu?
      - Tính private? (tính riêng tư)
      - 1 tham số
      - nhiều tham số

2. Truyền tham số
      - 1 tham số
      - Nhiều tham số

3. Arguments?
      - Đối tượng arguments
      - Giới thiệu vòng for of
*/

// function writelog(message) {
//       console.log(typeof message)
// }

// writelog(['Javascript', 'PHP',]);
 
// function writeLog(message,message2 ) {
//       console.log(message);
//       console.log(message2);
// }
// writeLog('Test', 'Test_2');


// function writeLog(message,message2 ) {
//      if (message) {

//       console.log(message);  
//      }
//       if (message2) {
//       console.log(message2);
// }
//      }
      
// writeLog('Test', 'Test_2');


// function writeLog() {
//       console.log(arguments);
// }

// writeLog('1', '2', 3, 4, 'log 1');

//   function writeLog() {
//       var myString = '';
//       for (var param of arguments) {
//          myString += `${param} - `
//       }
//       console.log(myString);
// }
// writeLog('log 1', 'log 2', 'log 3');

// Return trong hàm - Javascript cơ bản

// trong 1 hàm mà k return thì sẽ trả về undefined,
// sau khi tạo return thì những dòng code bên dưới return sẽ k được hoạt động

// var isConfirm = confirm('message');
// console.log(isConfirm);

// function cong(a, b) {
//       return a.toString() + b.toString();
// }

// var result = cong(2,8);
// console.log(result); 


/*
Một số điều cần biết về function

1. Khi function đặt trùng tên ?
2. khai báo biến trong hàm ?
// 3. Định nghĩa hàm trong hàm
*/

// function showMessage() {
// //       console.log('Message 1');
// // }

// function showMessage() {
//       console.log('Message 2');
// }

// showMessage(); // funtion được định nghĩa sau sẽ ghi đè lên function sau 

// function showMessage() {
//       var fullName = 'Thành Ý';
//       console.log(fullName);

// }
// showMessage();


// function showMessage() {
//       function showMessage2() {
//             console.log('Message2');
//       }
//       showMessage2();
// }

// showMessage();


/*
các loại function 
1. Declaration function
2. Expression function
3. Arrow function
*/

// function showMessage() {
// console.log('Declaration function');
// } // có hosting


// var showMessage2 = function() {
//       console.log('Expression function');
// } // không hosting

// showMessage();


// setTimeout(function() {
// alert('Expression function');
//  },3000)


/* CHUỖI TRONG JAVASCRIPT
1. Tạo Chuỗi
      - Các cách tạo chuỗi
      - Nên dùng cách nào ? Lý Do?
      - Kiểm tra dât type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Templeate string ES6
*/

// var fullName = 'Thanh Y'
// alert(fullName);
// console.log(typeof fullName);

var fullName = 'Thanh Y la \'Sieu Nhan\''
// console.log(fullName.length);

// var firstName = 'Thanh';
// var lastName = 'Y';

// // console.log('Toi la: ' + firstName + ' ' + lastName); //cách nối chuỗi truyền thống
// console.log(`Toi la: ${firstName}  ${lastName}`); // Templeate string ES6


//    LÀM VIỆC VỚI CHUỖI

var myString = '  Hoc JS tai JS F8!   ';
// 1. Length

// console.log(myString.length);

// 2. Find idex ( xac dinh vi tri)

// console.log(myString.indexOf('JS',6));
// console.log(myString.lastIndexOf('JS'));
// console.log(myString.search('JS'));

// 3.Cut string( cắt chuỗi)
 
// console.log(myString.slice(4,6));
// console.log(myString.slice(-3,-1));

// 4. Replace( thay thế)

// console.log(myString.replace('JS', 'Javascript'));
// console.log(myString.replace(/JS/g, 'Javascript')); //chuỗi chính quy học sau

// 5. Convert to upper case( chuyển đổi chuỗi thành chữ Hoa)

// console.log(myString.toUpperCase());

// // 6. Convert to lower case( chuyển đổi chuỗi thành chữ thường)

// console.log(myString.toLowerCase());

// // 7. Trim( giúp bỏ đi khoản trắng  trong chuỗi )

// console.log(myString.trim())

// 8. Split (  dựa vào 1 điểm chung cắt 1 chuỗi thành array)

// var languages = 'Javscript, PHP, Ruby';
// console.log(languages.split(', '));

// let languages = 'Javascript';
// console.log(languages.split(''));

// 9. Get a character by index ()

// const myStrinng2 = 'Thanh Y';
// console.log(myStrinng2.charAt(6));// thêm tyeof để biết kiểu dữ liệu

// keyword: javascript string methods ****



// bài tập split ****

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//       return str.split(', ');
// }

// console.log(strToArray(coursesStr)) 

// Bài tập length ****

// function getContentLength(content) {
//       return content.length;
//   }
  
//   console.log(getContentLength('JavaScript'));
//   console.log(getContentLength('Hello World'));

// Bài tập toUpperCase ( in hoa) ****

// function getUpperCaseName(name) {
//       return name.toUpperCase()
//   }
  
//   console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
//   console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"


/*
Kiêu số (Number) trong Javascript 

1. Tạo giá trị Number
      - Các cách tạo
      - Dùng cách nào? Tại sao?
      - Kiểm tra data type

2. Làm việc với Number
      - To string
      - To Fixed

Keyword: Javscrpit number methods( nhớ tìm kiếm)

*/

//  var age = 18;
//  var PI = 3.14;
//  console.log(typeof age);

// var result = 20/ 'ABC';
// console.log(isNaN(result));


//  var age = 18;
//  var PI = 3.14;

//  console.log(PI.toPrecision()) làm tròn chuyển đổi thành chuổi
//  console.log(age.toString()) //chuyển đổi thành chuỗi

//  console.log(typeof age.toString()) // kiểm tra data type


// var height = 165;

// var money = 3000.42342342342

//  console.log(money.toFixed()) // chuyển đổi thành chuỗi và làm tròn dưới 0.5 làm tròn xuốn và else

// console.log(money.toFixed(2)); // rút gọn để lại 2 số sau dấu thập vân tùy biến

//  console.log(typeof money.toFixed())



// Bài tệp quan trọng

// Cách 1 ***

// function isNumber(value) {
//       return typeof (value) ===  "number"
//   } 
  
  
  
//   // Expected results:
//   console.log( isNumber(999)); // true
//   console.log(isNumber('abc')); // false
//   console.log(isNumber('100')); // false


//   Cách 2 ***
//   function isNumber(value) {
//       return Number.isFinite(value);
//    } 
   
   
   
//    // Expected results:
//    console.log(isNumber(999)); // true
//    console.log(isNumber('abc')); // false
//    console.log(isNumber('100')); // false





// Viết hàm kiểm tra kiểu number #2
// Cách 1
// function isNumber(value){
//       return Number.isFinite(value);
//   }
  
  
  
  
// //   Expected results:
//   console.log(isNumber(999)); // true
//   console.log(isNumber('abc')); // false
//   console.log(isNumber('100')); // false
  
//   console.log(isNumber(NaN)); // false
//   console.log(isNumber(100 / 'abc')); // false






//   cách 2 ***
// function isNumber(value){
//   return typeof value === 'number' &&  isNaN(value) 
 
 
//  Expected results:
//   console.log(isNumber(999)); // true
//   console.log(isNumber('abc')); // false
//   console.log(isNumber('100')); // false
  
//   console.log(isNumber(NaN)); // false
//   console.log(isNumber(100 / 'abc')); // false

 
/* Mảng trong Javascript - Array ****

1. Tạo mảng
      - Cách tạo  
      - Sử dụng cách nào? Tại sao?
      -Kieermtrar dât type    
2. Truy xuất mảng
      - Độ dài mảng
      - Lấy phần tử theo index
*/
 
// var languaes = [
//       'Javascript',
//       'PHP',
//       'Ruby',
//       'Dart',
//       null,
//       undefined,
//       function (){

//       },
//       {},
//       123,
// ];

// console.log(languaes);
// console.log(typeof languaes);
//  để kiểm tra Object có đúng là 1 Array hay không thì sẽ làm như  sau 
// console.log(Array.isArray(languaes));

// console.log(languaes.length); // lấy độ dài mảng

// console.log(languaes[3]); // lấy phần tủ index


/* Làm việc với Array

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. concat
9. Slicing

Javscript array metho

*/

// var languages = [
//       'Javascript',
//       'PHP',
//       'Ruby',
// ];

// console.log(languages.toString()) //chuyển đổi Arry sang chuỗi To string

// console.log(typeof languaes.toString()) 

// console.log(languages.join(', ')); // chuyển 1 Arry sang chuỗi và thêm giá trị để tình bày Join

// console.log(languaes.pop()); // xóa đi element( phần tử) cuối mảng và trả về phần tử đã xóa

// console.log(languaes);         //  và sau đó console.log(languages)

// console.log(languaes.pop()) // nếu và tiếp tục gọi tiếp thì sẽ xóa tiếp tục 1 element cho đến hết
//                               // sẽ trả ra undifine


// console.log(languaes.push('Dart')); // thêm 1 || nhiều element ở cuối mảng & trả về độ dài mới của mảng

// console.log(languaes);


// console.log(languaes.shift()) // xóa đi element đầu tiêng của mảng trả về element đã xóa

// console.log(languaes); // giống như pop ở trên

// console.log(languaes.unshift('Dart', 'Java')); // thêm 1 || nhiều phần tử đầu mảng & trả về độ dài mảng

// console.log(languaes);

// languages.splice(1,1,'Dart');// 1 đặt vị trí, từ vị trí  thứ nhất muốn xóa đi mấy element, 
//                               // và chèn vào tại vị trí được đặt
      
// console.log(languages);

// var languages1 = [
//       'Dart',
//       'Ruby',
// ];
// // console.log(languages.concat(languages1)); // nối mảng lại với nhau 

// console.log(languages1.slice(0,1,)); // cắt lấy 1 vài element

// Bài tập array ****
// Viết hàm tại đây

// function getLastElement(array) {
//        return array.slice(-1)   //cách 1
//       // return array[array.length-1] //cách 2
      
//       }
      
      
//       // Ví dụ sử dụng
//       var animals = ['Monkey', 'Tiger', 'Elephant'];
//       var result = getLastElement(animals);
      
//       console.log(result); // Expected: "Elephant"
//       console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']



// Object trong Javascript

// var emailKey = 'email1';

// var myInfo = {
//       name: 'Thành Ý',
//       age: 18,
//       address: 'Ca Mau, VN',
//       [emailKey]: 'thanhyidol98@gmail.com123', // cách thêm 1 key vào trong Object 
//       getName: function() {
//             return this.name;                   // this là tên biến ở đây this là myInfo
//       }
// };



//Function --> phương thứ / method
//Others ---> thuộc tính / property


// myInfo.email = 'thanhyidol98@gmail.com'; //cách thêm 1 key & value
// myInfo ['my-email'] = 'thanhyidol98@gmail.com111';// cách thêm 1 key & value 2


// var myKey = 'address';

// console.log(myInfo.name);// cách lấy 1 key và value log ra

// console.log(myInfo['address']);// cách lấy 1 key và value log ra 2

// console.log(myInfo['my-email']);// cách lấy 1 key và value log ra 2

// console.log(myInfo[myKey]); // dùng cách thứ 2 truyền value dưới dạng biến

// delete myInfo.age;

// console.log(myInfo);

// console.log( myInfo.getName());



// Object constructor ( xây dựng đổi tượng)

// function User(firstName, lastName, avatar) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.avatar = avatar;
//       this.getName = function() {
//             return `${this.firstName} ${this.lastName}`
//             // return this.firstName + " " + this.lastName;
//       }

// }
//  var author = new User('Sơn', 'Đặng', 'Avatar');
//  var user = new User('Vũ', 'Nguyễn', 'Avatar');

// // console.log(author.constructor);

// author.title = 'Chia sẽ dạo tại F8';
// user.comment = 'liệu có khóa asp.net k ad ';

//  console.log(author.getName());
//  console.log(user.getName());
// console.log(author)
  

//  Constructor

/*sau này đối tượng được khởi tạo từ bản thiết kế này thì sẽ có thuộc tính là firstName = với tham số
firstName truyền vào khi khởi tạo đối tượng và 2 ông còn lại cũng như vậy
*/

// function User(firstName, lastName, avt ) {
//       // this: mô tả những thuộc tính và phương thức sẽ có cho đối tượng khi khởi tạo  từ Object constructor
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.avt = avt;
  
//       this.getName = function () {
//           // this: đối tượng hiện thời của lớp đấy, nghĩa là đối tượng nào đang được gọi thì this chính là đối tượng đấy 
//           return `${this.firstName} ${this.lastName}`;
//       }


// bài tập **********************
// function Animal(name,leg,speed) {
//       this.name = name;
//       this.leg = leg;
//       this.speed = speed;
      
//   }
  
//   var parrot = new Animal ('vẹt', 2, 120);
  
//   console.log(parrot);

/* Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.

Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.

 Tên và tốc độ di chuyển của vẹt các bạn có thể tùy ý đặt, không đòi hỏi phải chính xác với tên và tốc độ trong thực tế.
 */



 /*
      Object prototype (nguyên mẫu đối tượng) - Bassic
      
      1. Prototype là gì? nguyên liệu cấu tạo
      2. Sử dụng khi nào? thêm 1 thuộc tính hoặc phương thức cho bản thiết kế
*/
// function User(firstName, lastName, avatar) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.avatar = avatar;
//       this.getName = function() {
//             return `${this.firstName} ${this.lastName}`
//             // return this.firstName + " " + this.lastName;
//       }
// }
//       User.prototype.className = 'F8'
//       User.prototype.getClassName = function() {
//             return this.className;
//       }
//       var user = new User('Sơn', 'Đặng', 'Avatar1');
//       var user2 = new User('Tân', 'Đặng', 'Avatar2');

//       console.log(user.className)
//       console.log(user2.getClassName())
//       console.log(user)
//       console.log(user.constructor === User)
//       console.log(User.prototype.constructor === User)

/*tất cả phương thức hoặc thuộc tính được thêm bằng prototype qua 1 hàm tạo
của 1 hàm tạo của 1 hàm tạo thì nó sẽ nằm trong phần prototype khi log ra.


//  User.prototype.getClassName = function() {
            return this.className;
chỉ khi nó là phương thức thì mới có thể truy cập qua this để lấy được 
*/



// Bài tập prototype *********************
// function Student(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
   
// }
// Student.prototype.getFullName = function() {
//      return `${this.firstName} ${this.lastName}`
// }


// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');


// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'


/* Để vượt qua thử thách này, bạn hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.

Giữa firstName và lastName cần có 1 khoảng trắng (1 dấu space).
*/


// Đối tượng Date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth()+1; // lấy tháng +1 thêm 1 để dễ nhìn
// var day = date.getDate();

// console.log(date);
// console.log(`${day}/${month}/${year}`);



// function getNextYear() { 
//       var date = new Date();
//      return date.getFullYear() +1
      
//   }

/* bài tập đối tượng Date ****
Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, 
hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.
*/


/*
Math object

- Math.Pi         trả về số pi chi tiết 
- Math.round()    
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

*/

// console.log(Math.round(1.5)) // từ 1 đến 1.49 làm tròn xuống, trên thì làm tròn lên

// console.log(Math.abs(-4))  // trả về giá trị tuyệt đối số âm thành số dương

// console.log(Math.ceil(4.11))  // làm tròn trên dù giá trị có nhỏ bao nhiêu

// console.log( Math.floor(4.999))  // làm tròn xuống dù giá trị có nhỏ bao nhiêu

// console.log( Math.random())  // trả về số thập phân ngẫu nhiên nhỏ hơn 1

// console.log(Math.floor(Math.random() * 10)); // làm tròn xuống 1 số ngẫu nhiên nhỏ hơn 1

// console.log(Math.max(-100, 1, 90, 50, 400)); // lấy ra con số lớn nhất
// console.log(Math.min(-100, 1, 90, 50, 400)) // lấy ra con số nhỏ nhất


// var random = Math.floor(Math.random() * 5);

// var bonus = [
//       '10 coin',
//       '20 coin',
//       '30 coin',
//       '40 coin',
//       '50 coin',
// ];

// console.log(bonus[random]); // chạy ngẫu nhiên  mảng bounus *****


// var random = Math.floor(Math.random() * 100);

// if (random<20) {
//       alert('Anh Khoa Sài Bằng Giả');
// }


/*
tạo ra ra hàm random giá trị bằng o đến 99 đặt điều kiện if random trả ra nhỏ hơn 20 thì
 thông báo kêt quả
 */




 // bài tập *****

//  function getRandomItem(Array){
//       var random = Math.floor(Math.random() * Array.length);
//       return Array[random];
//   }
  
//   var main = getRandomItem([1,56,8,9,1,78,])
//   console.log(main)

//  Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.




/* Lệnh Rẽ nhánh toán tử 3 ngôi */

//  Câu lệnh rẽ nhánh - If else

//  trong câu điều if - else luôn luôn chỉ lọt vào 1 nhánh đầu tiền nó thấy đúng và k check nhánh còn lại!



// var date = 3;

// if (date === 2) {
//       console.log( 'Hôm nay là thứ 2')
// }else if (date === 3) {
//       console.log( 'Hôm nay là thứ 3')
// }else if (date === 4) {
//       console.log( 'Hôm nay là thứ 4')
// }else {
//       console.log('không biết')
// }

// Bài tập *******

// Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

// Khi a chia hết cho 3 thì return về 1
// Khi a chia hết cho 5 thì return về 2
// Khi a chia hết cho 15 thì return về 3



// function run(a) {
//       if(a % 15=== 0) {
//           return 3;
//       } else if(a % 5 === 0) {
//           return 2;
//       } else if(a % 3 === 0) {
//           return 1;
//       }
//   }
  
  
//   // Kỳ vọng
//   console.log(run(3)) // 1
//   console.log(run(5)) // 2
//   console.log(run(15)) // 3


// Câu lệnh rẽ nhánh - Switch 

/* Trong câu điều kiện Switch tính từ case đúng đầu tiên nó sẽ lọt vào tất cả case sau đó đều đúng nếu
không sử dụng break ***** break cắt đứt tất cả trong mọi trường hợp
*/ 


// var date = 2;

// switch(date) {
//       case 2: 
//       case 3: /// === sử dụng toán tử 3 dấu bằng để so sánh giá trị
//       case 4: 
//       console.log('Hôm nay là thứ 2,3,4');
//       // break;
//       case 5: 
//       console.log('Hôm nay là thứ 5');
//       // break;

//       default:
//             console.log('Anh khoa sài bằng giả'+' '+ 'không biết!');
// }



// // var date = 7;

// // if (date === (2,3,4))  {
// //       console.log('không biết')
// // }else if (date === 5){
// //  console.log(123);
// // }else if(date > 5) {
// //       console.log('anh là vô địch')
// }

/* khi nào dùng do sánh đúng sai thì dùng if - else, còn khi nào có giá trị cho trước thì dùng switch
với điều kiện số case sẽ phải lớn hơn 3 để phù hợp nhỏ hơn thì vẫn dùng if - else
*/


// function run(fruits) {
//       var result;
  
//      switch (fruits) {
//           case "Banana":
//               result = "This is a Banana";
//             //   break;
//           case "Apple":
//               result = "This is an Apple";
//               break;
//               default:
//                    result = 'anh là vô địch'
//       }
  
//       return result;
//   }

//   console.log(run("Banana"));

/*
Hoàn thành code còn thiếu #2 Bài tập *****

Cho trước một đoạn mã bị thiếu phần switch case, hãy bổ sung để hoàn thiện đoạn mã.

Chỉ bổ sung phần còn thiếu, không thay đổi code có sẵn nhé các bạn.
*/

// Toán tử 3 ngôi - Ternary operator 

// var course = {
//       name: 'Javascript',
//       coin: 250,
// }

// if ( course.coin > 0 ) {
//       console.log(`${course.coin} coin`)
// }else {
//       console.log('Miễn phí');
// } 



// var result = course.coin > 0 ? `${course.coin} coin`: 'Miễn phí'; 

//  nếu biến course.coin > 0 thì sẽ in ra `${course.coin} coin` và course.coin = 0 thì in ra miễn phí

// console.log(result);  


// var a = 1;
// var b = 2;

// var c = a > 0 ? `${a} và ${b} > 0`: b;

// console.log(c);

// lưu ý chỉ dùng trường hợp đơn giản nếu phức tạp thì dùng if else




/* Bài Tập *****
Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.

Sử dụng toán tử 3 ngôi trong bài này, không sử dụng if/else bạn nhé.
*/

// function getCanVoteMessage(age){
//       var result = age >= 18 ? "Bạn có thể bỏ phiếu":  "Bạn chưa được bỏ phiếu";
  
//       return result;
//   }
  
  
  
//   // Kỳ vọng
//   console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
//   console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'




