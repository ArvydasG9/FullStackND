import './App.css';
import Post from './components/Post';
import Uzd from './components/Uzd.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ND 2023-01-11 React</p>
      </header>
      <div className='task'>
      <h1>Užduotis:</h1>
        <p>
          Jums duodamas JSON kodas:<br/>
          https://pastebin.com/MccsRE0p<br/>

          Jums reikia sukurti mini "blogą".<br/>
          Sukurkite naują react aplikaciją su dvejais naujais komponentais: Blog ir Post.<br/>
          Blog komponente įsikelkite šį stringą ir priskyrę prie kintamojo konvertuokite jį į javascript masyvą.<br/>
          Post komponente priimkite įrašo duomenis.<br/>
          Aprašykite JSX struktūrą ir CSS stilių pagal žemiau pateiktą maketą.
        </p>

        <img src={Uzd} alt="uzduotis" />
      
      </div>
      <hr/>

      <Post />
    </div>
  );
}

export default App;
