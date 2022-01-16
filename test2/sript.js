// //2.2
// var a = 10;
// var b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// 2.3

// var c = 15;
// var d = 2;

// var result = c + d;
// console.log(result);

// 2.4
// var a = 10;
// var b = 2;
// var c = 5;

// console.log(a + b + c);

// 2.5

// var a = 17;
// var b = 10;

// var c = a - b;
// var d = 7;

// var result = c + d;

// console.log(result);

// 2.6

// var str = 'hello world';
// console.log(str);


// 2.7

// var str = 'hi';
// var str2 = 'world'

// console.log(str + ' ' + str2);

// 2.9
// var age = 24;

// console.log("i am " + age + " years old");

//2.10
// var name = prompt("what is your name?");
// console.log("your name is " + name);

// 2.11
// var num = prompt("enter a number");
// console.log(num * num);

//2.12
// var str = 'abcde';

// console.log(str[0], str[2], str[4]);

//2.13

// var num = '12345';

// console.log(num[0] * num[1] * num[2] * num[3] * num[4]);

//2.14

// console.log(60 * 60);
// console.log(24 * 60 * 60);
// console.log(30 * 60 * 60);

//2.15

// var h = 4;
// var m = 52;
// var s = 45;

// console.log(h + ':' + m + ':' + s);

//2.16

// var num = 5;
// console.log(5 * 5);


// var arr = ['hayk', 'mark', 'taron'];
// console.log( arr[0] );
// console.log( arr[1] );
// console.log( arr[2] );
// console.log( arr[0][0] ); // 'h'
// console.log( arr[1][3] ); // 'k'

//3.1

// arr = ['a', 'b', 'c']
// console.log(arr);

// 3.3

// arr = ['a', 'b', 'c', 'd']
// console.log(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);

//3.4
// arr = [2, 5, 3, 9]

// var result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);

// var arr = ['kim', 'hayk', 'anna'];
// console.log( arr[0] );
// console.log( arr[0][0] );   // 'k'


// var user1 = { name: 'kim', age: 21, admin: false }; 
// console.log( user1['name'] );
// console.log( user1['age'] );
// console.log( user1['admin'] );

// console.log( user1.name );
// console.log( user1.age );
// console.log( user1.admin );
// 3.5

// var obj = { a: 1, b: 2, c: 3 }

// console.log(obj['c']);
// console.log(obj.c);
// Urok 3.5

// var obj = {a: 1, b: 2, c: 3};
// console.log( obj['c'] );
// console.log( obj.c );


// // Urok 3.6
// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log( obj['Коля'] );
// console.log( obj['Петя'] );


// // Urok 3.7
// var obj = {
//     1: 'Erkushabti',
//     2: 'Erek',
//     3: 'Chorek',
//     4: 'Hing',
//     5: 'Urb',
//     6: 'Shabat',
//     7: 'Kiraki'
// };

// console.log(obj['4']);
// console.log( obj.1 ); ERROR

// Urok 3.8
// var obj = {
//     1: 'Erkushabti',
//     2: 'Erek',
//     3: 'Chorek',
//     4: 'Hing',
//     5: 'Urb',
//     6: 'Shabat',
//     7: 'Kiraki'
// };

// var day = '3';
// console.log( obj[ day ] );

//3.9

// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(arr[1][0])

// //3.10

// var obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' }

// console.log(obj['js'][0]);

// Urok 3.11, 3.12

// var obj = {
//     en: ['red', 'green', 'blue'],
//     am: ['karmir', 'kanach', 'kapuyt'],
//     ru: ['krasniy', 'zeleniy', 'siniy']
// };


// var lang = 'ru';
// console.log( obj[ lang ][1] );    // 'green'
// console.log( obj[ lang ][0] );    // 'red'
// console.log( obj[ lang ][2] );    // 'blue'

// IF else...................................................


//4.1

// var a = -3;
// if (a === 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.2

// var a = 1;

// if (a > 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.3

// var a = 1;
// if (a < 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.4

// var a = 1;
// if (a >= 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.5

// var a = 1;

// if (a <= 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.6

// var a = 1;

// if (a !== 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.7

// var a = "test";

// if (a == 'test') {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.8

// var a = '1';

// if (a === '1') {
//     console.log('true');
// } else {
//     console.log('false');
// }

//4.9

// var test = true;

// if (test) {
//     console.log("true");
// } else {
//     console.log('false');
// }

// test ? console.log('true') : console.log( 'false' );

// var test = false;

// if (test) {
//     console.log("true");
// } else {
//     console.log('false');
// }

//4.10

// var test = false;

// if (!test) {
//     console.log("true");
// } else {
//     console.log('false');
// }

//4.11

// var a = 5;

// if (a > 0 && a < 5) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

//4.12

// var a = 2;

// if (a === 0 || a === 2) {
//     console.log(a + 7);
// } else {
//     console.log(a / 10);
// }

//4.13

// var a = 1;
// var b = 3;

// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }

//4.14

// var a = 5;

// var b = 7;

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// var num = 3;
// var result = " ";

// switch (num) {
//     case 1: result = 'winter'; break;
//     case 2: result = 'spring'; break;
//     case 3: result = 'summer'; break;
//     case 4: result = 'fall'; break;

