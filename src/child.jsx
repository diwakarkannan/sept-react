
function Child (props) {
    console.log(props)
    if (props.age > 50 ) {
        return <div> You are old </div>
    } else {
        return <div> You are young </div>
    }
}

export default Child;