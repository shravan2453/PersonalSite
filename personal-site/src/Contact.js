import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact(){
  const [state, handleSubmit] = useForm("mgvzrpjg");


  const onSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(e); 

    const contactSection = document.querySelector('.Contact');
    contactSection.style.height = '50vh';
    
    const inputArea = document.getElementById('contact');
    inputArea.innerHTML = `
            <h1 class="thanks-message"> Thank you for reaching out. I will get back to you as soon as possible. </h1>`;   // sends to Formspree
  };


  return (
    <div className="Contact" id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <div className="contactInfo">
            <form onSubmit={onSubmit} noValidate>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Enter your name..." required />

                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="Enter your email..." required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="How can I help?" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type="submit" className="submitButton" disabled={state.submitting}>
            {state.submitting ? 'Sending…' : 'Submit'}
                </button>
            </form>
        </div>
    </div>
  );
}

export default Contact;
