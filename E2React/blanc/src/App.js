import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
import Compclass from './components/Header';
import Imagecomp from './components/Image';
import pic from './components/img/minion_1.png'

function App() {
  return (
    <div className="App">
      <Imagecomp image={pic} />
      <Compclass xInfo='Kepurė' />
    </div>
  );
}

export default App;




