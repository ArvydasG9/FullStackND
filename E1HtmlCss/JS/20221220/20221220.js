
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// 2022-12-20//////////////////////////////////////////////////////////////////////////////////////////////////////
const data = {
    person: "Amine Jafur",
    job: "Full Stack Developer",
    phone: "+212-6-12-65 xx xx",
    email: "amine.jafur@gmail.com",
    web: "codepem.io/aminejaf",
    city: "Casablanca, Morocco"
}
// document.querySelector("#person").textContent = data.person
document.querySelector('img').onclick = () => {
    document.querySelector("#person").textContent = data.person
    document.querySelector("#job").textContent = data.job
    document.querySelector("#phone").textContent = data.phone
    document.querySelector("#email").textContent = data.email
    document.querySelector("#web").textContent = data.web
    document.querySelector("#city").textContent = data.city
}



// 2022-12-16//////////////////////////////////////////////////////////////////////////////////////////////////////
//--- Masyvai užduotis - 1 ------
let arrx1 = [];
function fnND_1216_1() {
    for (let i = 0; i < 10; i++) {
        arrx1[i] = []
        for (j = 0; j < 5; j++) {
            let x = rand(5, 25);
            arrx1[i].push(x);//arrx1[i][j] = arrx1[i].push(x);
        }
    }
    document.querySelector('#dn1216_1').innerHTML = "<p><b>" + arrx1 + "</b></p>"
}
//--- Masyvai užduotis - 2 a  ------
function fnND_1216_2a() {
    let count2a = 0;
    for (let i = 0; i < 10; i++)
        for (j = 0; j < 5; j++) if (arrx1[i][j] > 10) count2a++;
    let rez = `Masyvo elementų, didesnių už 10 (>10) yra: ${count2a}`;
    document.querySelector('#dn1216_2a').innerHTML = "<p><b>" + rez + "</b></p>"
}

//--- Masyvai užduotis - 2 b  ------
function fnND_1216_2b() {
    let max2b = 0;
    for (let i = 0; i < 10; i++)
        for (j = 0; j < 5; j++) max2b = Math.max(arrx1[i][j], max2b);
    let rez = `Didžiausias masyvo elementas yra: ${max2b}`;
    document.querySelector('#dn1216_2b').innerHTML = "<p><b>" + arrx1 + "</b></p>"
}

//--- Masyvai užduotis - 2 c  ------
function fnND_1216_2c() {
    let sum2c = 0;
    let rez = '';
    for (j = 0; j < 5; j++) {
        sum2c = 0;
        for (let i = 0; i < 10; i++) sum2c += arrx1[i][j];
        rez += `Antro lygio masyvų su indeksu ${j} suma yra: ${sum2c}`;
    }
    document.querySelector('#dn1216_2c').innerHTML = "<p><b>" + rez + "</b></p>"
}

//--- Masyvai užduotis - 2 d  ------
function fnND_1216_2d() {
    for (let i = 0; i < 10; i++) arrx1[i].length = arrx1[i].length + 7
    document.querySelector('#dn1216_2d').innerHTML = "<p><b>" + arrx1 + "</b></p>"
}

//--- Masyvai užduotis - 2 e  ------
function fnND_1216_2e() {
    let sum2e = 0;
    let arr2e = [];
    for (j = 0; j < 5; j++) {
        sum2e = 0;
        for (let i = 0; i < 10; i++) sum2e += arrx1[i][j];
        arr2e.push(sum2e);
    }
    document.querySelector('#dn1216_2e').innerHTML = "<p><b>" + arr2e + "</b></p>"
}

//--- Masyvai užduotis - 3 -------------------------------------
let arr3 = [];
function fnND_1216_3() {
    for (let i = 0; i < 10; i++) {
        let xLenght = rand(0, 5);
        if (xLenght > 0) { //masyvo ilgis xLenght su reiksmemis rand(0, 10)          
            arr3[i] = [];
            for (j = 0; j < xLenght; j++) arr3[i].push(rand(0, 10));
        }
        else { //reiksme rand(0, 10) - Ne masyve
            arr3[i] = rand(0, 10);
        }
    }
    document.querySelector('#dn1216_3').innerHTML = "<p><b>" + arr3 + "</b></p>"
}

//--- Masyvai užduotis - 4 -------------------------------------
function fnND_1216_4() {
    arr3.sort((a, b) => {
        if (Array.isArray(a)) a = arrSum(a);
        if (Array.isArray(b)) b = arrSum(b);
        return a - b;
    })
    let rez = arr3;
    rez += `<br/>Masyvo reikšmių suma: ${arrSum(arr3)}`

    document.querySelector('#dn1216_4').innerHTML = "<p><b>" + rez + "</b></p>"
}

