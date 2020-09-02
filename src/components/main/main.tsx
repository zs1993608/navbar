import React, { useState } from 'react';
import Messages from '../messages/messages';
import { MenuOutlined } from '@ant-design/icons';
import Back from '../back/back';
import "./main.css";



function Main() {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive);
    console.log({active:isActive})
  }

  return (
    <div className="main">

      <div className="whole">
        <div onClick={toggleClass} className="icon"><MenuOutlined /></div>

        <div className="top">
          <div className="thisinbox">Inbox</div>

          <div className="list">
            <Messages/>
          </div>

        </div>

        <div className="bk">
          <Back />

        </div>
      </div>


    </div>
  );
}

export default Main;
