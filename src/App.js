import Display from "./Display";
import ButtonBox from "./ButtonBox";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      const button = document.querySelector('[value="' + key + '"]');
      if(button) {
        calcResult(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [result]);

  const handleBtnClick = (e) => {
    const value = e.target.value;
    calcResult(value);
  };

  const calcResult = (value) => {
    switch (value) {
      case 'Enter':
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult('Error');
          console.log(error.message + ' ' + 'or Unexpected formula');
        }
        break;
      case 'RESET':
        setResult('');
        break;
      case 'Backspace':
        setResult((prevResult) => prevResult.slice(0, -1));
        break;
      default:
        if (value === '0' && result === '0') {
          break;
        }
        else if (value !== '.' && result[result.length - 1] === '0') {
          setResult(result.slice(0, -1));
        }
        setResult((prevResult) => prevResult + value);
        break;
    }
  }

  // console.log(result[result.length - 1]);

  return (
    <div className="App">
      <div className="calculator">
        <Display result={result} />
        <ButtonBox handleBtnClick={handleBtnClick} />
      </div>
    </div>
  );
}

export default App;