function arrSum(arr) {
    let sum = 0;
    arr.map((el) => {
        if (Array.isArray(el)) {
            sum += arrSum(el);
        } else {
            sum += el;
        }
    });
    return sum;
}

// 2022-12-14//////////////////////////////////////////////////////////////////////////////////////////////////////
//--- Masyvai užduotis - 1 ------
function fnND_1214m_1() {
    let arr1 = [];
    for (let i = 0; i < 10; i++) {
        if (i < 2) arr1.push(rand(5, 25))
        else arr1.push(arr1[arr1.length - 2] + arr1[arr1.length - 1])
    }
    document.querySelector('#dn1214m_1').innerHTML = "<p><b>" + arr1 + "</b></p>"
}

//--- Masyvai užduotis - 2 ------
function fnND_1214m_2() {
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
    let rez = arr2;
    for (let i = 0; i < arr2.length; i++) arr2clone[i] = [...arr2[i]].sort();
    rez += '<br/>' + arr2clone;
    document.querySelector('#dn1214m_2').innerHTML = "<p><b>" + rez + "</b></p>"
}



//-----------------------------------------------------------------------------------------------------
//--- Funkcijos užduotis - 1 ------
function fnND_1214_1() {
    document.querySelector('#dn1214_1').innerHTML = "<p><b>" + fnF1(5, 2) + "</b></p>"
}
function fnF1(num, step) {
    let res = Math.pow(num, step);
    return res;
}

//--- Funkcijos užduotis - 2 ------
function fnND_1214_2() {
    let text = fnF2('Tai užduotis Nr. 2 - Funkcijos')
    document.querySelector('#dn1214_2').innerHTML = "<p><b>" + text + "</b></p>"
}
function fnF2(txt) {
    let res = '<h1>' + txt + '</h1>'
    return res;
}

//--- Funkcijos užduotis - 3 ------
function fnND_1214_3() {
    let x = fnF2('Tai užduotis Nr. 3 - Funkcijos');
    let rez = fnF3(x, 4);
    document.querySelector('#dn1214_3').innerHTML = "<p><b>" + rez + "</b></p>"
}
function fnF3(txt, num) {
    let res = '<h' + num + '>' + txt.slice(4, txt.length - 5) + '</h' + num + '>'
    return res;
}

//--- Funkcijos užduotis - 4 ------
function fnND_1214_4() {
    let rez = fnF4(2);
    document.querySelector('#dn1214_4').innerHTML = "<p><b>" + rez + "</b></p>"
}
const fnF4 = num => {
    if (typeof num != 'number') return 'Turi būti įvestas skaičius'
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}


//--- Funkcijos užduotis - 5 ------
// fnPrint(fnF4(2))

//--- Funkcijos užduotis - 6 ------
let arr6 = []
function fnND_1214_6() {
    arr6 = fnF6();
    document.querySelector('#dn1214_6').innerHTML = "<p><b>" + arr6 + "</b></p>"
}
function fnF6() {
    let res = [];
    for (i = 0; i < 100; i++) res.push(rand(997, 15991));
    return res;
}

//--- Funkcijos užduotis - 7 ------
function fnND_1214_7() {
    document.querySelector('#dn1214_7').innerHTML = "<p><b>" + fn7() + "</b></p>"
}
function fn7() {
    let res = [];
    res = arr6;
    for (i = 0; i < arr6.length; i++) if (!(arr6[i] > 5000 && fnF4(arr6[i]))) arr6.splice(i, 1);
    return res;
}


// 2022-12-13//////////////////////////////////////////////////////////////////////////////////////////////////////
//-------- 1 ------------------------------------------
function fnND_1213_1() {
    document.querySelector('#dn1213_1').innerHTML = "<p><b>" + fnHello('Elena') + "</b></p>"
}

function fnHello(name) {
    return 'Labas, ' + name;
}

//-------- 2 ------------------------------------------
function fnND_1213_2() {
    let txt = "Sukurkite funkciją kuri priimtų vieną parametrą (tekstą) ir grąžintų ...";
    txt = fnTxtLenght(txt);
    document.querySelector('#dn1213_2').innerHTML = "<p><b>" + txt + "</b></p>"
}

function fnTxtLenght(txt) {
    let len = txt.length;
    return len;
}

//-------- 3 ------------------------------------------
function fnND_1213_3() {
    let person = fnPerson('vardenis', 'pavardenis');
    document.querySelector('#dn1213_3').innerHTML = "<p><b>" + person + "</b></p>"
}

function fnPerson(name, last_name) {
    let person = name.charAt(0).toUpperCase() + name.slice(1) + ' ' + last_name.charAt(0).toUpperCase() + last_name.slice(1);
    return person;
}

