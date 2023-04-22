import React, {useState} from 'react';
import {SuperButton} from './SuperButton';
import styled from 'styled-components';
import {Count} from './Count';


type CounterType = {
    maxvalue: number
    startvalue: number
}


export const Counter: React.FC<CounterType> = ({maxvalue, startvalue}) => {

    const [count, setCount] = useState(startvalue)
    const incHandler = () => {
        count >= maxvalue ? setCount(count) : setCount(count + 1)

    }

    const resetHandler = () => {
        setCount(startvalue)
    }

    const disableInc = count >= maxvalue
    const disableReset = count <= startvalue

    return (<div className={'Counter'}>
            <div className={'Count'}>
            <Count
                count={count}
                maxvalue={maxvalue}/>
            </div>
            <div  className={'Buttons'}>
                <SuperButton name={'inc'} callback={incHandler} disabled={disableInc}/>
                <SuperButton name={'reset'} callback={resetHandler} disabled={disableReset}/>
            </div>
        </div>
    )
}


// count: number
// reset: () => void
//     increment: () => void  //increment: (resetState:boolean)=>void
//     isDisabledIncrement: boolean
// isDisabledReset: boolean
// const incrementHandler = () => {
//     props.increment()
// }
// const resetHandler = () => {
//     props.reset()
// }
//
// return (
//
//     <AllCounter>
//         {/*<SuperButton name={'inc'} callback={incrementHandler}/>*/}
//         <CountValue className={props.count < 5 ? '' : 'maxIncrement'}>{props.count}</CountValue>
//         <Bottom>
//             <Button onClick={incrementHandler} disabled={props.isDisabledIncrement}>inc</Button>
//             <Button onClick={resetHandler} disabled={props.isDisabledReset}>reset</Button>
//         </Bottom>
//     </AllCounter>
// const ParentDiv = styled.div`
//     display: flex;
//   flex-direction: ;
// `
// const AllCounter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100px;
//   width: 400px;
//   margin-top: 30px;
//   flex-direction: column;
// `
// const CountValue = styled.div`
//   width: 100px;
//   height: 200px;
//   background-color: cadetblue;
// `
//
// const Bottom = styled.div`
//   flex-direction: row;
// `
// const Button = styled.button`
//   width: 40px;
//   height: 40px;
//   background-color: cadetblue;
//   margin: 10px;
// `