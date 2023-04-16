import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'
import { Typography } from '@mui/material';

export const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    
    try{
        const response = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        form.current.children[0].children[1].value = ''
        form.current.children[1].children[1].value = ''
        form.current.children[2].children[1].value = ''
    } catch (error){
        console.log(error);
    }
    
  };

  return (
    <>
        
        <div className='contact' id='Contact'>
            <div className='header'>
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Contact Me
                </Typography>
            </div>
            <div className='contact-container'>
                <form className='email-form' ref={form} onSubmit={sendEmail}>
                    <div className='user-name'>
                        <label>Name</label>
                        <input type="text" name="user_name" required/>
                    </div>
                    <div className='email'>
                        <label>Email</label>
                        <input type="email" name="user_email" required/>
                    </div>
                    <div className='message'>
                        <label>Message</label>
                        <textarea name="message" required/>
                    </div>
                    <input className='button' type="submit" value="Send" />
                </form>
            </div>
        </div>
    </>
  );
};