//-------- 4 ------------------------------------------
function fnND_1213_4() {
    let dig = fnRandom();
    document.querySelector('#dn1213_4').innerHTML = "<p><b>" + dig + "</b></p>"
}

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

//-------- 5 ------------------------------------------
function fnND_1213_5() {
    let rez = fn5(3, 15, 10);
    document.querySelector('#dn1213_5').innerHTML = "<p><b>" + rez + "</b></p>"
}

function fn5(from, to, limit) {
    if (isNaN(from) || isNaN(to) || isNaN(limit)) return 'Funkcijai turi būti perduoti skaičiai';
    if (from > to) return 'Skaičius from yra didesnis už skaičių to';
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(Math.floor(Math.random() * (to - from + 1) + from))
    }
    return arr;
}

// 2022-12-09//////////////////////////////////////////////////////////////////////////////////////////////////////
function fnArrAlphabet() {
    arx = []
    do {
        arx.push(String.fromCharCode(rand(65, 90)));//65-90 didžiosios raidės, 97-122 mažosios raidės
    }
    while (arx.length < 200)
    return arx;
}
// -------------- 1 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
let ar1 = []
function fnND_1209_1() {
    let rez = '';
    ar1 = fnArrAlphabet();
    console.log(ar1);
    let j = 0;
    let count1 = 0;
    for (let i = 65; i <= 90; i++) {
        j = 0;
        count1 = 0;
        do {
            if (String.fromCharCode(i) === ar1[j]) count1++;
            j++;
        } while (j < arx.length)
        rez += "Raidių " + String.fromCharCode(i) + " yra: " + count1 + '<br/>';
    }
    document.querySelector('#dn1209_1').innerHTML = "<p><b>" + rez + "</b></p>"
}

// -------------- 2 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
function fnND_1209_2() {
    document.querySelector('#dn1209_2').innerHTML = "<p><b>" + ar1.sort() + "</b></p>"
}
// console.log('Užduotis Nr. 2 ------------------');
// console.log(ar1.sort());

// -------------- 3 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
let ar3_x = [];
function fnND_1209_3() {
    let rez = '';
    let ar3_1 = fnArrAlphabet();
    let ar3_2 = fnArrAlphabet();
    let ar3_3 = fnArrAlphabet();
    rez = ar3_1 + '<br/>' + ar3_2 + '<br/>' + ar3_3 + '<br/>';
    for (let i = 0; i < ar3_1.length; i++) {
        ar3_x.push(ar3_1[i] + ar3_2[i] + ar3_3[i]);
    }
    rez += ar3_x;
    document.querySelector('#dn1209_3').innerHTML = "<p><b>" + rez + "</b></p>"
}

// --- a +b ------------------------------------------------------
function fnND_1209_3ab() {
    let rez = '';
    let uk = 0;//unikali kombinacija masyve
    let ur = 0;//unikali kombinacija masyvo elemente
    let str3_unik = '';
    let Str3_dubl = "";
    let dbl = false;//dubliavimo registacija
    let elStr = '';
    let ar3a = [];//masyvas apzaidimams
    ar3a = [...ar3_x];
    for (let i = 0; i < ar3a.length; i++) {
        elStr = ar3a[i];//laikinai irasom tikrinama reiksme i kintamaji
        if (elStr[0] != elStr[1] && elStr[0] != elStr[2] && elStr[1] != elStr[2]) ur++;//unikalios kombinacijos masyvo elementuose
        ar3a[i] = '-';//atzymim tikrinama reiksme
        for (let j = i + 1; j < ar3a.length; j++) {
            if (ar3a[j] === '-') j++;
            if (elStr === ar3a[j]) {
                dbl = true;//yra kombinacijos dublis
                ar3a[j] = '-';//atzimim tikrinama reiksme, kaip patikrinta
            }
        }
        if (!dbl) {
            str3_unik += ' ' + elStr;
            uk++;
        }
        else {
            Str3_dubl += ' ' + elStr;
        }
        dbl = false;
    }
    rez = "Unikalių kombinacijų masyve yra: " + uk + '<br/>';
    rez += 'Jų reikšmės:' + str3_unik + '<br/>';
    rez += "Dubliai:" + Str3_dubl + '<br/>';
    rez += "Unikalių kombinacijų masyvo elementuose yra: " + ur;
    document.querySelector('#dn1209_3ab').innerHTML = "<p><b>" + rez + "</b></p>"
    // console.log(ar3_x)
}

// -------------- 4 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
function fnArrDig() {
    let arX4 = []
    let dig;
    do {
        dig = rand(100, 999);
        if (!arX4.includes(dig)) arX4.push(dig);
    } while (arX4.length < 100)
    return arX4;
}

