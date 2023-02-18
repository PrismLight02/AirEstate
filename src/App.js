import "./index.css"
import Listings from "./data";
import Listing from './components/Listing'
import Nav from './components/Nav';
import Filter from './components/Filter'
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import Display from "./components/Display";



function App() {

  const location = useSelector(state => state.locationFilter.location)
  const price = useSelector(state => state.priceFilter.price)
  const date = useSelector(state => state.dateFilter.date)
  const type = useSelector(state => state.typeFilter.type)
 
  const [filterStatus, setFilterStatus]= useState(false)
  const [result, setResult] = useState([])
 
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const fil = Listings.filter((item) =>
      item.location.toLocaleLowerCase() === location.toLocaleLowerCase() && item.price <= parseInt(price) && item.type.toLocaleLowerCase() === type.toLocaleLowerCase() && new Date(date) <= new Date(item.date)

    )
    setResult(fil)
    setFilterStatus(true)

    console.log(fil)
    
  }

  const handleReset=(e)=>{
    e.preventDefault()
    setFilterStatus(false)
  }

  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      </header>
      <Filter 
      handleSubmit={handleSubmit}
      handleReset={handleReset}
       />
      
      {filterStatus?<section class="flex items-center justify-center w-full text-sm md:text-base md:w-4/5 mx-auto my-11"><Display it={result[0]}/></section>:  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-5/6 text-sm md:text-base md:w-4/5 mx-auto my-11"><Listing/></section>}
      
      
    </div>
  );
}

export default App;