// }
// console.log(result);

//4.16

// var day = -15;

// if (day >= 1 && day <= 9) {
//     console.log('1st');
// } else if (day >= 10 && day <= 19) {
//     console.log('2nd');
// } else if (day >= 20 && day <= 31) {
//     console.log('3rd');
// } else {
//     console.warn('no logic detected')
// }

//4.17

// var month = 1;

// if (month <= 2 && month >= 1 && month == 12) {
//     console.log("winter");
// } else if (month >= 3 && month <= 5) {
//     console.log("spring");
// } else if (month >= 6 && month <= 8) {
//     console.log("summer");
// } else if (month >= 9 && month <= 11) {
//     console.log("fall");
// } else {
//     console.log("wrong number");
// }

//4.18

// var str = "abcde";

// if (str[0] == 'a') {
//     console.log('yes');
// } else {
//     console.log('no');
// }

//4.19

// var str = '12345';

// if (str[0] >= 1 && str[0] <= 3) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

//4.20

// var str = '246';

// console.log(str[0] * 1 + str[1] * 1 + str[2] * 1);

//4.21

// var str = '174822';

// if (str[0] * 1 + str[1] * 1 + str[2] * 1 == str[3] * 1 + str[4] * 1 + str[5] * 1) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// WHILE...................................................................


// var i = 20;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }


// // ZUYG TVERY
// var i = 0;
// while (i < 100) {
//     console.log(i);
//     i += 2;
// }

// // KENT TVERY
// var i = 1;
// while (i < 100) {
//     console.log(i);
//     i += 2;
// }

// var i=5;
// while(i--){
//     console.log(i); // 4 3 2 1 0
// }

//5.2

// var i = 11;
// while (i < 33) {
//     console.log(i);
//     i++;
// }

//5.4

// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log('sum = ' + sum);

//5.6
// var result = 0;
// var arr = [1, 2, 3, 4, 5];
// var i = 0;
// while (i < arr.length) {
//     result += arr[i];
//     i++;
// }

// console.log(result);

//5.10

// var arr = [2, 5, -9, 15, 0, -4];
// var i = 0;
// var sum = 0;
// while (i < arr.length) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
//     i++;

// }
// console.log(sum);


// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// var i = 0;
// while (i < arr.length) {
//     if (arr[i] === 4) {
//         console.log('there is a 4');
//         break
//     }
//     i++;
// }


//5.12

// var arr = [10, 20, 30, 50, 235, 3000];
// var i = 0;
// while (i < arr.length) {
//     arr[i] += '';
//     if (arr[i][0] == 1 || arr[i][1] == 2 || arr[i][2] == 5) {
//         console.log(arr[i]);
//     }
//     i++;
// }

//5.13

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = '-';
// var i = 0;
// while (i < arr.length) {
//     result += arr[i] + '-';
//     i++;
// }
// console.log(result);

//5.14

// var arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// var i = 0;
// while (i < arr.length) {
//     if (i == 5 || i == 6) {
//         console.log(arr[i] + '*');
//     } else {
//         console.log(arr[i]);
//     }
//     i++;
// }

//5.15

// var arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// var day = 'monday';
// var i = 0;
// while (i < arr.length) {
//     if (arr[i] == day) {
//         console.log(arr[i] + '*');
//     } else {
//         console.log(arr[i]);
//     }
//     i++;
// }

//5.16

// var n = 1000;
// var num = 0;

// while ( n>50 ) {
//     n = n/2;
//     num++;
//  }

//  console.log(n); 
// console.log(num); 

//FOR ...................................................


// var i = 0;
// for (; i < 10;) {
//     console.log(i);
//     i++;
// }

// for (var i = 0; i < 10;) {
//     console.log(i);
//     i++;
// }

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// // ZUYG TVERY
// for (var i = 0; i < 100; i += 2) {
//     console.log(i);
// }


// // KENT TVERY
// for (var i = 1; i < 100; i += 2) {
//     console.log(i);
// }

//5.11 for

// var arr = [1, 2, 5, 9, 4, 13, 4, 10]

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         console.log('yes');
//         break
//     }
// }

//5.12 for

// var arr = [10, 20, 30, 50, 235, 3000];

// for (var i = 0; i < arr.length; i++) {
//     arr[i] += '';
//     if (arr[i][0] == 1 || arr[i][1] == 2 || arr[i][2] == 5) {
//         console.log(arr[i]);
//     }
// }


//homework...........................................................


//5.1
// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

//5.2

// for (var i = 11; i <= 33; i++) {
//     console.log(i);
// }

//5.3

// for (var i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

//5.4

// var sum = 0;

// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log('sum =' + sum);

// 5.5

// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//5.6

// var arr = [1, 2, 3, 4, 5];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

//5.9

// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

//5.10

// var arr = [2, -5, 9, -15, 0, 4];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         console.log(arr[i]);
//     }
// }

// 5.11

// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         console.log('yes');
//         break;
//     }
// }

//5.12

