import './App.css';
import { useId, useState } from 'react';
import { IoCloseCircleSharp, IoBuild, IoCheckmark } from 'react-icons/io5'

const Header = ({ nav }) => {
  const id = useId();

  return (
    <header>
      <h1>UAB "Šaunu"</h1>
      <nav>
        <ul>
          {nav.map((value, index) => <li key={id + index}>{value}</li>)}
        </ul>
      </nav>
    </header>
  );
}

const Container = (propsai) => {
  return <div className="container">{propsai.children}</div>;
}

// const FormEntry = () => {
//   const [reiksme, setReiksme] = useState('Įveskite tekstą į laukelį');

//   const keistiReiksme = (e) => {
//     console.log(e.target.value.length);
//     setReiksme(e.target.value);
//   }

//   return (
//     <>
//       <input type="text" onChange={keistiReiksme} />
//       {/* <input type="text" onChange={(e) => setReiksme(e.target.value)} /> */}
//       <div className="result">{reiksme}</div>
//     </>
//   );
// }

const FormEntry = () => {
  const [tasks, setTasks] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (document.querySelector('#text').value.trim().length === 0) return;
    setTasks([...tasks, { name: document.querySelector('#text').value, done: false }]);
    document.querySelector('#text').value = '';
  }

  const handleDone = (e, index) => {
    tasks[index].done = !tasks[index].done;
    setTasks([...tasks]);
  }

  const handleEdit = (e, index) => {
    document.querySelector('#text').value = tasks[index].name;
    handleDelete(e, index)
    // setTasks([...tasks]);
  }

  const handleDelete = (e, index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <>
      <h1>Task Manager</h1>
      <form className="input-group" onSubmit={handleForm}>
        <input id="text" type="text" className="form-control" />
        <button className="btn btn-primary" >Išsaugoti</button>
      </form>
      {tasks.map((value, index) =>
        <li key={value.name + index} className={value.done ? 'done item' : 'item'}>
          {value.name}
          <div style={{ backgroundColor: 'yellow', color: 'blue', width: '11%', display: 'flex', justifyContent: 'space-between' }}>
            <IoCheckmark onClick={(e) => handleDone(e, index)} />
            <IoBuild onClick={(e) => handleEdit(e, index)} />
            <IoCloseCircleSharp onClick={(e) => handleDelete(e, index)} />
          </div>
        </li>
      )}
    </>
  );
}

const App = () => {
  const navigacija = ['Titulinis', 'Apie Mus', 'Kontaktai'];

  return (
    <Container>
      <Header nav={navigacija} />
      <main>
        <FormEntry />
      </main>
    </Container>
  );
}

export default App;