let ar4_1 = [];
let ar4_2 = [];
function fnND_1209_4() {
    ar4_1 = fnArrDig();
    ar4_2 = fnArrDig();
    document.querySelector('#dn1209_4').innerHTML = "<p><b>" + ar4_1 + '<br/>' + ar4_2 + "</b></p>"
}

// -------------- 5 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
function fnND_1209_5() {
    let ar5 = [];
    for (let i = 0; i < ar4_1.length; i++) if (!ar4_2.includes(ar4_1[i])) ar5.push(ar4_1[i])
    document.querySelector('#dn1209_5').innerHTML = "<p><b>" + ar5 + "</b></p>"
}

// -------------- 6 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
function fnND_1209_6() {
    let ar6 = [];
    for (let i = 0; i < ar4_1.length; i++) if (ar4_2.includes(ar4_1[i])) ar6.push(ar4_1[i])
    document.querySelector('#dn1209_6').innerHTML = "<p><b>" + ar6 + "</b></p>"
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 2022-12-08//////////////////////////////////////////////////////////////////////////////////////////////////////
// -------------- 1 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>
function fnND_1208_1() {
    let pointKazys = 0;
    let pointPetras = 0;
    let partija = 0;
    while (true) {
        pointKazys += rand(5, 25);
        pointPetras += rand(10, 20);
        if (pointKazys >= 222 || pointPetras >= 222) {
            console.log("Partija baigta. Sužaista: " + partija + " kartų")
            if (pointKazys === pointPetras) {
                document.querySelector('#dn1208_1').innerHTML = "<p><b>"
                    + "Kazys: " + pointKazys + ", Petras: " + pointPetras + ". Partija baigta - lygiosios"
                    + "</b></p>"
                return;
            }
            else if (pointKazys > pointPetras) {
                document.querySelector('#dn1208_1').innerHTML = "<p><b>"
                    + "Kazys: " + pointKazys + ", Petras: " + pointPetras + ". Partiją laimėjo: Kazys"
                    + "</b></p>"
                return;
            }
            else if (pointKazys < pointPetras) {
                document.querySelector('#dn1208_1').innerHTML = "<p><b>"
                    + "Kazys: " + pointKazys + ", Petras: " + pointPetras + ". Partiją laimėjo: Petras"
                    + "</b></p>"
                return;
            }
        }
        partija++;
    }
}

// -------------- 2 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
const vinisMax = 8.5 * 10;
let ikalta = 0;
let smugiai = 0;
function fnND_1208_2() {
    // -------------- 2 a -------
    for (let i = 0; i < 5; i++) {
        let ikalta = 0;
        do {
            ikalta += rand(5, 20);
            smugiai++;
        }
        while (ikalta <= vinisMax)
    }
    document.querySelector('#dn1208_2').innerHTML = "<p><b>"
        + 'Mažais smūgiais įkalta per ' + smugiai + ' smūgius'
        + "</b></p>"
}

// --------------------------
// -------------- 2 b -------
function fnND_1208_2b() {
    ikalta = 0;
    smugiai = 0;
    for (let i = 0; i < 5; i++) {
        let ikalta = 0;
        do {
            if (rand(0, 1) != 1) ikalta += rand(20, 30);//jei pataikom
            smugiai++;
        }
        while (ikalta <= vinisMax)
    }
    document.querySelector('#dn1208_2b').innerHTML = "<p><b>"
        + 'Smarkiais smūgiais įkalta per ' + smugiai + ' smūgius'
        + "</b></p>"
}

// -------------- 3 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>

function fnND_1208_3() {
    let rezult;
    let str = '';
    let dig;
    let count = 0;
    let ar = []
    do {
        dig = rand(1, 200);
        //--- 1v
        if (!ar.includes(dig)) {
            ar.push(dig);
            if (count === 0) str = String(dig);
            else str += ' ' + String(dig);
            count++;
        }
    }
    while (count < 50)
    rezult = ar + '</b>' + str + '</b>'

    let str1 = '';
    for (let i = 0; i < str.split(' ').length; i++) str1 += ' ' + str.split(' ').sort((a, b) => a - b)[i]
    str1 = str1.trim();
    rezult = str1
    console.log(str1);
    document.querySelector('#dn1208_3').innerHTML = "<p><b>" + rezult + "</b></p>"
}

// 2022-12-06//////////////////////////////////////////////////////////////////////////////////////////////////////
//--- 1 ---->>>
function fnND_1206_1() {
    let kvadr = '';
    let krastine = 100;
    for (let i = 0; i < krastine; i++) {
        kvadr += '<p style="margin: 0; padding: 0; height: 7px;">';
        for (let j = 0; j < krastine; j++) {
            if (j === i || j === (krastine - 1 - i)) kvadr += '<span style="color: red;">*</span>'
            else kvadr += '*';
        }
        if (i < krastine - 1) kvadr += '</p>';
    }
    document.querySelector('#dn1206_1').innerHTML = "<p><b>" + kvadr + "</b></p>"
}
//--- 3 ---->>>
function fnND_1206_3() {
    let S = 'S:';
    let H = 'H:';
    let rez3 = '';
    let rez1;
    let rez2;
    while (true) {
        rez3 = rand(0, 1);
        if (rez3 === 0) S += '0';
        else H += '1';
        if (rez3 === 1) {
            rez1 = S + '; ';
            rez2 = H;
            document.querySelector('#dn1206_3').innerHTML = "<p><b>" + rez1 + rez2 + "</b></p>"
            return;
        }
    }
}
//--- 3 a ---->>>
function fnND_1206_3b() {
    let S = 'S:';
    let H = 'H:';
    let rez3 = '';
    let count = 0;
    while (true) {
        rez3 = rand(0, 1);
        if (rez3 === 0) S += '0';
        else {
            count++;
            H += '1';
        }
        if (count === 3) {
            document.querySelector('#dn1206_3b').innerHTML = "<p><b>" + S + '; ' + H + "</b></p>"
            return;
        }
    }
}

//--- 3 c ---->>>
function fnND_1206_3c() {
    let count = 0;
    let S = 'S:';
    let H = 'H:';
    let rezult = '';
    while (true) {
        let rez3 = rand(0, 1);
        rezult += rez3;
        if (rez3 === 0) {
            count = 0;
            S += '0';
        }
        else {
            count++;
            H += '1';
        }
        if (count === 3) {
            document.querySelector('#dn1206_3c').innerHTML = "<p><b>Krito: " + rezult + ' -> ' + S + '; ' + H + "</b></p>"
            return;
        }
    }
}

//--- 4 ---->>>
let arr = [];
function fnND_1206_4() {
    let el = ''
    arr = [];
    for (let i = 0; i < 30; i++) {
        arr.push(rand(5, 25));
    }
    document.querySelector('#dn1206_4').innerHTML = "<p><b>" + arr + "</b></p>"
}

//--- 5 ---->>>
let x = 0;
let mx = 0;
let mxId = '';
function fnND_1206_5() {
    let rez;
    let sumPaire = 0;
    let count = 0;
    // let arr = [];
    while (x < arr.length) {
        // document.write(arr[x]);
        if (arr[x] > 10) count++;//a
        if (arr[x] > mx) {//b
            mx = arr[x];
            mxId = x + '/';
        }
        else if (arr[x] === mx) {
            mxId += x + '/';
        }
        if (x % 2 === 0) sumPaire += arr[x];//c
        x++;
    }
    rez = '> 10 skaičių yra: ' + count;//a
    rez += '<br/> Max masyvo reikšmė yra: ' + mx + ". jo arba jų indeksai: " + mxId;//b
    rez += '<br/> porinių skaičių suma yra: ' + sumPaire;//c
    document.querySelector('#dn1206_5').innerHTML = "<p><b>" + rez + "</b></p>";
}

//--- 5d ---->>>
let arr1 = [];
function fnND_1206_5d() {
    let x = 0;
    while (x < arr.length) {
        arr1.push(arr[x] - x);
        // document.write(arr1[x]);
        x++;
    }
    document.querySelector('#dn1206_5d').innerHTML = "<p><b>" + arr1 + "</b></p>"
}

//--- 5e ---->>>
function fnND_1206_5e() {
    for (let i = 0; i < 10; i++) arr1.push(rand(5, 25));
    document.querySelector('#dn1206_5e').innerHTML = "<p><b>" + arr1 + "</b></p>";
}

//--- 5f ---->>>
let arr5f_1 = []
function fnND_1206_5f() {
    let arr5f_2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) arr5f_1.push(arr[i]);
        else arr5f_2.push(arr[i]);
    }
    document.querySelector('#dn1206_5f').innerHTML = "<p><b>"
        + arr + '<br/>'
        + arr5f_1 + '<br/>'
        + arr5f_2 + '<br/>'
        + "</b></p>"
}


