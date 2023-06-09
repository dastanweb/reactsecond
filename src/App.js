import React from 'react'
import Counter from './components/Counter';
import { useState } from 'react';
import Paragraph from './components/Paragraph/Paragraph';
import Workers from './components/Worker';

  const App = () => {
    const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
    

    const increment = () => {
      setCount(count + 1);
    };
    
    const decrement = () => {
      setCount(count - 1);
    };
    const inputText = (newObj) => {
      let newText = [...text];
      newText.push(newObj)
      setText(newText)
    }
    let employees = [
      { name: 'SALAMAT', surname: 'BAIKE', days: 20, salaryPerDay: 80 },
      { name: 'Dastan', surname: 'aaa', days: 15, salaryPerDay: 40 },
      { name: 'Emir', surname: 'bbb', days: 22, salaryPerDay: 60 },
      { name: 'Sheraman', surname: 'ccc', days: 15, salaryPerDay: 55 },
      { name: 'Albina', surname: 'kkk', days: 18, salaryPerDay: 44 },
      { name: 'Azret', surname: 'hhh', days: 10, salaryPerDay: 22 },
      { name: 'Mirdin', surname: 'Agai', days: 20, salaryPerDay: 70 },
      { name: 'Bayish', surname: 'zzz', days: 16, salaryPerDay: 33 },
      { name: 'Adilet', surname: 'Gazybekov', days: 11, salaryPerDay: 16 },
      
      { name: 'Aidana', surname: 'pppp', days: 5, salaryPerDay: 28 },
      { name: 'Ilim', surname: 'ttt', days: 12, salaryPerDay: 72 },
      ];
  return (
    <div>
       <Counter count={count} increment={increment} decrement={decrement} />
       <Paragraph inputText={inputText} text={text} />
      <Workers employees={employees}/>
    </div>
  )
}

export default App