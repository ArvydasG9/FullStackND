let i = 0;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fnArrPrint(arr = []) {
    let r = '';
    for (let i = 0; i < arr.length; i++) {
        if (r.length > 0) r += ', ' + arr[i];
        else r += arr[i];
    }
    r += '<br/>';
    return r;
}

//--- 1 ---->>>
document.write("--- 1 ir 2 ---- <br/>");
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
document.write(kvadr + '<br/>');
//<<<-----------
//--- 3 ---->>>
document.write("--- 3 ---- <br/>");
let S = 'S:';
let H = 'H:';
let rez3 = '';

document.write('--- 3a --- <br/>');
while (true) {
    rez3 = rand(0, 1);
    if (rez3 === 0) S += '0';
    else H += '1';
    if (rez3 === 1) {
        document.write(S + '<br/>');
        document.write(H + '<br/>');
        break;
    }
}

let count = 0;
S = 'S:';
H = 'H:';
document.write('--- 3b --- <br/>');
while (true) {
    rez3 = rand(0, 1);
    if (rez3 === 0) S += '0';
    else {
        count++;
        H += '1';
    }
    if (count === 3) {
        document.write(S + '<br/>');
        document.write(H + '<br/>');
        break;
    }
}

count = 0;
S = 'S:';
H = 'H:';
document.write('--- 3c --- <br/>');
while (true) {
    rez3 = rand(0, 1);
    if (rez3 === 0) {
        count = 0;
        S += '0';
    }
    else {
        count++;
        H += '1';
    }
    if (count === 3) {
        document.write(S + '<br/>');
        document.write(H + '<br/>');
        break;
    }
}


//--- 4 ---->>>
document.write('--- 4 --- <br/>');
let arr = [];
let el = ''
for (let i = 0; i < 30; i++) {
    arr.push(rand(5, 25));
}
// document.write(arr.length + '<br/>');
document.write(fnArrPrint(arr));

//--- 5 ---->>>
document.write('--- 5 --- <br/>');
let x = 0;
let mx = 0;
let mxId = '';
// let rez5 = '';
let sumPaire = 0;
count = 0;

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
document.write(' --- 5a --- <br/>');
document.write('> 10 skaičių yra: ' + count);
document.write('<br/> --- 5b --- <br/>');
document.write('Max masyvo reikšmė yra: ' + mx + ". jo arba jų indeksai: " + mxId);
document.write('<br/> --- 5c --- <br/>');
document.write('porinių skaičių suma yra: ' + sumPaire);

//--- 5d ---->>>
document.write('<br/> --- 5d --- <br/>');
let arr1 = [];
x = 0;
while (x < arr.length) {
    arr1.push(arr[x] - x);
    // document.write(arr1[x]);
    x++;
}
// let u = fnArrPrint(arr1);
document.write('Naujas masyvas <br/>');
document.write(fnArrPrint(arr1));

//--- 5e ---->>>
document.write('--- 5e --- <br/>');
for (let i = 0; i < 10; i++) {
    arr1.push(rand(5, 25));
}
document.write('Papildytas naujasis masyvas <br/>');
document.write(fnArrPrint(arr1) + '<br/>');

//--- 5f ---->>>
document.write('--- 5f --- <br/>');
let arr5f_1 = []
let arr5f_2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) arr5f_1.push(arr[i]);
    else arr5f_2.push(arr[i]);
}
document.write(arr + '<br/>');
document.write(arr5f_1 + '<br/>');
document.write(arr5f_2 + '<br/>');
//<<<-----------
//--- 5g ---->>>
document.write('--- 5g --- <br/>');
for (let i = 0; i < arr5f_1.length; i++) {
    if ((i % 2) === 0 && arr5f_1[i] > 15) arr5f_1[i] = 0;
}
document.write(arr5f_1 + '<br/>');
//<<<-----------
//--- 5h ---->>>
document.write('--- 5h --- <br/>');
//--- 5h variantas Nr 1 ---->>>
document.write('--- 5h variantas Nr 1--- <br/>');
for (let i = 0; i < arr5f_1.length; i++) {
    if (arr5f_1[i] > 10) arr5f_1.splice(i, 1);
    // if (arr5f_1[i] > 10) delete arr5f_1;
}
document.write(arr5f_1 + '<br/>');
//<<<-----------
// //--- 5h variantas Nr 2 ---->>>
document.write('--- 5h variantas Nr 2 --- <br/>');
for (let i = 0; i < arr5f_1.length; i++) {
    // if (arr5f_1[i] > 10) arr5f_1.splice(i, 1); 
    if (arr5f_1[i] > 10) delete arr5f_1;
}
document.write(arr5f_1 + '<br/>');
//<<<-----------
//--- 5h variantas Nr 3 ---->>>
document.write('--- 5h variantas Nr 3 --- <br/>');
const arr5h_3 = arr5f_1.filter(x => x > 10);
document.write(arr5h_3 + '<br/>');

//--- 5h variantas Nr 4 ---->>>
document.write('--- 5h variantas Nr 4 --- <br/>');
function myFn(value, index, array) {
    let xRez = '';
    if (value > 10 && (index % 2) === 0) xRez = value;
    return xRez;
}
const arr5h_4 = arr5f_2.filter(myFn);
document.write(arr5h_4 + '<br/>');


//<<<-----------
// document.querySelector("#print").onclick = () => { document.querySelector("#ID_1").innerHTML = ats; }