const Display =({it})=>{
    console.log("in IT", it)
    if(it){
    return(
            
            <div class="bg-accent rounded-xl transition ease-in-out delay-150 md:hover:scale-125 hover:bg-indigo-500 hover:shadow-xl">
    
                <div class="object-cover">
                    <img class="h-56 md:h-96 w-full" src={it.src}/>
                </div>
                <div class="p-2">
                    <h1 class="py-1 text-center mb-5">Address - {it.name}</h1>
                    <p class="py-1">Housing Type - {it.type}</p>
                    <p class="py-1">Housing Location - {it.location}</p>
                    <p class="py-1">Deadline - {it.date}</p>
                    <p class="py-1">Cost - Rs {it.price}</p>
                </div>
                
            </div>
        
    )}
    else{
        return(
            <section>
                <h1 class="text-center">No matches found, Click reset page button or enter matching filters</h1>
            </section>
            
        )
    }
}

export default Display