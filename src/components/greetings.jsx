
function Greetings(props){

    console.log(props, "props123:")
    return (
        <div>Hi hello i am a child with name Greetings. i am {props.firstName} I like {props.car.model} {props.children}</div>
    )
}

export default Greetings;