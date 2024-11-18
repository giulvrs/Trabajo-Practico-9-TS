import { useState } from "react";

function OtroComponente() {
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => {
        setCounter((ant)=> ant+1);
    }
    return(
        <>
        <h1>Contador : {counter}</h1>
        <button onClick={incrementCounter}>Incrementar</button>
        </>
    )
}

export default OtroComponente;