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
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="App">
      <div className="left">
        <input
          type="text"
          value={textInput1}
          onChange={(e) => handleInputChange(e, setTextInput1)}
        />
        <input
          type="text"
          value={textInput2}
          onChange={(e) => handleInputChange(e, setTextInput2)}
        />
        <input
          type="text"
          value={textInput3}
          onChange={(e) => handleInputChange(e, setTextInput3)}
        />
        <input
          type="text"
          value={textInput4}
          onChange={(e) => handleInputChange(e, setTextInput4)}
        />
      </div>
      <div className="right">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}

export default App;