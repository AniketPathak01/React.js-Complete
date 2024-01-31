import { useCallback, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const onCopyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}|:;";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  return (
    <div className="box">
      <h2>Password Generator</h2>
      <div>
        <input
          className="passinput"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button class="button-28" role="button" onClick={onCopyToClipboard}>
          Copy
        </button>
      </div>
      <div>
        <input
          className="rangee"
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label className="length">Length: {length}</label>

        <div class="form-check chekkbox">
          <input
            className="form-check-input chekkbox"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            id="numberInput"
          />
          <label htmlFor="numberInput" className="form-check-label">
            Numbers
          </label>
        </div>

        <div class="form-check chekkbox">
          <input
            className="form-check-input chekkbox"
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            id="charInput"
          />
          <label htmlFor="charInput" className="form-check-label">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
