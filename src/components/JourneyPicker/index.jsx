import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {

  const [fromCity, setFromCity ] = useState("")
  const [toCity, setToCity ] = useState('')
  const [date, setDate ] = useState('')

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
          <option value="">Vyberte</option>
          <option value="">Vyberte</option>
              <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select onChange={(event) => setToCity(event.target.value)} value={toCity}>
            <option value="">Vyberte</option>
              <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select onChange={(event) => setDate(event.target.value)} value={date}>
            <option value="">Vyberte</option>
            <option>20.05.2021</option>
              <option>21.05.2021</option>
              <option>22.05.2021</option>
              <option>23.05.2021</option>
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

