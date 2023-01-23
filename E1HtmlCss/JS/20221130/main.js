const vardasAkt = "žan-Pol";
const pavardeAkt = "Belmando";
if (vardasAkt.length > pavardeAkt.length) {
    console.log(pavardeAkt);
    alert(pavardeAkt);
}
else {
    console.log(vardasAkt);
    alert(pavardeAkt);
}
//-------- 2 ---------------------
const vardasMe = "Arvydas";
const pavardeMe = "Grigalauskas";
const born = new Date("2000");
let d = new Date();
d = d.getFullYear() - born.getFullYear();
console.log("Aš esu " + vardasMe + " " + pavardeMe + ". Man yra " + d + " metai(ų)");
alert("Aš esu " + vardasMe + " " + pavardeMe + ". Man yra " + d + " metai(ų)");
//-------- 3 --------------
const vardasAkt2 = vardasAkt;
const pavardeAkt2 = pavardeAkt;
let rezult = "";
rezult = vardasAkt2[vardasAkt2.length - 3];
rezult += vardasAkt2[vardasAkt2.length - 2];
rezult += vardasAkt2[vardasAkt2.length - 1];
rezult += pavardeAkt2[pavardeAkt2.length - 3];
rezult += pavardeAkt2[pavardeAkt2.length - 2];
rezult += pavardeAkt2[pavardeAkt2.length - 1];
console.log(rezult);
alert(rezult);
//-- 4------------------------
let txt="Once upon a time in hollywood";
txt=txt.replaceAll('o', '*').replaceAll('O', '*');
console.log(txt);
alert(txt);

//--- 5 -----------------------------
// 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
// let x1;
// let x2;
// let x3;
// let x4;
let rez;
let x1=Math.floor(Math.random() * 3);
let x2=Math.floor(Math.random() * 3);
let x3=Math.floor(Math.random() * 3);
let x4=Math.floor(Math.random() * 3);
rez=String(x1)+String(x2)+String(x3)+String(x4);
console.log("Sugeneruoti skaičiai: " + rez);
console.log("Skaičių 0 yra: " + (rez.length - rez.replaceAll('0', '').length));
console.log("Skaičių 1 yra: " + (rez.length - rez.replaceAll('1', '').length));
console.log("Skaičių 2 yra: " + (rez.length - rez.replaceAll('2', '').length));

alert("Sugeneruoti skaičiai: " + rez);
alert("Skaičių 0 yra: " + (rez.length - rez.replaceAll('0', '').length));
alert("Skaičių 1 yra: " + (rez.length - rez.replaceAll('1', '').length));
alert("Skaičių 2 yra: " + (rez.length - rez.replaceAll('2', '').length));