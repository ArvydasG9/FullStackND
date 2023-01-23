function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fnPrint(txt) {
    console.log(txt);
    document.write(txt, '<br/>');
}

//--- Masyvai užduotis - 1 ------
fnPrint('<br/> --- Masyvai užduotis - 1 ------');
let arr1 = [];
for (let i = 0; i < 10; i++) {
    if (i < 2) arr1.push(rand(5, 25))
    else arr1.push(arr1[arr1.length - 2] + arr1[arr1.length - 1])
}
fnPrint(arr1);

//--- Masyvai užduotis - 2 ------
fnPrint('<br/> --- Masyvai užduotis - 2 ------');
let arr2 = [];
let arr2el = [];
let arr2clone = [];
for (let i = 0; i < 10; i++) {
    let count2 = 0;
    let eLenght = rand(2, 20);//atskiro masyvo elemento ilgis
    do {
        arr2el.push(String.fromCharCode(rand(65, 90)));
        count2++;
    } while (count2 < eLenght)
    arr2.push(arr2el);
    arr2el = [];
}
fnPrint(arr2);
for (let i = 0; i < arr2.length; i++) arr2clone[i] = [...arr2[i]].sort();
fnPrint(arr2clone);

//-----------------------------------------------------------------------------------------------------
//--- Funkcijos užduotis - 1 ------
fnPrint('<br/>--- Funkcijos užduotis - 1 ------');
function fnF1(num, step) {
    let res = Math.pow(num, step);
    return res;
}
fnPrint(fnF1(5, 2));

//--- Funkcijos užduotis - 2 ------
fnPrint('<br/>--- Funkcijos užduotis - 2 ------');
function fnF2(txt) {
    let res = '<h1>' + txt + '</h1>'
    return res;
}
fnPrint(fnF2('Tai užduotis Nr. 2 - Funkcijos'));

//--- Funkcijos užduotis - 3 ------
fnPrint('<br/>--- Funkcijos užduotis - 3 ------');
function fnF3(txt, num) {
    let res = '<h' + num + '>' + txt.slice(4, txt.length - 5) + '</h' + num + '>'
    return res;
}
let x = fnF2('Tai užduotis Nr. 3 - Funkcijos');
fnPrint(fnF3(x, 4));

//--- Funkcijos užduotis - 4 ------
fnPrint('<br/>--- Funkcijos užduotis - 4 ------');
const fnF4 = num => {
    if (typeof num != 'number') return 'Turi būti įvestas skaičius'
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}
fnPrint(fnF4(2))

//--- Funkcijos užduotis - 5 ------
fnPrint('<br/>--- Funkcijos užduotis - 5 ------');
fnPrint(fnF4(2))

//--- Funkcijos užduotis - 6 ------
fnPrint('<br/>--- Funkcijos užduotis - 6 ------');
function fnF6() {
    let res = [];
    for (i = 0; i < 100; i++) res.push(rand(997, 15991));
    return res;
}
let arr6 = fnF6();
fnPrint(arr6);

//--- Funkcijos užduotis - 7 ------
fnPrint('<br/>--- Funkcijos užduotis - 7 ------');
function fn7() {
    let res = [];
    res = arr6;
    // for (i = 0; i < arr6.length; i++) if (arr6[i] > 5000 && fnF4(arr6[i])) res.push(arr6[i]);
    for (i = 0; i < arr6.length; i++) if (!(arr6[i] > 5000 && fnF4(arr6[i]))) arr6.splice(i, 1);
    return res;
}
fnPrint(fn7())