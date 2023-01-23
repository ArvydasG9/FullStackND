import React from "react";
import { useEffect, useState } from "react";

const Solution = () => {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const [passw, setPassw] = useState([]);
    const [checkedSymb, setCheckedSymb] = useState(true);
    const [checkedNum, setCheckedNum] = useState(true);
    const [checkedLetLow, setCheckedLetLow] = useState(true);
    const [checkedLetUp, setCheckedLetUp] = useState(true);

    useEffect(() => {
        const data = localStorage.getItem('pass');
        if (data) {
            const dat = JSON.parse(data);
            setPassw(dat);
        }
    }, [])

    const genPassChar = () => {
        let category = 0;
        let rezItem = '';
        let repeat;
        do {
            repeat = false;
            category = rand(1, 4);//parinkti atsitiktine kategorija: simbolis, skaicius, raide, RAIDE
            if ((document.querySelector('#idSymb').checked === false && category === 1)
                || (document.querySelector('#idNum').checked === false && category === 2)
                || (document.querySelector('#idLetLow').checked === false && category === 3)
                || (document.querySelector('#idLetUp').checked === false && category === 4)) repeat = true;
        } while (repeat)

        switch (category) {
            case 1://symb
                let symb = '!@#$%^&*()+';// simboliai !@#$%^&*()+
                rezItem = symb.charAt(rand(0, symb.length - 1));
                break;
            case 2://number
                rezItem = rand(0, 9);//0-9
                break;
            case 3://leter low
                rezItem = String.fromCharCode(rand(97, 122));//ab  
                break;
            case 4://leter up
                rezItem = String.fromCharCode(rand(65, 90));//AB
                break;
            default:
                break;
        }
        return rezItem;
    }

    const passGet = () => {
        let pass = '';
        if (document.querySelector('#idSymb').checked === false
            && document.querySelector('#idNum').checked === false
            && document.querySelector('#idLetLow').checked === false
            && document.querySelector('#idLetUp').checked === false
        ) {
            alert('Pažymėkit nors vieną simbolių kategoriją');
            return;
        }

        for (let i = 0; i < document.querySelector('#idLenght').value; i++) {
            pass += genPassChar();
        }

        document.querySelector('#idPass').value = pass;

        const data = localStorage.getItem('pass');
        let arr;
        if (data)
            arr = [...passw, { pass: pass }];
        else
            arr = [{ pass: pass }];

        setPassw(arr);
        localStorage.setItem('pass', JSON.stringify(arr));
        return pass;
    }

    const PassLenght = () => {//Len ???
        let res = [];
        for (let i = 8; i <= 50; i++) {
            res.push(<option key={i} value={i}>{i}</option>);
        }
        return res;
    };

    const fnClear = () => {
        setCheckedSymb(true);
        setCheckedNum(true);
        setCheckedLetLow(true);
        setCheckedLetUp(true);
        document.querySelector('#idPass').value = '';
    }

    return (
        <div>
            <div>
                <input type="text" id="idPass" placeholder="Paspauskite mygtuką Generuoti slaptažodį" />
                <br /><br /><button onClick={passGet} className="btn btn-primary">Generuoti slaptažodį</button>
                <button onClick={fnClear} className="btn btn-warning">Išvalyti</button>
            </div>

            <fieldset >
                <legend>Nustatymai</legend>
                <div >Slaptažodžio ilgis</div>
                <div >
                    <select id="idLenght">
                        {PassLenght(50)}
                      </select>
                </div>
                <div >Simboliai (!@#$%^&amp;*()+)</div>
                <div ><input id="idSymb" type="checkbox" checked={checkedSymb} onChange={e => setCheckedSymb(e.target.checked)} /></div>
                <div >&nbsp;</div>
                <div >Skaičiai (0-9)</div>
                <div ><input id="idNum" type="checkbox" checked={checkedNum} onChange={e => setCheckedNum(e.target.checked)} /></div>
                <div >Mažosios raidės (abc)</div>
                <div ><input id="idLetLow" type="checkbox" checked={checkedLetLow} onChange={e => setCheckedLetLow(e.target.checked)} /></div>
                <div >&nbsp;</div>
                <div >Didžiosios raidės (ABC)</div>
                <div ><input id="idLetUp" type="checkbox" checked={checkedLetUp} onChange={e => setCheckedLetUp(e.target.checked)} /></div>
            </fieldset>

            <div>
                <ul className="list-group">
                    {passw.map((e, i) =>
                        <li className="list-group-item" key={i}>{e.pass}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}
export default Solution