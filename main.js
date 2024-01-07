//1) İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function users(username) {
//     console.log(username + " Aktivdir ");
// }
// // Funksiyanı 3 defe çağırmaq
// users("Nicat");
// users("Murad");
// users("Elçin");

// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın
// function Numbers(a, b, c) {
//     let eded = a;

//     if (b > eded) {
//         eded = b;
//     }

//     if (c > eded) {
//     eded = c;
//     }

//     return eded;
// }
// // Funksiyanı 3 dəfə çağırmaq
// console.log("Ən böyük ədəd:", Numbers(5, 8, 12));
// console.log("Ən böyük ədəd:", Numbers(20, 26, 23));
// console.log("Ən böyük ədəd:", Numbers(150, 151, 82));


// 3)Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// function money(rubl , dollar) {
//     // 1 dollar 75 rubldur.
//     let oneDollar = 75;
//     // ümumü dolları rubla çevirmek
//     let commonRubl = dollar * oneDollar;
//     // ümumi pulun hesablanması
//     let commonMoney = rubl + commonRubl;
//     console.log("rubl = " , rubl);
//     console.log("dollar = " , dollar);
//     console.log("ümumi rubl'a çevrilmiş mebleğ: ", commonMoney , "rubl");
// }
// money(100 , 200);


// Task-04
// Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
// İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
// onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
// Birdən ona qədər rəqəmin daxil edilməsi zamanı boşluqsuz bir söz göstərilir.(bir ,iki, üç və.s)
// Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
// məsələn, "iyirmi bir".

// function numberToText(num) {
//     let teklik = [
//         "", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz",
//         "on", "on bir", "on iki", "on üç", "on dörd", "on beş", "on altı", "on yeddi", "on səkkiz", "on doqquz"
//     ];

//     let onluq = [
//         "", "", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"
//     ];

//     if (num <= 19) {
//         return teklik[num];
//     } else {
//         let numTeklik = num % 10;
//         let numOnluq = Math.floor(num / 10);
//         return onluq[numOnluq] + (numTeklik !== 0 ? " " + teklik[numTeklik] : "");
//     }
// }
// let Number = prompt("1 ilə 99 arasında bir rəqəm yaz :");
// // ededi stringe teçirmek
// let number = parseInt(Number);

// if (number >= 1 && number <= 99) {
//     let changeNumber = numberToText(number);
//     console.log(changeNumber);
// } else {
//     console.log("doğru rəqəm daxil edin.");
// }

// Task-05
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.
// ?????????????

// Task-06
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// function calc(a, b, proses) {
//     switch (proses) {
//         case '+':
//             return a + b;  
//         default:
//             return "404 NOT FOUND";
//     }
// }
// console.log(calc(4, 6, '+'));
// console.log(calc(5,4, "*"));

// Task-07
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq
// ????????????????????


// ((((((((((((((((((Task-08
//     capitalizeWords funksiyasını yazın.
//     Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
//     Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
//     Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.))))))))))))))))))
// function Words(text) {
//     // baş herfleri teyin edib böyük herife çeviririk
//     return text.replace(/\b\w/g, (char) => char.toUpperCase());
// }
// console.log(Words('Hello my name is Harry'));


// Task-09
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.

// function isEven(number) {
//     return number % 2 === 0;
// }
// console.log(isEven(10)); // true 
// console.log(isEven(23)); // false 

// Task-10
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +71234567890
// function isValidNumber(phoneNumber) {
//     // startsWith ilk reqemin başlamasını yoxlayır
//     return phoneNumber.length === 11 && phoneNumber.startsWith('+994');
// }
// console.log(isValidNumber('+9943456789')); // true 
// console.log(isValidNumber('+1234567890')); // false
// console.log(isValidNumber('+71234567')); // false