// document.write('--- 5f --- <br/>');
// let arr5f_1 = []
// let arr5f_2 = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) arr5f_1.push(arr[i]);
//     else arr5f_2.push(arr[i]);
// }
// document.write(arr + '<br/>');
// document.write(arr5f_1 + '<br/>');
// document.write(arr5f_2 + '<br/>');
// //<<<-----------
//--- 5g ---->>>
function fnND_1206_5g() {
    for (let i = 0; i < arr5f_1.length; i++) {
        if ((i % 2) === 0 && arr5f_1[i] > 15) arr5f_1[i] = 0;
    }
    document.querySelector('#dn1206_5g').innerHTML = "<p><b>" + arr5f_1 + "</b></p>"
}


// document.write('--- 5g --- <br/>');
// for (let i = 0; i < arr5f_1.length; i++) {
//     if ((i % 2) === 0 && arr5f_1[i] > 15) arr5f_1[i] = 0;
// }
// document.write(arr5f_1 + '<br/>');
//<<<-----------
//--- 5h ---->>>
function fnND_1206_5h() {
    for (let i = 0; i < arr5f_1.length; i++) {
        if (arr5f_1[i] > 10) arr5f_1.splice(i, 1);
    }
    document.querySelector('#dn1206_5h').innerHTML = "<p><b>" + arr5f_1 + "</b></p>"
}

