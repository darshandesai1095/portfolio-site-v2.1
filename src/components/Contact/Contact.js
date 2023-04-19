import React, { useState } from 'react';
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
        <form name="contact" method="POST" data-netlify="true"
              onSubmit={handleSubmit}>
            <input type="hidden" name="subject" 
                   value="Contact form submission from darshandesai.io" />

        <div className='contact__details'>
            <h4 className="contact__title">
                Get In Touch!
                <br/>
                <span>
                (Form Error... Email me instead at darshandesai1995@gmail.com)
                </span>
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

            <button type="submit">Send Message 1</button>
        </form>

    </div>
  );
}


export default Contact