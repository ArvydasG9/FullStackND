function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// -------------- 1 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 1 -------------------');
let pointKazys = 0;
let pointPetras = 0;
let partija = 0;
while (true) {
    pointKazys += rand(5, 25);
    pointPetras += rand(10, 20);
    if (pointKazys >= 222 || pointPetras >= 222) {
        console.log("Partija baigta. Sužaista: " + partija + " kartų")
        if (pointKazys === pointPetras) {
            console.log("Kazys: " + pointKazys + ", Petras: " + pointPetras + ". Partija baigta - lygiosios");
            break;
        }
        else if (pointKazys > pointPetras) {
            console.log("Kazys: " + pointKazys + ", Petras: " + pointPetras + ". Partiją laimėjo: Kazys");
            break;
        }
        else if (pointKazys < pointPetras) {
            console.log("Kazys: " + pointKazys + ", Petras: " + pointPetras + ". Partiją laimėjo: Petras");
            break;
        }
    }
    partija++;
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//*********************************************************************************
// -------------- 2 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 2 ----------------');

const vinisMax = 8.5 * 10;
let ikalta = 0;
let smugiai = 0;
// -------------- 2 a -------
for (let i = 0; i < 5; i++) {
    let ikalta = 0;
    do {
        ikalta += rand(5, 20);
        smugiai++;
    }
    while (ikalta <= vinisMax)
}
console.log('Mažais smūgiais įkalta per ' + smugiai + ' smūgius');
// --------------------------
// -------------- 2 b -------
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
console.log('Smarkiais smūgiais įkalta per ' + smugiai + ' smūgius');
// --------------------------
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//*********************************************************************************
// -------------- 3 ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log('Užduotis Nr. 3 ------------------');
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

    //--- 2v 
    //     if (!str.split(' ').includes(dig)) {
    //         // ar.push(dig);
    //         if (count === 0) str = String(dig);
    //         else str += ' ' + String(dig);
    //         count++;
    //     }
    // 
}
while (count < 50)
console.log(ar);
console.log(str);

let str1 = '';
// str1 = str.split(' ').sort((a, b) => a - b)
for (let i = 0; i < str.split(' ').length; i++) str1 += ' ' + str.split(' ').sort((a, b) => a - b)[i]
str1 = str1.trim();
console.log(str1);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<