// 2022-12-05//////////////////////////////////////////////////////////////////////////////////////////////////////
//--- 1 ---->>>
function fnND_1205_1() {
    let ats = "";
    let xStr = "";
    let s = rand(0, 6);
    xStr = '';
    ats = "";
    i = 0;
    while (i < 400) {
        if (i % 50 == 0) xStr += '<br/> ';
        xStr += '*';
        i++;
    }
    ats += xStr;
    document.querySelector('#dn1205_1').innerHTML = "<p><b>" + ats + "</b></p>";
}

//--- 2 ---->>>
function fnND_1205_2() {
    let sk = rand(1, 6);
    sk = '<h' + sk + '>' + sk + '</h' + sk + '>';
    document.querySelector('#dn1205_2').innerHTML = "<p><b>" + sk + "</b></p>"
}

//--- 3 ---->>>
function fnND_1205_3() {
    let dig1 = rand(-10, 10);
    let dig2 = rand(-10, 10);
    let dig3 = rand(-10, 10);
    let rezult;
    if (dig1 < 0) rezult = '<span style="color: green;">' + dig1 + '</span>'
    else if (dig1 === 0) rezult = '<span style="color: red;">' + dig1 + '</span>'
    else if (dig1 > 0) rezult = '<span style="color: blue;">' + dig1 + '</span>'
    //------
    if (dig2 < 0) rezult = '<span style="color: green;">' + dig2 + '</span>'
    else if (dig2 === 0) rezult = '<span style="color: red;">' + dig2 + '</span>'
    else if (dig2 > 0) rezult = '<span style="color: blue;">' + dig2 + '</span>'
    //------
    if (dig3 < 0) rezult = '<span style="color: green;">' + dig3 + '</span>'
    else if (dig3 === 0) rezult = '<span style="color: red;">' + dig3 + '</span>'
    else if (dig3 > 0) rezult = '<span style="color: blue;">' + dig3 + '</span>'
    document.querySelector('#dn1205_3').innerHTML = "<p><b>" + rezult + "</b></p>"
}

//--- 4 ---->>>
function fnND_1205_4() {
    let st1 = "An American in Paris";
    let st2 = "Breakfast at Tiffany's";
    let st3 = "2001: A Space Odyssey";
    let st4 = "It's a Wonderful Life";
    let r4 = '';
    r4 = st1 + ' ----> ' + fnBalsesDel(st1) + '<br/>'
    r4 += st2 + ' ----> ' + fnBalsesDel(st2) + '<br/>'
    r4 += st3 + ' ----> ' + fnBalsesDel(st3) + '<br/>'
    r4 += st4 + ' ----> ' + fnBalsesDel(st4) + '<br/>'
    document.querySelector('#dn1205_4').innerHTML = "<p><b>" + r4 + "</b></p>"
}

function fnBalsesDel(txt) {
    let u = String.fromCharCode(97);//a
    txt = txt.replaceAll(u, '');
    txt = txt.replaceAll(u.toUpperCase(), '');
    u = String.fromCharCode(101);
    txt = txt.replaceAll(u, '');
    txt = txt.replaceAll(u.toUpperCase(), '');
    u = String.fromCharCode(105);
    txt = txt.replaceAll(u, '');
    txt = txt.replaceAll(u.toUpperCase(), '');
    u = String.fromCharCode(111);
    txt = txt.replaceAll(u, '');
    txt = txt.replaceAll(u.toUpperCase(), '');
    u = String.fromCharCode(117);
    txt = txt.replaceAll(u, '');
    txt = txt.replaceAll(u.toUpperCase(), '');
    u = String.fromCharCode(121);
    txt = txt.replaceAll(u, '');
    txt = txt.replaceAll(u.toUpperCase(), '');
    return txt;
}

