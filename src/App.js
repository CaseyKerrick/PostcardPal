import React from 'react';
import './App.css';
import { dateCode } from './services/dexterPress';

function App() {

  const [selectedCompany, setSelectedCompany] = React.useState('0');
  const [inputText, setInputText] = React.useState('');
  const [output, setOutput] = React.useState([]);


  const calculateYear = () => {
    const answers = dateCode(inputText.trim());
    setOutput(answers);
  }

  return (
    <div className="App">
      <header className="appHeader">
        <div className="title">Postcard Pal</div>
        <div className="nav"></div>
      </header>
      <div className="main">
        <div className="input">
          <select className="companySelect" value={selectedCompany}>
            <option value="0" disabled>Select a Postcard company</option>
            <option value="1" onClick={() => setSelectedCompany('1')}>Curt Teich</option>
            <option value="2" onClick={() => setSelectedCompany('2')}>Dexter Press</option>
          </select>
          <input type="text" className="userInput" onChange={(e) => setInputText(e.target.value)} />
          <button className="submitButton" onClick={calculateYear}>Submit</button>
        </div>
        <div className="output">
          { output.length > 0 && output.map(line => (
            <div className="outputLine" key={line}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
