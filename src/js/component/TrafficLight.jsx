import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className='container'>
      <div className="traffic-light">
       <div className={`redLight ${ color=="red"?"glow":"opacity" }`}  onClick={() => setColor("red")}></div>
       <div className={`yellowLight ${ color=="yellow"?"glow":"opacity" }`} onClick={() => setColor("yellow")}></div>
       <div className={`greenLight ${ color=="green"?"glow":"opacity" }`} onClick={() => setColor("green")}></div>
      </div>
      
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
export default TrafficLight;