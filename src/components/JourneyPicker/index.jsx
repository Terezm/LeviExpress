import React, { useEffect, useState } from 'react';
import './style.css';


const DatesOptions = ({dates}) => {
return ( <>
  <option value="">Vyberte</option>

  {dates.map((date) => (
  <option key={date.dateBasic} value={date.dateBasic}>{date.dateCs}</option> ))}
 </> )}




const CityOptions = ({cities}) => {
return (
 <>
  <option value="">Vyberte </option>
 {cities.map((city) => (
  <option key={city.code} value={city.code}>{city.name}</option> ))}
 </> )}



export const JourneyPicker = ({ onJourneyChange }) => {
// console.log("jsem tady")
 

 

  const [fromCity, setFromCity ] = useState("")
  const [toCity, setToCity ] = useState('')
  const [date, setDate ] = useState('')

  const [cities, setCities] = useState([])
  const [dates, setDates] = useState([
    {
      "dateBasic": "28.05.2021",
      "dateCs": "pá 28. květen 2021"
    },
    {
      "dateBasic": "29.05.2021",
      "dateCs": "so 29. květen 2021"
    }
  ])

 useEffect(() => {
   
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then((response) => response.json())
    .then((data) => setCities(data.results))
}, [])

useEffect(() => {
 
 fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
  .then((response) => response.json())
  .then((data) => setDates(data.results))
}, []);;



 const handleSubmit = (event) => {
    event.preventDefault() 
  console.log(date,fromCity,toCity)}

  return (

  
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form onSubmit={handleSubmit} className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select onChange={(event) => setFromCity(event.target.value)} value={fromCity}>
          
          <CityOptions cities={cities}/>

          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select onChange={(event) => setToCity(event.target.value)} value={toCity}>

          <CityOptions cities={cities}/>

          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select onChange={(event) => setDate(event.target.value)} value={date}>
           <DatesOptions dates={dates}/>

          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
            
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src="/map.svg" />
    </div>
  </div>
);}


