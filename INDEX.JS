console.log("hii here are you guys");
    const myArray = async ()=>{

        console.log("Array list are here")

        
           const response =  await fetch ("https://api.cricapi.com/v1/matches?apikey=f8b6b587-779a-4293-9f48-d8507f1c09c7&offset=0");
           const arrayData =  await response.json ()

             
            //    response.json();

    
             console.log(arrayData);

             for(let i=0; i<12; i++){
                console.log([i].name)
             }
    }


    myArray();
