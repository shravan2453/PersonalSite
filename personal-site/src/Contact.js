import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact(){
  const [state, handleSubmit] = useForm("mgvzrpjg");


  const onSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(e);      // sends to Formspree
  };


  return (
    <div className="Contact">
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
