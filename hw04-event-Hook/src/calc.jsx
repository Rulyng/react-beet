import React, {useState} from "react"


export default function Calc(){

let inp1Value = React.createRef();
let inp2Value = React.createRef();

const [sum, setSum] = useState(0)

function sumBTN(){
    let sum1 = (+inp1Value.current.value) + (+inp2Value.current.value);
    setSum(sum1);
   
}

function clear(){
    inp1Value.current.value = '';
    inp2Value.current.value = '';
    setSum('');
}
    return(
        <>
        <input ref={inp1Value} type="text" />
        +
        <input ref={inp2Value} type="text" />
        <button onClick={sumBTN} >Sum</button>
        <button onClick={clear} >Clear</button>
        <div className="out">{sum}</div>
        </>
    )
}