//--- 5 ---->>>
function fnND_1205_5() {
    xStr = '';
    ats = "";
    i = 0;
    let x;
    let count = 0;
    let str = "";
    while (i < 300) {
        x = rand(0, 300);
        if (x > 150) count++;
        if (x > 275) str += '<span style="color: red">' + x + '  </span>' + " ";
        else str += x + " ";
        i++;
    }
    ats += str + "<br/> >150 yra: " + count
    document.querySelector('#dn1205_5').innerHTML = "<p><b>" + ats + "</b></p>"
}

//--- 6---->>>
function fnND_1205_6() {
    i = 1;
    xStr = '';
    ats = "";
    while (i <= 3000) {
        if ((i % 77) == 0) {
            if (xStr != "") xStr += ", ";
            xStr += i;
        }
        i++;
    }
    ats += "<br/>" + xStr;
    document.querySelector('#dn1205_6').innerHTML = "<p><b>" + ats + "</b></p>"
}

// 2022-12-02//////////////////////////////////////////////////////////////////////////////////////////////////////
//---------- 1 ------->>>>>>>
function fnND_1202_1() {
    let candel = rand(5, 3000);//zvakiu kiekis
    let price = 1;//standartine zvakes kaina
    let discount = 0;//nuolaida
    let sum = 0;//suma be nuolaidos
    sum = candel * price;
    if (sum > 1000 && sum <= 2000) {
        sum *= 0.97;
        price = (sum / candel).toFixed(2);
    }
    else if (sum > 2000) {
        sum *= 0.96;
        price = (sum / candel).toFixed(2);
    }
    document.querySelector('#dn1202_1').innerHTML =
        "<p><b>" +
        "Perkama: " + candel + " žvakių, kurių kaina " + price + " EUR. Viso:" + sum.toFixed(2) + " EUR"
        + "</b></p>"
}
//<<<<-----------------------
//---------- 2 ------->>>>>>>
function fnND_1202_2() {
    let x1 = rand(0, 100);
    let x2 = rand(0, 100);
    let x3 = rand(0, 100);
    let result;
    result = "Sugeneruoti skaičiai:" + x1 + "/" + x2 + "/" + x3;
    let xv1 = Math.round((x1 + x2 + x3) / 3);
    result += "; Jų vidurkis:" + xv1
    let xv2 = 0;
    let el = 0;
    if (x1 >= 10 && x1 <= 90) {
        el++;
        xv2 += x1;
    }
    if (x2 >= 10 && x2 <= 90) {
        el++;
        xv2 += x2;
    }
    if (x3 >= 10 && x3 <= 90) {
        el++;
        xv2 += x3;
    }
    if (el == 0) result += "; Gauti skaičiai nepatenka į intervalą, pagal kurį skaičiuojamas vidurkis";
    else result += "; Gautų skaičių nuo 10 iki 90 vidurkis: " + Math.round(xv2 / el);
    document.querySelector("#dn1202_2").innerHTML = "<p><b>" + result + "</b></p>";
}

//---------- 3 ------->>>>>>>
// console.log("3 - užduotis ----------------------");
function fn(t) {
    if (String(t).length == 1) t = "0" + t;
    return t;
}
function fnND_1202_3() {
    let result;
    let t1 = rand(0, 86399) * 1000;
    t1 += 100000000000;//1970-01-01 00:00:00
    let t2 = rand(0, 300) * 1000;
    t2 += t1;
    t1 = new Date(t1);
    t2 = new Date(t2);
    result = fn(t1.getHours()) + ":" + fn(t1.getMinutes()) + ":" + fn(t1.getSeconds());
    result += "; " + fn(t2.getHours()) + ":" + fn(t2.getMinutes()) + ":" + fn(t2.getSeconds()) + " - su pridėtu laiku";
    document.querySelector("#dn1202_3").innerHTML = "<p><b>" + result + "</b></p>"
}

// 2022-12-01//////////////////////////////////////////////////////////////////////////////////////////////////////
// ----   1  --------------
function fnND_1201_1() {
    let n1 = rand(0, 4);
    let n2 = rand(0, 4);
    let rez;
    if (Math.min(n1, n2) === 0) return document.querySelector('#dn1201_1').innerHTML = "<p><b>" + "dalyba iš 0 negalima" + "</b></p>";
    if (n1 > n2) rez = n1 / n2;
    else rez = n2 / n1;
    document.querySelector('#dn1201_1').innerHTML =
        "<p><b>" + n1 + "; " + n2 + "</b></p>"
        + "<p><b>" + rez + "</b></p>"
        + "<p><b>Suapvalinus: " + rez.toFixed(2) + "</b></p>";
}

