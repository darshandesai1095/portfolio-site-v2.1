import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to server or other endpoint
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      }

  return (
    <div className="contact">
        <form onSubmit={handleSubmit}>
        <div className='contact__details'>
            <h4 className="contact__title">
                Get In Touch!
            </h4>
        </div>
            <div className='form__inputs'>
                <div className='form__section-1'>
                    <label className='name'>
                        <input
                            className='form__input'
                            placeholder='Name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label className='email'>
                        <input
                            className='form__input'
                            placeholder='Email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                    <label className='topic'>
                        <input
                            className='form__input'
                            placeholder='Topic (optional)'
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </label>


                <label className='message'>
                    <textarea
                        className='form__input'
                        placeholder='Enter message here...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                </label>
            </div>

            <button type="submit">Send Message!</button>
        </form>

    </div>
  );
}


export default Contact