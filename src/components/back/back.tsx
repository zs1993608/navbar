import React from 'react';
import { UsergroupAddOutlined, WechatOutlined, StarOutlined, SettingFilled } from '@ant-design/icons';

import "./back.css";


function Back() {
    return (

        <div className="back-main">
            <div className="left-nav">
                {/* this component shows the hidden info */}
                <img className="photo" src={"../imgs/portrait.jpg"} />
                <ul className="list">
                    <li className="icon1"><UsergroupAddOutlined /></li>
                    <li className="icon2"><StarOutlined /></li>
                    <li className="icon3"><WechatOutlined /></li>
                    <li className="icon4"><SettingFilled /></li>
                </ul>
            </div>
        </div>
    );
}

export default Back;
