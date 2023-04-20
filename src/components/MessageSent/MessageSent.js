import React from 'react';
import './MessageSent.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';

const MessageSent = () => {

  return (
    <div className="message-sent">
        <CheckCircleOutlineIcon 
        style={{transform: "scale(2.8)", margin: "50px"}}/>
        <h4 className='message-sent__title'>Thank You!</h4>
        <p>Your message has been sent.</p>
    </div>
  );
}


export default MessageSent