// var arr = [10, 20, 30, 50, 235, 3000];
// for (var i = 0; i < arr.length; i++) {
//     arr[i] += '';
//     if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
//         console.log(arr[i]);
//     }
// }

//5.13

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = '-';
// for (var i = 0; i < arr.length; i++) {
//     result += arr[i] + '-';
// }
// console.log(result);

//5.14

// var arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 'saturday' || arr[i] == 'sunday') {
//         console.log('*' + arr[i]);
//     } else {
//         console.log(arr[i]);
//     }
// }

//5.15

// var arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "thursday") {
//         console.log('*' + arr[i]);
//     } else {
//         console.log(arr[i]);
//     }
// }

//5.16

// var n = 1000;
// var num = 0;

// while (n > 50) {
//     n = n / 2;
//     num++;
// }

// console.log(n);
// console.log(num);


//7.1

// var i = 'js';
// console.log(i.toUpperCase());

//7.2

// var i = 'JS';
// console.log(i.toLowerCase());

//7.3

// var i = 'im learning javascript';
// console.log(i.length);

//7.4

// var i = 'im_learning_javascript';
// var n = i.slice(3, 11);
// var a = i.slice(21);
// console.log(n);
// console.log(a);

// var i = 'im_learning_javascript';
// var n = i.substr(3, 8);
// var a = i.substr(12);

// console.log(n);
// console.log(a);


// var i = 'im_learning_javascript';
// var n = i.substring(3, 11);
// var a = i.substring(12, 22);

// console.log(n);
// console.log(a);

// var i = 'im_learning_javascript';
// console.log(i.indexOf('learning'));


//7.6

// var str = 'kim kardashian';
// var n = 5;
// var result = '';
// if (str.length > n) {
//     result = str.substring(0, n) + '...';
// }
// console.log(result);

//7.7

// var str = 'im_learning_javascript';
// console.log(str.replace(/_/g, '!'));

//7.8

// var str = 'im learning javascript';
// console.log(str.split(' '));

//7.9

// var str = 'im learning javascript';
// console.log(str.split(''));

//7.10

// var date = '2025-12-31';
// var arr = date.split('-');
// var newStr = arr[2] + '.' + arr[1] + '.' + arr[0];
// console.log(newStr);

//7.11

// var arr = ['я', 'учу', 'javascript', '!'];

// var join = arr.join("+");
// console.log(join);

// var split = join.split("+");
// console.log(split);

//7.12

// var str = 'kim kardashyan';
// console.log(str[0].toUpperCase() + str.slice(1));

//7.13

// var str = 'kim kardashyan';

// var arr = str.split(' ');

// console.log(arr[0][0].toUpperCase() + arr[0].slice(1) + ' ' + arr[1][0].toUpperCase() + arr[1].slice(1))


// var str = 'kim kardashyan jan';
// var arr = str.split(' ');
// var result = '';
// for (var i = 0; i < arr.length; i++) {
//     result += arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
// }
// console.log(result);

//7.14

// var str = 'var_test_text';
// var arr = str.split('_');
// var result = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     result += arr[i][0].toUpperCase() + arr[i].slice(1)
// }
// console.log(result);

// Urok 5.7
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

// for(var key in obj){ 
//     console.log(key + '=' + obj[key]);   
// }

// 5.8

// Urok 5.7
// var obj = { Коля: '200', Вася: '300', Петя: '400' };

// for (var key in obj) {
//     console.log(key + '- zarplata ' + obj[key] + ' dollarov');
// }

// 8.1

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));

//8.2

// var arr = [1, 2, 3];

// arr.reverse();
// console.log(arr);

//8.3

// var arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//8.4

// var arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//8.5

// var arr = ['js', 'css', 'jq'];
// var first = arr.shift();

// console.log(first);

//8.6

// var arr = ['js', 'css', 'jq'];
// var last = arr.pop();

// console.log(last);

//8.7

// var arr = [1, 2, 3, 4, 5];
// var arrNew = arr.slice(0, 3);
// console.log(arrNew);

//8.8

// var arr = [1, 2, 3, 4, 5];
// var arrNew = arr.slice(3, 5);
// console.log(arrNew);

//8.9

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//8.10

// var arr = [1, 2, 3, 4, 5];
// var arrNew = arr.splice(1, 3);
// console.log(arrNew);

//8.11

// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//8.12 

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);



//8.13

// var arr = [3, 4, 1, 2, 7];
// arr.sort();
// console.log(arr);

//8.14 

// var obj = { js: 'test', jq: 'hello', css: 'world' };
// console.log(Object.keys(obj));

//function..................................................

//10.1

// function square(num) {
//     return (num * num);

// }

// console.log(square(2));

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(2, 2));

//10.3

// function math(num1, num2, num3) {
//     return (num1 - num2) / num3;
// }

// console.log(math(3, 2, 5));

//10.4

// function week(num) {

//     switch (num) {
//         case 1: return 'monday';
//         case 2: return 'tuesday';
//         case 3: return 'wednesday';
//         case 4: return 'thursday';
//         case 5: return 'friday';
//         case 6: return 'saturday';
//         case 7: return 'sunday';
//     }
// }
// console.log(week(2));

//11.1

