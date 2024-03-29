const API_URL = "https://api.spacexdata.com/v5"

export async function getAllLaunches(){
  
   try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json()
    return data
    
   } catch (error) {
    console.error(error);    
   }
}


export async function getLaunchByFlightNumber(flightNumber){
  
    try {
     const response = await fetch(`${API_URL}/${flightNumber}`);
     const data = await response.json()
     return data
     
    } catch (error) {
     console.error(error);    
    }
 }