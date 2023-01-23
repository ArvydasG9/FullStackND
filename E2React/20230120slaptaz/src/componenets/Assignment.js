
const Assignment = () => {
    return (
        <div>
            <h1>Slaptažodžių generatorius</h1>
            <div style={{ textalign: 'left', display: "flex", textAlign:'left', paddingLeft: '10px' }}>
                Sukurkite slaptažodžių generatorių.
                <br />Stringo generavimui panaudokite reikšmes gaunamas iš šių laukelių:
                <br />Slaptažodžio ilgis (input[type="number"]). Maksimalus ilgis 50 simbolių.
                <br />Sudėtingumas (input[type="checkbox"]). Galimi variantai:
                <br />Didžiosios raidės (Laukelis turi būti parinktas atidarius aplikaciją),
                <br />Mažosios raidės (Laukelis turi būti parinktas atidarius aplikaciją),
                <br />Skaičiai,
                <br />Simboliai

                <br />Šalia generavimo formos atvaizduokite mygtuką "Išvalyti" ant kurio paspaudus forma būtų grąžinamą į pradinę padėtį.
                <br />Žemiau formos atvaizduokite dešimt paskutinių generuotų slaptažodžių sąrašą.
                <br />Duomenis saugokite bei paimkite iš localStorage talpyklos.
                <br />Pasinaudokite norimais CSS, HTML karkasais (Bootstrap, Tailwind, Material UI etc.)
                <br />Baigus darbą patalpinkite kodą į Github platformą bei prisekite nuorodą prie šios užduoties.

                <br />P.S. veikiantis pavyzdys: https://delinea.com/resources/password-generator-it-tool
            </div>
        </div>
    )
}
export default Assignment