// var arr = [1, 4, 5, 7, 5, 5, 1, 3];
// var flag = false;


// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) flag = true;
// }

// if (flag) console.log('YES');
// else console.log('NO');

//11.2

// var num = 31;
// var flag = false;
// for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = true;
//     }
// }

// if (flag) console.log('yes');
// else console.log('no');

//11.3

// var arr = [1, 1, 3, 5, 5];
// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         flag = true;
//         break;
//     }
// }
// if (flag) console.log('yes');
// else console.log('no');


//12.1

// function equal(num1, num2) {
//     return num1 === num2;
// }
// console.log(equal(2, 2));

//12.2

// function bigger(num1, num2) {
//     return num1 + num2 > 10;
// }
// console.log(bigger(10, 2));

//12.3

// function negative(num) {
//     return num < 0;
// }
// console.log(negative(-1));

//13.1

// var str = '';

// for (var i = 0; i <= 9; i++) {
//     str += i;
// }
// console.log(str);

//13.2

// var str = '';

// for (var i = 9; i > 0; i--) {
//     str += i;
// }
// console.log(str);

//13.3

// var str = '-';

// for (var i = 1; i <= 9; i++) {
//     str += i + '-';
// }
// console.log(str);

//13.4

// var str = '';
// for (var i = 0; i <= 20; i++) {
//     str += 'x';
//     console.log(str);
// }

//13.5

// for (var i = 1; i < 10; i++) {

//     var str = '';
//     for (var j = 0; j < i; j++) {
//         str += i;
//     }
//     console.log(str);
// }


//13.6

// var str = '';
// for (var i = 0; i <= 5; i++) {
//     str += 'xx';
//     console.log(str);
// }

//14.1

// var arr = [];
// var str = '';


// for (var i = 0; i < 5; i++) {
//     str += 'x';
//     arr.push(str);
// }

// console.log(arr);

//14.2

// var arr = [];
// for (var i = 1; i < 5; i++) {

//     var str = '';
//     for (var j = 0; j < i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }

// console.log(arr);


//homework...........................................


//9.1

// var str = 'mark';
// str = str[0].toUpperCase() + str.substr(1);
// console.log(str);

//9.2

// var str = '123456';
// result = str.split('').reverse().join('');
// console.log(result);

//9.3

// var str = 'http://website';
// if (str.substr(0, 7) == 'http://') {
//     console.log(true);
// } else { console.log(false); };

//9.4

// var str = 'index.html';

// if (str.substr(5) == '.html') {
//     console.log(true);
// } else {
//     console.log(false);
// }

//10.1

// function square(a) {
//     return a * a;
// }

// console.log(square(2));

//10.2

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));

//10.3

// function math(a, b, c) {
//     return (a - b) / c;
// }

// console.log(math(9, 1, 4));

//10.4

// function week(num) {

//     switch (num) {
//         case 1: return 'monday';
//         case 2: return 'tuesday';
//         case 3: return 'wednesday';
//         case 4: return 'thursday';
//         case 5: return 'friday';
//         case 6: return 'saturday';
//         case 7: return 'sunday';
//     }
// }

// console.log(week(3));

//11.1

// var arr = [1, 3, 5, 4, 5, 5, 6, 9];

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) flag = true;
// }

// if (flag) console.log('YES');
// else console.log('NO');

//11.2

// var num = 31;
// var flag = false;
// for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = true;
//     }
// }
// if (flag) {
//     console.log('yes');
// } else console.log('no');

//11.3

// var arr = [1, 3, 5, 4, 5, 5, 6, 9];
// var flag = false;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         flag = true;
//     }
// }
// if (flag) {
//     console.log('yes');
// } else { console.log('no'); }


//12.1

// function equal(a, b) {
//     return a == b;
// }
// console.log(equal(2, 2));

//12.2

// function equal(a, b) {
//     if (a + b > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(equal(10, 2));

//12.3

// function equal(a) {
//     return a < 0;
// }
// console.log(equal(-2));

//13.1

// var str = '';
// for (var i = 1; i <= 9; i++) {
//     str += i;
// }
// console.log(str);

//13.2

// var str = '';
// for (var i = 9; i >= 1; i--) {
//    str += i;
// }
// console.log(str);

//13.3

// var str = '-';
// for (var i = 1; i <= 9; i++) {
//     str += i + '-';
// }
// console.log(str);

//13.4

// var str = '';
// for (var i = 0; i <= 20; i++) {
//     str += 'x';
//     console.log(str);
// }

//13.5

// for (var i = 1; i < 10; i++) {
//     var str = '';
//     for (var j = 0; j < i; j++) {
//         str += i;

//     }
//     console.log(str);
// }

//13.6

// var str = '';
// for (var i = 0; i < 6; i++) {
//     str += 'xx';
//     console.log(str);
// }

//14.1

// var arr = [];
// var str = '';


// for (var i = 0; i < 7; i++) {
//     str += 'x';
//     arr.push(str);
// }

// console.log(arr);

//14.2


// var arr = [];
// for (var i = 1; i < 7; i++) {
//     var str = '';
//     for (var j = 0; j < i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);

//14.3

