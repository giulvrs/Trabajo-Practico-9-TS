
interface IPropsMiPrimerComponente{
    text: string,
    color: string,
    fontSize?: number
}

function UnComponente(props:IPropsMiPrimerComponente){
    return(
        <div style={{color: props.color, fontSize: `${props.fontSize || 16}px`}}>
        <p>{props.text}</p>
        </div>
    )
}

export default UnComponente;