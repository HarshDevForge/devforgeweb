import React from 'react';
import '../Style/Contact.css';

function Contact() {
  return (
    <>
      <div>
        <h1 className='text-center text-5xl mt-5'>Get In Touch</h1>
      </div>
      <div className='container'>
        <div className='contact-container'>
          <div className='left-column'>
            <div className='contact-box'>
              <i className="fa-solid fa-location-pin"></i>
              <h2>Address</h2>
              <p>907, Capital Icon, Sargasan, Gandhinagar, Gujarat 382421</p>
            </div>
            <div className='contact-box'>
              <i className="fa-solid fa-envelope"></i>
              <h2>Email</h2>
              <p>connect@trydevforge.com</p>
            </div>
            <div className='contact-box'>
              <i className="fa-solid fa-phone"></i>
              <h2>Phone</h2>
              <p>+91 9327780842</p>
            </div>
          </div>
          <div className='separator'></div>
          <div className='right-column'>
            <p className='contactF'>Ask any kind of questions</p>
            <p className='contactS'>To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on.</p>
            <form>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' id='name' name='name' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input type='email' id='email' name='email' required />
                </div>
              </div>

              <label htmlFor='message'>Your Message:</label>
              <textarea id='message' name='message' rows='4' required></textarea>

              <button type='submit'>Send Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
