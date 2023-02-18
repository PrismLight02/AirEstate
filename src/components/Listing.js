import Listings from "../data"
import Display from "./Display"

const Listing = ()=>{
    return(
            <>
            {Listings.map(it=>
                <Display it={it} />
    )}
       </>
    )
    
}

export default Listing