// function arrayFill(value, length) {
//     var arr = [];
//     for (var i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(arrayFill('x', 5));

//14.4

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sum = 0;
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     count++;
//     if (sum > 10) {
//         break;
//     }
// }
// console.log(count);

//14.5

// var arr = [2, 4, 6, 8];
// var newArr = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);

// VERCRECINK ARAJIN SYUNY......................................

// var arr = [
//     [2, 4, 6],
//     [3, 5, 7],
//     [2, 3, 4]
// ];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i][0]);
// }

// GLXAVOR ANKYUNAGIC

// var arr = [
//     [2, 4, 6],
//     [3, 5, 7],
//     [2, 3, 4]
// ];
// for (var i = 0; i < arr.length; i++) {

//     console.log(arr[i][i]);
// }

// ERKRORDAKAN ANKYUNAGIC............................

// var arr = [
//     [2, 4, 6],
//     [3, 5, 7],
//     [2, 3, 4]
// ];
// var j = arr.length - 1;

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i][j]);
//     j--;
// }

//14.6

// var arr = [[1, 2, 3], [4, 5], [6]];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// alert(sum);

//15.1

// function isNumberInRange(a) {
//     return a > 0 && a < 10;
// }
// console.log(isNumberInRange(-1));

//15.2

// var arr = [1, 2, 3, -1, -2, -3];

// function isNumberInRange(a) {

//     return a > 0 && a < 10;
// }
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

//15.3

// function getDigitsSum(num) {
//     num += ''; // '123'
//     var sum = 0;
//     for (var i = 0; i < num.length; i++) {
//         sum += 1 * num[i];
//     }
//     return sum;
// }

// console.log(getDigitsSum(123));


//homework.................................

//13.1

// var str = '';
// for (var i = 1; i <= 9; i++) {
//     str += i;
// }
// console.log(str);

//13.2

// var str = '';
// for (var i = 9; i >= 1; i--) {
//     str += i;
// }
// console.log(str);

//13.3

// var str = '-';
// for (var i = 1; i <= 9; i++) {
//     str += i + '-';
// }
// console.log(str);

//13.4

// var str = '';
// for (var i = 0; i <= 20; i++) {
//     str += 'x';
//     console.log(str);
// }

//13.5


// for (var i = 1; i <= 9; i++) {
//     var str = '';
//     for (var j = 0; j < i; j++) {
//         str += i;
//     }
//     console.log(str);
// }

//13.6

// var str = '';
// for (var i = 0; i < 5; i++) {
//     str += 'xx';
//     console.log(str);
// }

//14.1

// var arr = [];
// var str = '';
// for (var i = 1; i <= 9; i++) {
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);

//14.2

// var arr = [];
// for (var i = 1; i <= 9; i++) {
//     var str = '';
//     for (var j = 0; j < i; j++) {
//         str += i;

//     }
//     arr.push(str);
// }
// console.log(arr);

//14.3

// function arrayFill(value, length) {
//     var arr = [];
//     for (var i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }
// console.log(arrayFill('a', 3));

//14.4

// var arr = [5, 2, 5, 2, 6];
// var sum = 0;
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     count++;
//     if (sum > 10) {
//         break;
//     }
// }
// console.log(count);

//14.5

// var arr = [1, 4, 5, 2, 8, 6, 9];
// var newArr = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);

//14.6

// var arr = [[1, 2, 3], [4, 5], [6]];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }

// console.log(sum);

//15.1

// function isNumberInRange(a) {
//     return a > 0 && a < 10;
// }


// console.log(isNumberInRange(1));

//15.2

// var arr = [-1, 4, 6, -9, -3, 2];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// 15.3

// function getDigitsSum(num) {
//     num += '';
//     var sum = 0;
//     for (var i = 0; i < num.length; i++) {
//         sum += 1 * num[i];
//     }
//     return sum;
// }

//15.4

// var str = '';
// for (var i = 1; i <= 2021; i++) {
//     if (getDigitsSum(i) == 13) {
//         str += i + ',';
//     }
// }
// console.log(str);

//15.5

// function isEven(num) {
//     return num % 2 == 0;;
// }
// console.log(isEven(4));

//15.6

// var arr = [1, 4, 5, 2, 8, 6, 9];
// newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//15.7
// var arr = [];
// function getDivisors(a) {
//     for (var i = 1; i < a; i++) {
//         if (a % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(getDivisors(15));

//16.1

// function ucfirst(str) {
//     var newStr = '';
//     var arr = str.split(' ');
//     for (var i = 0; i < arr.length; i++) {
//         newStr += arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
//     }
//     return newStr;
// }
// console.log(ucfirst('hello, how are you?'));

//16.2

// var str = 'var_text_hello';

// var arr = str.split('_');
// var newStr = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     newStr += arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// console.log(newStr);

//16.3

// function inArray(text, arr) {

//     for (var i = 0; i < arr.length; i++) {
//         if (text === arr[i]) {
//             return true;
//         }
//     }

//     return false;

// }


// console.log(inArray('kim', ['jan', 'kim', 'kardashian', 'jan']));

//16.4

