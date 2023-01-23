function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let ats="";
function fnPrint(txt){
    console.log(txt)
    ats +="<br/>" + txt;
}
//---------- 1 ------->>>>>>>
// console.log("1 - užduotis ----------------------");
// ats +="1 - užduotis ----------------------";
fnPrint("1 - užduotis ----------------------");
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
// console.log("Perkama: " + candel + " žvakių, kurių kaina " + price + " EUR. Viso:" + sum.toFixed(2) + " EUR");
// ats += "<br/> Perkama: " + candel + " žvakių, kurių kaina " + price + " EUR. Viso:" + sum.toFixed(2) + " EUR";
fnPrint("Perkama: " + candel + " žvakių, kurių kaina " + price + " EUR. Viso:" + sum.toFixed(2) + " EUR");
//<<<<-----------------------
//---------- 2 ------->>>>>>>
// console.log("2 - užduotis ----------------------");
fnPrint("<br/> 2 - užduotis ----------------------");
let x1 = rand(0, 100);
let x2 = rand(0, 100);
let x3 = rand(0, 100);
// console.log("Sugeneruoti skaičiai:" + x1 + "/" + x2 + "/" + x3)
// ats += "<br/> Sugeneruoti skaičiai:" + x1 + "/" + x2 + "/" + x3;
fnPrint("Sugeneruoti skaičiai:" + x1 + "/" + x2 + "/" + x3);
let xv1 = Math.round((x1 + x2 + x3) / 3);//vidurkis sugeneruotų skaičių
// console.log("Jų vidurkis:" + xv1)
fnPrint("Jų vidurkis:" + xv1); 
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
if (el == 0) fnPrint("Gauti skaičiai nepatenka į intervalą, pagal kurį skaičiuojamas vidurkis")
else fnPrint("Gautų skaičių nuo 10 iki 90 vidurkis: " + Math.round(xv2 / el));

//<<<<-----------------------
//---------- 3 ------->>>>>>>
// console.log("3 - užduotis ----------------------");
fnPrint("<br/> 3 - užduotis ----------------------");
function fn(t) {
    if (String(t).length == 1) t = "0" + t;
    return t;
}
let t1 = rand(0, 86399) * 1000;
t1 += 100000000000;//1970-01-01 00:00:00
let t2 = rand(0, 300) * 1000;
t2 += t1;
t1 = new Date(t1);
t2 = new Date(t2);
// console.log(fn(t1.getHours()) + ":" + fn(t1.getMinutes()) + ":" + fn(t1.getSeconds()));
fnPrint(fn(t1.getHours()) + ":" + fn(t1.getMinutes()) + ":" + fn(t1.getSeconds()));
// console.log(fn(t2.getHours()) + ":" + fn(t2.getMinutes()) + ":" + fn(t2.getSeconds()) + " - su pridėtu laiku");
fnPrint(fn(t2.getHours()) + ":" + fn(t2.getMinutes()) + ":" + fn(t2.getSeconds()) + " - su pridėtu laiku");
//<<<<-----------------------
//---------- 3 alternatyva------->>>>>>>
// console.log("3 - užduoties alternatyva ----------------------");
fnPrint("<br/> 3 - užduoties alternatyva ----------------------");
t1 = rand(0, 86399);
t2 = rand(0, 300);
t2 += t1;
let h = Math.floor(t1 / 3600);//valandos
let m = Math.floor((t1 - h * 3600) / 60);//minutes
let s = Math.floor(t1 - (h * 3600 + m * 60));//sekundes
// console.log(fn(h) + ":" + fn(m) + ":" + fn(s));
fnPrint(fn(h) + ":" + fn(m) + ":" + fn(s));
h = Math.floor(t2 / 3600);//valandos
m = Math.floor((t2 - h * 3600) / 60);//minutes
s = Math.floor(t2 - (h * 3600 + m * 60));//sekundes
// console.log(fn(h) + ":" + fn(m) + ":" + fn(s) + " - su pridėtu laiku");
fnPrint(fn(h) + ":" + fn(m) + ":" + fn(s) + " - su pridėtu laiku");
//<<<<-----------------------


document.querySelector("#print").onclick =() =>{
    document.querySelector("#rez").innerHTML = ats;
}

