// Header faile aprašykite funkcijas kurios sugeneruotų html kodą šiems komponentams:
//  Logotipui, navigacijai, paieškai.

export function fnLog() {
    let res = '';
    res = '<div class="logo"><img src="../img/minion_2.png" alt="Landing page" /></div>';
    return res;
}

export function fnNav() {
    let res = '<div><nav><ul>'
    res += '<li><a href="#">Home</a></li>'
    res += '<li><a href="#">Pages</a></li>'
    res += '<li><a href="#">Features</a></li>'
    res += '<li><a href="#">How it works</a></li>'
    res += '<li><a href="#">Screenshots</a></li>'
    res += '<li><a href="#">Reviews</a></li>'
    res += '<li><a href="#">Pricing</a></li>'
    res += '<li><a href="#">FAQ</a></li>'
    res += '<li><a href="#">Contact Us</a></li>'
    res += '</ul></nav></div>';
    return res;
}

export default { fnLog, fnNav };