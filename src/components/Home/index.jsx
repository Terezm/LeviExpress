import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
// import { SelectedSeat } from '../SelectedSeat';
import { SeatPicker } from '../SeatPicker';
import './style.css'

export const Home = () => {
  const navigate = useNavigate()
  const handleJourneyChange = (journey) => {
    setJourney(journey)
    setUserSeat(userSeat)
  }

  const [journey, setJourney] = useState(null)
  
  const handleBuy = () => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    }).then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));
      
      
  }

  const [userSeat, setUserSeat] = useState(null)

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey ? <JourneyDetail journey={journey}/>: null}
      {journey ? 
        <SeatPicker 
          seats={journey.seats} 
          journeyId={journey.journeyId} 
          selectedSeat={userSeat} 
          onSeatSelected={setUserSeat} /> 
      : null}
      {journey ? (<div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
      </div>) : null}
    </main>
  )
  };
