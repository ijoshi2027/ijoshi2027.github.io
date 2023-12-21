import './App.css';
import { useState, useEffect } from 'react';

const Numbers = (props) => {
  return (
    <>
    <p className="equation">{props.first} {props.operator} {props.second} =   </p>
    </>
  )
}


const App = () => {

  const [newEq, setNewEq] = useState(true);
  const [f, setF] = useState(null);
  const [s, setS] = useState(null);
  const [op, setOp] = useState(null);
  const [ans, setAns] = useState(null);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (newEq) {
      const opNum = Math.floor(Math.random() * 4);
      const a = Math.floor(Math.random() * 99) + 2;
      const b = Math.floor(Math.random() * 99) + 2;
      const c = Math.floor(Math.random() * 11) + 2;
      if (opNum == 0) {
        setF(a);
        setS(b);
        setOp("+");
        setAns(a + b);
      }
      else if (opNum == 1) {
        setF(a + b);
        setS(a);
        setOp("-");
        setAns(b);
      }
      else if (opNum == 2) {
        setF(c);
        setS(a);
        setOp("×");
        setAns(a * c);
      }
      else if (opNum == 3) {
        setF(a * c);
        setS(c);
        setOp("÷");
        setAns(a);
      }

      setNewEq(false);
    }

  }, [newEq]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue == ans) {
      setNewEq(true);
      document.getElementById('inpBox').value = ''
      setCount((prevCount) => prevCount + 1);
    }
  };


  return (
    <div className="App">
      <p>Score: {count}</p>
      <div className='rectangle'>
        <div className='row'>
          <Numbers first={f} operator={op} second={s}></Numbers>
          <input className='inp' id='inpBox' onChange={handleInputChange}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
