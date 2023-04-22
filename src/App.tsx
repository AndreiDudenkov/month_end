import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {


return (
    <div className='App'>
   <Counter
   maxvalue={5}
   startvalue={0}/>
     <Counter
   maxvalue={10}
   startvalue={0}/>

 </div>
  );
}

export default App;

// let [count, setCount] = useState<number>(0)
// const [isDisabledIncrement, setIsDisabledIncrement] = useState(false);
// const [isDisabledReset, setIsDisabledReset] = useState(true);
//
// const reset = () => {
//   setCount(0)
//   setIsDisabledReset(true)
//   setIsDisabledIncrement(false)
// }
//
// const increment = () => {               // const increment = (resetState) => {
//   setCount(count < 5 ? count+1: count)
//   setIsDisabledIncrement(count >=  4)
//   setIsDisabledReset(count < 0)
// }
//
// return (
//     <div className='App'>
//       <Counter
//           count={count}
//           reset={reset}
//           increment={increment}
//           isDisabledIncrement={isDisabledIncrement}
//           isDisabledReset={isDisabledReset}
//       />
//       <Counter
//           count={count}
//           reset={reset}
//           increment={increment}
//           isDisabledIncrement={isDisabledIncrement}
//           isDisabledReset={isDisabledReset}
//       />