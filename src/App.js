import React from 'react';
import './App.css';
import { dexterPressDate } from './services/dexterPress';
import { curtTeichDate } from './services/curtTeich';

function App() {

  const [selectedCompany, setSelectedCompany] = React.useState('0');
  const [inputText, setInputText] = React.useState('');
  const [output, setOutput] = React.useState([]);


  const calculateYear = () => {
    if (selectedCompany === 'dexterPress') {
      const answers = dexterPressDate(inputText.trim());
      setOutput(answers);
    } else if (selectedCompany === 'curtTeich') {
      const answers = curtTeichDate(inputText.trim());
      setOutput(answers);
    }
  }

  const setCompany = (company) => {
    console.log('MADE IT 1')
    if (company !== selectedCompany) {
      console.log('MADE IT')
      setOutput([]);
    }
    setSelectedCompany(company);
  }

  return (
    <div className="App">
      <header className="appHeader">
        <div className="title">Postcard Pal</div>
        <div className="nav"></div>
      </header>
      <div className="main">
        <div className="input">
          <select className="companySelect" value={selectedCompany} onChange={(e) => setCompany(e.target.value)}>
            <option value="0" disabled>Select a Postcard company</option>
            <option value="curtTeich">Curt Teich</option>
            <option value="dexterPress" onClick={() => setCompany('dexterPress')}>Dexter Press</option>
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