// var str = '123456';
// var newStr = '';
// for (var i = 0; i < str.length; i += 2) {
//     newStr += str[i + 1] + str[i];
// }
// console.log(newStr);

//17.1

// function func(arr) {
//     console.log(arr[0]);
//     arr.splice(0, 1);
//     if (arr.length > 0) {
//         func(arr);
//     }
// }


//homework.......................

//15.1

// function isNumberInRange(a) {
//     return a > 0 && a < 10;
// }

// console.log(isNumberInRange(11));


//15.2

// var arr = [1, 2, 3, -1, -2, -3];

// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);

//15.3

// function getDigitsSum(num) {
//     num += '';
//     var sum = 0;
//     for (var i = 0; i < num.length; i++) {
//         sum += 1 * num[i];
//     }
//     return sum;
// }


// function power(a, b){
//     var result = 1;

//     for(var i=0; i<b; i++){
//         result *= a;
//     }

//     return result;
// }


// console.log( power(2,2) );  // 4
// console.log( power(2,10) ); // 1024


// function compare(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     console.log(a+b+c+d+e);
//                 }
//             }
//         }
//     }
// }

// console.log( compare(5)(7)(2)(3)(4) ); 

// function compare(a) {
//     return function (b) {
//         if (a > b) return true;
//         else if (b > a) return false;
//         else return null;
//     }
// }

// console.log(compare(2)(3));

// var book1 = {};

// book1.title = "Bookik";
// book1.pubYear = 2004;
// book1.price = 200;

// console.log(book1);

// for (var key in book1) {
//     console.log(key + ':' + book1[key]);
// }


//5.9

// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

//5.10

// var arr = [2, -5, 9, -15, 0, -4];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

//5.11

// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         console.log('yes');
//         break;
//     }
// }

//5.12

// var arr = [10, 20, 30, 50, 235, 3000];
// for (var i = 0; i < arr.length; i++) {
//     arr[i] += '';
//     if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
//         console.log(arr[i]);
//     }
// }

//5.13

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = '-';
// for (var i = 0; i <= arr.length; i++) {
//     str += i + '-';
// }
// console.log(str);

//5.14

// var arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 'saturday' || arr[i] == 'sunday') {
//         console.log(arr[i] + ' * ');
//     } else {
//         console.log(arr[i]);
//     }
// }

//5.15

// var arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// var day = '* ';
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 'saturday') {
//         console.log(day += arr[i]);
//     } else {
//         console.log(arr[i]);
//     }
// }

//5.16

// var n = 1000;
// var num = 0;

// while (n > 50) {
//     n /= 2;
//     num++;
// }

// console.log(n);
// console.log(num);


//7.8

// var str = 'я учу javascript!';
// console.log(str.split(' '));

//7.9

// var str = 'я учу javascript!';
// console.log(str.split(''));

//7.10

// var date = '2025-12-31';
// var arr = date.split('-');
// console.log(arr[2] + '.' + arr[1] + '.' + arr[0]);

//7.11

// var arr = ['я', 'учу', 'javascript', '!'];
// var str = arr.join('+');
// console.log(str);

//7.12

// var str = 'я учу javascript!';
// console.log(str[0][0].toUpperCase() + str.slice(1));

//7.13

// var str = 'я учу javascript!';
// var arr = str.split(' ');
// console.log(arr[0][0].toUpperCase() + arr[0].slice(1) + ' ' + arr[1][0].toUpperCase()
//     + arr[1].slice(1) + ' ' + arr[2][0].toUpperCase() + arr[2].slice(1));

//7.14

// var str = 'var_test_text';
// var strNew = '';
// var arr = str.split('_');
// console.log(arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1) + arr[2][0].toUpperCase() + arr[2].slice(1));


// HOMEWORK>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//8.9

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//8.10

// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.splice(1, 3);
// console.log(newArr);

//8.11

// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//8.12

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// console.log(arr);

//8.13

// var arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

//8.14

// var obj = { js: 'test', jq: 'hello', css: 'world' };
// var arr = Object.keys(obj);
// console.log(arr);

//9.1

// var str = 'hello world';
// str = str[0].toUpperCase() + str.substr(1);
// console.log(str);

//9.2

// var str = '123456';
// result = str.split('').reverse().join('');
// console.log(result);

//9.3

// var str = 'http://website';
// if (str.substr(0, 7) == 'http://') {
//     console.log(true);
// } else console.log(false);

//9.4

// var str = 'index.html';
// if (str.substr(5) == '.html') {
//     console.log(true);
// } else console.log(false);

//10.1

// function sqare(a) {
//     return a * a;
// }

// console.log(sqare(4));

//10.2

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(2, 3));

//10.3

// function math(a, b, c) {
//     return (a - b) / c;
// }

// console.log(math(9, 3, 2));

//10.4

// function week(num) {

//     switch (num) {
//         case 1: return 'monday';
//         case 2: return 'tuesday';
//         case 3: return 'wednesday';
//         case 4: return 'thursday';
//         case 5: return 'friday';
//         case 6: return 'saturday';
//         case 7: return 'sunday';
//     }
// }

// console.log(week(7));

//11.1

