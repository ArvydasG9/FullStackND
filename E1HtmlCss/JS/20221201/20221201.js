function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// ----   1  --------------
console.log("Užduotis - 1");
// let n1 = Math.random() * 5;
// let n2 = Math.random() * 5;
let n1 = rand(0, 4);
let n2 = rand(0, 4);
console.log(n1);
console.log(n2);
if (Math.min(n1, n2) === 0) {
    console.log("dalyba iš 0 negalima");
}
if (n1 > n2) n1 /= n2;
else n1 = n2 / n1;
// n1 = Math.round(n1);
console.log(n1);
n1 = n1.toFixed(2);
console.log(n1);
// ----   2  --------------
console.log("Užduotis - 2");
let k1 = rand(0, 25);
let k2 = rand(0, 25);
let k3 = rand(0, 25);
console.log(k1);
console.log(k2);
console.log(k3);
if (k1 == k2 || k1 == k3 || k2 == k3) console.log("Vidytinės reikšmės nėra");
else if (Math.max(k2, k3) > k1 && Math.min(k2, k3) < k1) console.log("Vidytinė reikšmė: " + k1);
else if (Math.max(k1, k3) > k2 && Math.min(k1, k3) < k2) console.log("Vidytinė reikšmė: " + k2);
else if (Math.max(k1, k2) > k3 && Math.min(k1, k2) < k3) console.log("Vidytinė reikšmė: " + k3);
// ----   3  --------------
console.log("Užduotis - 3");
const vardasAkt = "Jean-Paul";
const pavardeAkt = "Belmondo";
console.log(vardasAkt);
console.log(pavardeAkt);
let res = vardasAkt.substring(0, 3) + pavardeAkt.substring(0, 3)
console.log(res);
// ----   4  --------------
console.log("Užduotis - 4");
// let s = String.fromCharCode(rand(65, 90)) + String.fromCharCode(rand(65, 90)) + String.fromCharCode(rand(65, 90))
// console.log(s.toLowerCase());
let s = String.fromCharCode(rand(97, 122)) + String.fromCharCode(rand(97, 122)) + String.fromCharCode(rand(97, 122))
console.log(s);