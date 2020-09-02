import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import "./messages.css";
import datas from '../../data.json';

interface Props {

}

const Messages: React.FC<Props> = () => {
    const message = datas.map((message: any, index: number) => {
        return (
            <div key={index} className="message">
                <div className="left"><img className="photo" src={`../imgs/${message.url}`} /> </div>
                <div className="right">
                    <div className="name">{message.name}</div>
                    <div className="content">{message.content}</div>
                    <div className="time"> <ClockCircleOutlined /> &nbsp;{message.time}</div>
                </div>
            </div>
        )
    })
    return <> {message} </>
}


export default Messages;