// var arr = [1, 5, 3, 5, 4, 2];
// var flag;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         flag = true;
//     }
// }
// if (flag) {
//     console.log('yes');
// } else {
//     console.log('no');
// }











//12.1

// function equal(a, b) {
//     return a == b;
// }

// console.log(equal(4, 4));

//12.2

// function idk(a, b) {
//     return a + b < 10;
// }
// console.log(idk(5, 4));

//12.3

// function negative(a) {
//     return a < 0;
// }
// console.log(negative(-9));


//random problems

// let k = 2;

// let arr = [2, 5, 6, 7, 8];
// let sum = 0;
// for (var i = 0; i < k; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let arr = [7, 15, 30, 25, 30, 41, 29, 21];

// count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] > 10) {
//         count++;
//     }
// }
// console.log(count);

// let arr = [100, 1000, 200, 1, 2, 3, 4];
// let count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 100 == 0) {
//         count++;
//     }
// }
// console.log(count);


//16.1 GOOD ENOUGH

// var str = 'hello world jan';

// var arr = str.split(' ');

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i][0].toUpperCase() + arr[i].slice(1));
//     str = arr.join(' ');

// }

//16.2

// var str = 'var_text_hello';


// var arr = str.split('_');

// var str1 = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     str1 += arr[i][0].toUpperCase() + arr[i].slice(1);
// }


// console.log(str1);

//16.3

// function inArray(text, arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (text === arr[i]) {
//             return true;
//         }
//     }
//     return false;
// }


// console.log(inArray('sun', ['jay', 'sun', 'fun']));



// let arr = [6, 4, 3, 7, 8, 3, 2, 6, 7, 1];
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         sum += arr[i];
//     }
// }
// console.log(sum);


// var numbers = [1, 2, 3, 4, 5, 6, 18, 8, 9, 10, 12];
// var max = numbers[0];
// var min = numbers[0];
// var sum = 0;

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
//     else if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// sum = min + max;
// console.log(sum);


// Гомельские олимпиады\ 1. Одномерный массив\13_Go9 - "Сумма N"

// let arr = [1, 2, 6, 5];
// sum = 0;
// let N = 4;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < N) {
//         sum += arr[i];
//     }
// }

// console.log(sum);


// Гомельские олимпиады\ 1. Одномерный массив\11_Go8 - "Самый - самый" 
// var arr = [234, 54, 3, 45, 12, 234, 647];


// var min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == min) {
//         console.log(i);
//         break;
//     }
// }


//HOMEWORK

//Гомельские олимпиады\ 1. Одномерный массив\12_Gg - "Послежинки"

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

//Гомельские олимпиады\ 1. Одномерный массив\11_Gs8 - "Min+Max"

// var arr = [4, 8, 1, 9, 5, 6, 7, 11, 9, 10];

// var max = arr[0];
// var min = arr[0];

// var sum = 0;
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     } else if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// sum = min + max;
// console.log(sum);


//Гомельские олимпиады\ 1. Одномерный массив\13_Go9 - "Сумма N"

// let arr = [3, 2, 3, 4, 5];
// let N = arr.length;
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < N) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

//Гомельские олимпиады\ 1. Одномерный массив\11_Go8 - "Самый - самый"

// let arr = [1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 13];
// let min = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == min) {
//         console.log(i);
//         break;
//     }
// }

//

//Гомельские олимпиады\ 1. Одномерный массив\14_Gg - "Разность максимума и минимума" 

// var arr = [4, 8, 1, 9, 5, 6, 7, 12, 9, 10];

// var max = arr[0];
// var min = arr[0];

// var sum = 0;
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     } else if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// sum = max - min;
// console.log(sum);

// Гомельские олимпиады\ 1. Одномерный массив\12_Gs9 - "Количество странных чисел"

// var arr = [4, 8, 1, 9, 5, 6, 7, 12, 9, 10];
// let count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0 && arr[i] % 4 != 0) {
//         count++;
//     }
// }
// console.log(count);

//Гомельские олимпиады\ 1. Одномерный массив\12_Go9 - "SumMax"

// let arr = [4, 8, 1, 9, 5, 6, 7, 12, 9, 12];
// let sum = 0;
// let totalMax = 0;
// let max = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == max) {
//         totalMax++;
//     }
// }
// sum = totalMax * max;
// console.log(sum);


//Гомельские олимпиады\ 1. Одномерный массив\11_Gg8 - "Подсчёт-Пересчёт"

// let arr = [1, 2, 3, 4, 2, 2, 5, 8, 9, 4];
// let count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 8 % 3) {
//         count++;
//     }
// }
// console.log(count);

//: Гомельские олимпиады\ 1. Одномерный массив\11_Gs - "Подарки" 

// let arr = [9, 2, 1, 6, 2, 7, 1, 1, 6, 8, 9, 7];
// let max = arr[0];
// let min = arr[0];
// let totalMax = 0;
// let totalMin = 0;

// for (var i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     } else if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == max) {
//         totalMax++;
//     } else if (arr[i] == min) {
//         totalMin++;
//     }
// }

// console.log(totalMax);
// console.log(totalMin);
// console.log(totalMax + totalMin);






