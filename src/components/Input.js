
const Input =(props)=>{
    return(
        <input class="text-accent placeholder:text-accent text-center border-2 border-pink-400 hover:border-pink-600 transition ease-in-out delay-150 hover:scale-110 p-0.75 w-6/12 block my-5" type={props.text} placeholder={props.placeholder} value={props.location} onChange={props.handler}></input>
    )
}

export default Input