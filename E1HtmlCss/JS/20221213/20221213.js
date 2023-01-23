
function fnPrint(txt) {
    console.log(txt);
    document.write(txt, '<br/>');
}

//-------- 1 ------------------------------------------
fnPrint('Užduotis Nr. 1 ------------------');
function fnHello(name) {
    fnPrint('Labas, ' + name);
}
fnHello('Elena');

//-------- 2 ------------------------------------------
fnPrint('Užduotis Nr. 2 ------------------');
function fnTxtLenght(txt) {
    let len = txt.length;
    return len;
}

let txt = "Sukurkite funkciją kuri priimtų vieną parametrą (tekstą) ir grąžintų ...";
txt = fnTxtLenght(txt);
fnPrint(txt);

//-------- 3 ------------------------------------------
fnPrint('Užduotis Nr. 3 ------------------');
function fnPerson(name, last_name) {
    let person = name.charAt(0).toUpperCase() + name.slice(1) + ' ' + last_name.charAt(0).toUpperCase() + last_name.slice(1);
    return person;
}
let person = fnPerson('vardenis', 'pavardenis');
fnPrint(person);

//-------- 4 ------------------------------------------
fnPrint('Užduotis Nr. 4 ------------------');
function fnRandom() {
    let result;
    let min = 0;
    let max = 5;
    let dig1 = Math.floor(Math.random() * (max - min + 1) + min);
    let dig2 = Math.floor(Math.random() * (max - min + 1) + min);
    let dig3 = Math.floor(Math.random() * (max - min + 1) + min);
    result = dig1 + ', ' + dig2 + ', ' + dig3;
    return result;
}
let dig = fnRandom();
fnPrint(dig);

//-------- 5 ------------------------------------------
fnPrint('Užduotis Nr. 5 ------------------');
function fn5(from, to, limit) {
    if (isNaN(from) || isNaN(to) || isNaN(limit)) return 'Funkcijai turi būti perduoti skaičiai';
    if (from > to) return 'Skaičius from yra didesnis už skaičių to';
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(Math.floor(Math.random() * (to - from + 1) + from))
    }
    return arr;
}
fnPrint(fn5(3, 15, 10));