

import { useEffect, useState, useRef } from "react";


function Counter(){
    const [clock, setClock] = useState(null)
    const [count, setCount]= useState(0);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount((count)=> count+1)
        }, 10000)
        setClock(timer);
    },[count])



    return (
        <div>
        <h1>{count}</h1>
        <button onClick={setCount((count)=> count +1)}> +</button>
        <button>-</button>
        <button> Pause</button>
        </div>
    )
}

export default Counter;