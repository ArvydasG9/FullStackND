let i = 0;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let ats = "";
let xStr = "";

function fnPrint(txt) {
    console.log(txt)
    ats += "<br/>" + txt;
}
//--- 1 ---->>>
fnPrint("--- 1 ----");
let s = rand(0, 6);
xStr = '';
i = 0;
while (i < 400) {
    if (i % 50 == 0) xStr += '<br/> ';
    xStr += '*';
    i++;
}
ats += xStr;
//<<<-----------

//--- 2 ---->>>
fnPrint("--- 2 ----");
let sk = rand(1, 6);
sk = '<h' + sk + '>' + sk + '</h' + sk + '>';
fnPrint(sk);
//<<<-----------

//--- 3 ---->>>
fnPrint("--- 3 ----");
let dig1 = rand(-10, 10);
let dig2 = rand(-10, 10);
let dig3 = rand(-10, 10);
if (dig1 < 0) { fnPrint('<span style="color: green;">' + dig1 + '</span>') }
else if (dig1 === 0) { fnPrint('<span style="color: red;">' + dig1 + '</span>') }
else if (dig1 > 0) { fnPrint('<span style="color: blue;">' + dig1 + '</span>') }
//------
if (dig2 < 0) { fnPrint('<span style="color: green;">' + dig2 + '</span>') }
else if (dig2 === 0) { fnPrint('<span style="color: red;">' + dig2 + '</span>') }
else if (dig2 > 0) { fnPrint('<span style="color: blue;">' + dig2 + '</span>') }
//------
if (dig3 < 0) { fnPrint('<span style="color: green;">' + dig3 + '</span>') }
else if (dig3 === 0) { fnPrint('<span style="color: red;">' + dig3 + '</span>') }
else if (dig3 > 0) { fnPrint('<span style="color: blue;">' + dig3 + '</span>') }
//<<<-----------

//--- 4 ---->>>
fnPrint("--- 4 ----");
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

let st1 = "An American in Paris";
let st2 = "Breakfast at Tiffany's";
let st3 = "2001: A Space Odyssey";
let st4 = "It's a Wonderful Life";
let r4 = '';
r4 = st1 + ' ----> ' + fnBalsesDel(st1) + '<br/>'
r4 += st2 + ' ----> ' + fnBalsesDel(st2) + '<br/>'
r4 += st3 + ' ----> ' + fnBalsesDel(st3) + '<br/>'
r4 += st4 + ' ----> ' + fnBalsesDel(st4) + '<br/>'
fnPrint(r4);
//<<<-----------

//--- 5 ---->>>
// fnPrint("--- 5 ----");
ats += "<br/> --- 5 ---- <br/>";
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
//<<<-----------

//--- 6---->>>
fnPrint("--- 6 ----");
i = 1;
str = "";
while (i <= 3000) {
    if ((i % 77) == 0) {
        if (str != "") str += ", ";
        str += i;
    }
    i++;
}
ats += "<br/>" + str;

//<<<-----------
// fnPrint("<br/>" + ats);
document.querySelector("#print").onclick = () => { document.querySelector("#ID_1").innerHTML = ats; }