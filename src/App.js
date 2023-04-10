// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

function App() {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textInput4, setTextInput4] = useState("");
  const [textInput5, setTextInput5] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const isDisabled = (inputValue) => {
    return selectedOption === inputValue;
  }

  return (
    <div className="App">
      <div className="left">
        <input
          type="text"
          value={textInput1}
          placeholder="genre weight"
          onChange={(e) => handleInputChange(e, setTextInput1)}
          disabled={isDisabled(1)}
        />
        <input
          type="text"
          value={textInput2}
          placeholder="no genre weight"
          onChange={(e) => handleInputChange(e, setTextInput2)}
          disabled={isDisabled(2)}
        />
        <input
          type="text"
          value={textInput3}
          placeholder="top n"
          onChange={(e) => handleInputChange(e, setTextInput3)}
          disabled={isDisabled(3)}
        />
        <input
          type="text"
          value={textInput4}
          placeholder="num genres"
          onChange={(e) => handleInputChange(e, setTextInput4)}
          disabled={isDisabled(4)}
        />
        <input
          type="text"
          value={textInput5}
          placeholder="partial match"
          onChange={(e) => handleInputChange(e, setTextInput5)}
          disabled={isDisabled("j")}
        />
      </div>
      <div className="right">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="j">Jaccard Model</option>
          <option value="p">Partial Match Model</option>
          <option value="s">Search Only</option>
        </select>
      </div>
    </div>
  );
}

export default App;