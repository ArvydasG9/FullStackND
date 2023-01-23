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
    arr1[i] = []
    for (j = 0; j < 5; j++) {
        let x = rand(5, 25);
        arr1[i].push(x);//arr1[i][j] = arr1[i].push(x);
    }
}
fnPrint(arr1);

//--- Masyvai užduotis - 2 -------------------------------------
fnPrint('<br/> --- Masyvai užduotis - 2 ----------------------------');
//--- Masyvai užduotis - 2 a  ------
fnPrint(' --- Masyvai užduotis - 2 a ------');
let count2a = 0;
for (let i = 0; i < 10; i++)
    for (j = 0; j < 5; j++) if (arr1[i][j] > 10) count2a++;
fnPrint(`Masyvo elementų, didesnių už 10 (>10) yra: ${count2a}`);

//--- Masyvai užduotis - 2 b  ------
fnPrint('<br/> --- Masyvai užduotis - 2 b ------');
let max2b = 0;
for (let i = 0; i < 10; i++)
    for (j = 0; j < 5; j++) max2b = Math.max(arr1[i][j], max2b);
fnPrint(`Didžiausias masyvo elementas yra: ${max2b}`);

//--- Masyvai užduotis - 2 c  ------
fnPrint('<br/> --- Masyvai užduotis - 2 c ------');
let sum2c = 0;
for (j = 0; j < 5; j++) {
    sum2c = 0;
    for (let i = 0; i < 10; i++) sum2c += arr1[i][j];
    fnPrint(`Antro lygio masyvų su indeksu ${j} suma yra: ${sum2c}`);
}

//--- Masyvai užduotis - 2 d  ------
fnPrint('<br/> --- Masyvai užduotis - 2 d ------');
for (let i = 0; i < 10; i++) arr1[i].length = arr1[i].length + 7
fnPrint(arr1);

//--- Masyvai užduotis - 2 e  ------
fnPrint('<br/> --- Masyvai užduotis - 2 e ------');
let sum2e = 0;
let arr2e = [];
for (j = 0; j < 5; j++) {
    sum2e = 0;
    for (let i = 0; i < 10; i++) sum2e += arr1[i][j];
    arr2e.push(sum2e);
}
fnPrint(arr2e);

//--- Masyvai užduotis - 3 -------------------------------------
fnPrint('<br/> --- Masyvai užduotis - 3 ----------------------------');
let arr3 = [];
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
fnPrint(arr3);

//--- Masyvai užduotis - 4 -------------------------------------
fnPrint('<br/> --- Masyvai užduotis - 4 ----------------------------');
// const a = arr3.reduce((sum, val) => sum + ',' + val);
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
arr3.sort((a, b) => {
    if (Array.isArray(a)) a = arrSum(a);
    if (Array.isArray(b)) b = arrSum(b);
    return a - b;
})
fnPrint(arr3);
fnPrint(`Masyvo reikšmių suma: ${arrSum(arr3)}`);
fnPrint(`Žurnalo paBaaiga :)`);