// function random(min, max) {
//     const diff = max - min;
//     return Math.round(Math.random() * diff) + min;
// }

// var arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(random(500, 1300));

// }
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// let total = min + max;
// console.log(max + min);



// function random(min, max) {
//     const diff = max - min;
//     return Math.round(Math.random() * diff) + min;
// }

// var arr = [];
// for (let i = 0; i < 12; i++) {
//     arr.push(random(-130, 130));
// }
// console.log(arr);

// let max = Math.max(...arr);
// let min = Math.min(...arr);

// let indexMax = arr.indexOf(max);
// let indexMin = arr.indexOf(min);

// console.log(indexMax);
// console.log(indexMin);





//homework

// 1. Одномерный массив\15_Go9 - "Удвоенная сумма положительных чисел"


// let nums = [-3, 5, -10, 8, -2];
// for (let i = 0; i < 10; i++) {

// }


// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= 0) {
//         sum += nums[i] * 2;
//         console.log(sum);
//     }
// }



// 1. Одномерный массив\14_Gg9 - "Сумма произведений"



// var nums = [-42, -61, 6, -48, -83, 49, 61, 95, 93, 92];
// //          0, 1  2  3  4  5  6  7  8  9

// var sum = 0;

// for (var i = 0; i < nums.length; i++) {
//     sum += nums.splice(0, 1) * nums.splice(nums.length - 1, 1);
// }

// if (nums.length == 2) {
//     sum += nums[0] * nums[1];
// }
// console.log(sum);




// /Гомельские олимпиады\ 1. Одномерный массив\15_Gg - "Условно минимальный"

// var arr = [4, 4, 3, 2, 1];
// var K = 2;

// var min = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < min && arr[i] > K) {
//         min = arr[i];
//     }
// }

// console.log(arr.indexOf(min));


// 1. Одномерный массив\10_Gg - "Пары Весельчака"

// let arr = [-98, 64, -65, -90, 95, -42, -84, 11, -34, 4];
// let sum = 0;
// for (var i = 0; i < arr.length / 2; i++) {
//     sum += arr[i] * arr[arr.length - 1 - i];
// }

// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) result.push(arr[i] + max);
//     else if (arr[i] % 2) result.push(arr[i] - min);
// }
// console.log(result);

//1. Одномерный массив\14_Gs9 - "Наибольшая сумма"
// let arr = [5, 0, 31, 861, 202, 272];
// let sum = 0;
// let max = arr[0];
// let newMax = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
// arr.splice(arr.indexOf(max))

//     }
// if (newMax < arr[i]) {
//     newMax = arr[i];

// }
// }
// console.log(newMax);
// console.log(sum);


//1. Одномерный массив\10_Gs8 - "Считака"

// let arr = [5, 8, 1, 4, 7, 4, 1, 8];
// let sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum - Math.min(...arr));



// let arr = [1, 2, 3, 4, 5, 6, 7]
// let sum = 0;
// for (var i = 1; i < arr.length; i++) {
//     if (i % 3 == 0) sum += arr[i];
// }
// console.log(sum);

//.................>>>>>>>>>...........>>>>>>>>>>.........>>>>>>>>>>.........>>>>>>>>>........>>>>>>>>>>>........>>>>>

//1. Одномерный массив\10_Gg8 - "Шарики"

// let arr = [5, 1, 6, 3, 4, 5];
// let ans = [];
// let sum = 0;
// for (let i = 0; i < 2; i++) {
//     ans.push(Math.max(...arr))
//     arr.splice(arr.indexOf(Math.max(...arr), 1));
//     for (let j = i; j < ans.length; j++) {
//         sum += ans[i];
//     }
// }
// console.log(ans);
// console.log(sum);

// . Одномерный массив\10_Gs - "Квадрат Шутника"

// let arr = [3, 4, 2, 5, -10, 2, -3, -2, 1, 45];

// let ans = [];
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         ans.push(arr[i]);
//     }
// }
// console.log(ans);
// console.log(Math.max(...ans) * Math.max(...ans));

//1. Одномерный массив\16_Gg9 - "Локальные максимумы"  ?????................

// let arr = [9, 1, 2, 5, 4, 3, 3, 6, 6, 2];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
//         console.log(i + 1);
//     }
// }


// 1. Одномерный массив\11_Gs8o - "Различные числа"

// let a = [3, 0, 6, 0];
// let b = [], bCount = 0;

// b[bCount++] = a[0];


// for (let i = 1; i < a.length; i++) {

//     for (let j = 0; j < bCount; j++) {
//         if (a[i] === b[j]) break;
//         else if (j == bCount - 1) {
//             b[bCount++] = a[i];
//         }
//     }

// }

// for (let i = 0; i < bCount; i++) {
//     let arr = a.filter(el => el === b[i]);
//     console.log(b[i], arr.length);
// }









let arr = [
    { date: "1", title: "first" },
    { date: "2", title: "second" },
    { date: "3", title: "third" }
];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].date, arr[i].title);
//     document.querySelectorAll('.obj').innerHTML += arr[i].date + ' ' + arr[i].title
// }

arr.map(el => {
    document.querySelector('.obj').innerHTML += el.date + ' ' + el.title;
})







