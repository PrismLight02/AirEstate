import { useDispatch,useSelector } from "react-redux"
import { setLocation } from "../slices/locationSlice"
import { setPrice } from "../slices/priceSlice"
import { setDate } from "../slices/dateSlice"
import { setType } from "../slices/typeSlice"
import Input from "./Input"
import Title from "./Title"



const Filter = (props)=>{
    const dispatch = useDispatch()
    const location = useSelector(state => state.locationFilter.location)
    const price = useSelector(state=> state.priceFilter.price)
    const date = useSelector(state=> state.dateFilter.date)
    const type = useSelector(state=> state.typeFilter.type)


    return(
    <div class="w-5/6 mx-auto my-20 text-center text-sm">
        <Title title='Filter'/>
        <form class="text-accent flex flex-col items-center" onSubmit={props.handleSubmit}>    
        <Input text='text' placeholder='Location' value={location} handler={(e)=>dispatch(setLocation(e.target.value))}/>
        <Input text='text' placeholder='Price' value={price} handler={(e)=>dispatch(setPrice(e.target.value))}/>
        <Input text='date' placeholder='Date' value={date} handler={(e)=>dispatch(setDate(e.target.value))}/>
        <Input text='text' placeholder='Type of housing (house or apartment' value={type} handler={(e)=>dispatch(setType(e.target.value))}/>     
        <button class="p-2 w-6/12 block my-5 bg-accent text-secondary rounded-lg  transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500">Submit</button>
        <button onClick={props.handleReset} class="p-2 w-6/12 block my-5 bg-accent text-secondary rounded-lg  transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500">Reset Page</button>
        </form>
    </div>    
    )
}

export default Filter