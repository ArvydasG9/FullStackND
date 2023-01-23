import React from "react";

const Uzduotis = () => {
    const html =
        <header className="App-header">
            <h1>Užduotis</h1>
            <div>
                <h3>2023-01-18 </h3>
                <h4>(react, useEffect, localStorage)</h4>

                Pasinaudokite nemokamu API kurio paskirtis grąžinti Jums patarimą.
                <br /> Dokumentacijos adresas: https://api.adviceslip.com/

                <br />Kreipiantis adresu https://api.adviceslip.com/advice, Jums grąžinamas JSON stringas,
                kuriame patalpintas objektas su raktažodžiais "id" ir "advice".
                <br />Paleidus aplikaciją turi būti atvaizduojamas dienos patarimas paimtas iš API.
                <br />Taip pat pasinaudodami id raktažodžiu ir localStorage podėliu atvaizduokite vartotojui
                kiek iš viso kartų šis patarimas jam jau buvo pateiktas.

                <br />Pavyzdys: "If you need cheering up, try searching online for photos of kittens." (3 kartus)

                <br />Žemiau patarimo sukurkite mygtuką "Naujas", ant kurio paspaudus būtų gaunamas naujas patarimas.

            </div>
        </header>

    return html;
}
export default Uzduotis;