import React, { useState } from "react";
import './style.css';
import { BusStop } from "../BusStop";

   
   export const JourneyDetail = () => {
return (
   
   <div className="journey-detail container">
    <h2>Podrobnosti cesty</h2>
    <div className="stops">
      <BusStop/>
        </div>
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    

  
)}