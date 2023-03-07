import React, { useEffect, useState } from 'react'

const Tempapp = () => {
    const [city , setCity] = useState(null)
    const [search , setsearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=30ca9253808ae00794eeeafd96a1aca6`
            const response = await fetch(url)
            const resJson = await response.json()
            setCity(resJson.main)
            console.log(resJson.main)
        }
        fetchApi() //function calling
    },[search])

  return (
    <>
     <div className='box'>
       <div className="inputData">
         <input type="search" className='inputFeild' onChange={(event)=>{setsearch(event.target.value)}} />
       </div>
    
    {!city ? (
        <p>No Data Found</p>
    ) : (
        <>
        <div className="info">
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i> {search}
        </h2>
        <h3 className='temp'>
         Temperature:- {city.temp} °C 
        </h3>
         <h3 className='tempmin_max'>
           Min: {city.temp_min}Cel  |  Max : {city.temp_max}Cel
         </h3>
         {/* <h3>Pressure:- {city.pressure}</h3>
         <h3>Humidity:- {city.humidity}</h3>
         <h3>Sea Level:- {city.sea_level}</h3> */}
        

         <h3>Pressure:- {city.presure? <span>No data</span> : <span>{city.pressure}</span> } </h3>
         <h3>Humidity :- {!city.humidity? <span>No data</span> : <span>{city.humidity}</span> } </h3>
         <h3>Ground Level:- {!city.grnd_level? <span>No data</span> : <span>{city.grnd_level}</span> } </h3>
         <h3>Sea Level:- {!city.sea_level? <span>No data</span> : <span>{city.sea_level}</span> } </h3>
        </div>
        </>
    )}
     </div> 
    </>
  )
}

export default Tempapp
