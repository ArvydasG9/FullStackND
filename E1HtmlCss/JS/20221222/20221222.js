
document.querySelector("form").insertAdjacentHTML('beforebegin', "<p></p>");

const x = document.querySelector('p').addEventListener("click", () => {
    document.querySelector('#fname').value = '';
    document.querySelector('#fsurName').value = '';
    document.querySelector('#femail').value = '';
    document.querySelector('#ftxt').value = '';
    document.querySelector('#fname').classList.remove('err');
    document.querySelector('#fsurName').classList.remove('err');
    document.querySelector('#femail').classList.remove('err');
    document.querySelector('#ftxt').classList.remove('err');
    document.querySelector('p').style.display = "none";
    // document.querySelector("p").remove();//--- Pašalina nurodytą Tag'ą --------
});


function fnRegistr(event) {
    event.preventDefault();//---- Stabdo standartinį formos perkrovimą -----------
    // let x = event.target.querySelector('#fname').value;  //---------- ALTERNATYVA -----------  
    let fname = document.querySelector('#fname').value.trim();
    let fsurName = document.querySelector('#fsurName').value.trim();
    let femail = document.querySelector('#femail').value.trim();
    let ftxt = document.querySelector('#ftxt').value.trim();
    document.querySelector("form").insertAdjacentHTML('beforebegin', "<p></p>");
    document.querySelector('p').style.display = "block";

    if (fname.length > 1 && fsurName.length > 1 && femail.length > 10 && ftxt.length > 2 && femail.includes("@")) {
        document.querySelector('#fname').value = '';
        document.querySelector('#fsurName').value = '';
        document.querySelector('#femail').value = '';
        document.querySelector('#ftxt').value = '';
        document.querySelector('p').textContent = "Netrukus su jumis susisieksime";
        document.querySelector('p').style.color = "blue";
        document.querySelector('#fname').classList.remove('err');
        document.querySelector('#fsurName').classList.remove('err');
        document.querySelector('#femail').classList.remove('err');
        document.querySelector('#ftxt').classList.remove('err');
    }
    else {
        if (fname.length < 2) document.querySelector('#fname').classList.add('err');
        else document.querySelector('#fname').classList.remove('err');
        if (fsurName.length < 2) document.querySelector('#fsurName').classList.add('err');
        else document.querySelector('#fsurName').classList.remove('err');
        if (femail.length < 11 && !femail.includes("@")) document.querySelector('#femail').classList.add('err');
        else document.querySelector('#femail').classList.remove('err');
        if (ftxt.length < 3) document.querySelector('#ftxt').classList.add('err');
        else document.querySelector('#ftxt').classList.remove('err');
        document.querySelector('p').textContent = "Neteisingai užpildyti duomenys";
        document.querySelector('p').style.color = "red";
        alert(`Atkreipkit dėmesį į raudonai pažymėtus laukus`)
    }
}

// let time = 5;
// setInterval(fnTime, 1000);
// function fnTime() {
//     document.querySelector('p').textContent = "Neteisingai užpildyti duomenys --> " + time;
//     time--;
//     if (time <= 0) fnClear();
// }

// function fnClear() {
//     document.querySelector('#fname').value = '';
//     document.querySelector('#fsurName').value = '';
//     document.querySelector('#femail').value = '';
//     document.querySelector('#ftxt').value = '';
//     document.querySelector('#fname').classList.remove('err');
//     document.querySelector('#fsurName').classList.remove('err');
//     document.querySelector('#femail').classList.remove('err');
//     document.querySelector('#ftxt').classList.remove('err');
//     document.querySelector('p').style.display = "none";
//     // event.preventDefault();
// }