// ----   2  --------------
function fnND_1201_2() {
    let k1 = rand(0, 25);
    let k2 = rand(0, 25);
    let k3 = rand(0, 25);
    let rez;
    console.log(k1);
    console.log(k2);
    console.log(k3);
    if (k1 == k2 || k1 == k3 || k2 == k3) rez = "Vidytinės reikšmės nėra";
    else if (Math.max(k2, k3) > k1 && Math.min(k2, k3) < k1) rez = "Vidytinė reikšmė: " + k1;
    else if (Math.max(k1, k3) > k2 && Math.min(k1, k3) < k2) rez = "Vidytinė reikšmė: " + k2;
    else if (Math.max(k1, k2) > k3 && Math.min(k1, k2) < k3) rez = "Vidytinė reikšmė: " + k3;
    document.querySelector('#dn1201_2').innerHTML =
        "<p><b>" + k1 + "; " + k2 + "; " + k3 + "</b></p>"
        + "<p><b>" + rez + "</b></p>";
}

// ----   3  --------------
const vardasAkt = "Jean-Paul";
const pavardeAkt = "Belmondo";
function fnND_1201_3() {
    // const vardasAkt = "Jean-Paul";
    // const pavardeAkt = "Belmondo";
    let res = vardasAkt.substring(0, 3) + pavardeAkt.substring(0, 3);
    document.querySelector('#dn1201_3').innerHTML = "<p><b>" + res + "</b></p>";
}

// ----   4  --------------
function fnND_1201_4() {
    let s = String.fromCharCode(rand(97, 122)) + String.fromCharCode(rand(97, 122)) + String.fromCharCode(rand(97, 122))
    document.querySelector('#dn1201_4').innerHTML = "<p><b>" + s + "</b></p>"
}


// 2022-11-30//////////////////////////////////////////////////////////////////////////////////////////////////////
// const vardasAkt = "Žan-Pol";
// const pavardeAkt = "Belmando";
function fnND_1130_1() {//-------- 1 ---------------------
    let result;
    // const vardasAkt = "Jean-Paul";
    // const pavardeAkt = "Belmondo";
    if (vardasAkt.length > pavardeAkt.length) result = pavardeAkt;
    else result = vardasAkt;
    document.querySelector('#dn1130_1').innerHTML = "<span><b>" + result + "</b></span>"//`<h2>$(result)</h2>`
}

function fnND_1130_2() {//-------- 2 ---------------------
    const vardasMe = "Arvydas";
    const pavardeMe = "Grigalauskas";
    const born = new Date("2000");
    let d = new Date();
    d = d.getFullYear() - born.getFullYear();
    document.querySelector('#dn1130_2').innerHTML =
        "<span><b>" +
        "Aš esu " + vardasMe + " " + pavardeMe + ". Man yra " + d + " metai(ų)"
        + "</b></span>";
}

//-------- 3 --------------
function fnND_1130_3() {
    const vardasAkt2 = vardasAkt;
    const pavardeAkt2 = pavardeAkt;
    let rezult = "";
    rezult = vardasAkt2[vardasAkt2.length - 3];
    rezult += vardasAkt2[vardasAkt2.length - 2];
    rezult += vardasAkt2[vardasAkt2.length - 1];
    rezult += pavardeAkt2[pavardeAkt2.length - 3];
    rezult += pavardeAkt2[pavardeAkt2.length - 2];
    rezult += pavardeAkt2[pavardeAkt2.length - 1];
    document.querySelector('#dn1130_3').innerHTML = rezult;
}

//-- 4------------------------
function fnND_1130_4() {
    let txt = "Once upon a time in hollywood";
    txt = txt.replaceAll('o', '*').replaceAll('O', '*');
    document.querySelector('#dn1130_4').innerHTML = txt;
}

//--- 5 -----------------------------
function fnND_1130_5() {
    let rez;
    let x1 = Math.floor(Math.random() * 3);
    let x2 = Math.floor(Math.random() * 3);
    let x3 = Math.floor(Math.random() * 3);
    let x4 = Math.floor(Math.random() * 3);
    rez = String(x1) + String(x2) + String(x3) + String(x4);
    console.log(rez)
    document.querySelector('#dn1130_5').innerHTML =
        "<p><b>"
        + "Sugeneruoti skaičiai: " + rez
        + "</b></p>"
        + "<p><b>"
        + "Skaičių 0 yra: " + (rez.length - rez.replaceAll('0', '').length)
        + "</b></p>"
        + "<p><b>"
        + "Skaičių 1 yra: " + (rez.length - rez.replaceAll('1', '').length)
        + "</b></p>"
        + "<p><b>"
        + "Skaičių 2 yra: " + (rez.length - rez.replaceAll('2', '').length)
        + "</b></p>";
}
