function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fnArrAlphabet() {
    arx = []
    do {
        arx.push(String.fromCharCode(rand(65, 90)));//65-90 didžiosios raidės, 97-122 mažosios raidės
    }
    while (arx.length < 200)
    return arx;
}

// -------------- 1 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 1 ------------------');
let ar1 = []
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
    console.log("Raidių " + String.fromCharCode(i) + " yra: " + count1)
}
// -------------- 2 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 2 ------------------');
console.log(ar1.sort());

// -------------- 3 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 3 ------------------');
let ar3_1 = fnArrAlphabet();
let ar3_2 = fnArrAlphabet();
let ar3_3 = fnArrAlphabet();
console.log(ar3_1);
console.log(ar3_2);
console.log(ar3_3);
let ar3_x = [];
for (let i = 0; i < ar3_1.length; i++) {
    ar3_x.push(ar3_1[i] + ar3_2[i] + ar3_3[i]);
}
console.log(ar3_x);

// --- a +b ------------------------------------------------------
console.log('Užduotis Nr. 3 a ir b ------------------');
let uk = 0;//unikali kombinacija masyve
let ur = 0;//unikali kombinacija masyvo elemente
let str3_unik = '';
let Str3_dubl = "";
let dbl = false;//dubliavimo registacija
let elStr = '';
let ar3a = [];//masyvas apzaidimams
ar3a = [...ar3_x];
console.log('test', ar3_x);
// let ar3b = [];//masyvas apzaidimams
// ar3b = ar3_x;
// console.log(ar3_x)
// console.log(ar3b)
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
console.log("Unikalių kombinacijų masyve yra: " + uk);
console.log('Jų reikšmės:' + str3_unik);
console.log("Dubliai:" + Str3_dubl);
console.log("Unikalių kombinacijų masyvo elementuose yra: " + ur);

//---?????????---------------------
console.log('Neaišku kodėl čia pakeistas masyvas ar3_x ???')
console.log(ar3_x)//--->>> ??????????????? kodėl pakeistas masyvas ar3_x 
//---?????????---------------------

// -------------- 4 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 4 ------------------');
function fnArrDig() {
    let arX4 = []
    // for (let i = 0; i < 100; i++) {
    //     arX4.push(rand(100, 999))
    // }
    let dig;
    do {
        dig = rand(100, 999);
        if (!arX4.includes(dig)) arX4.push(dig);
    } while (arX4.length < 100)
    return arX4;
}

let ar4_1 = [];
let ar4_2 = [];
ar4_1 = fnArrDig();
ar4_2 = fnArrDig();
console.log(ar4_1);
console.log(ar4_2);
// -------------- 5 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 5 ------------------');
let ar5 = [];
for (let i = 0; i < ar4_1.length; i++) if (!ar4_2.includes(ar4_1[i])) ar5.push(ar4_1[i])
console.log(ar5);


// -------------- 6 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 6 ------------------');
let ar6 = [];
for (let i = 0; i < ar4_1.length; i++) if (ar4_2.includes(ar4_1[i])) ar6.push(ar4_1[i])
console.log(ar6)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<