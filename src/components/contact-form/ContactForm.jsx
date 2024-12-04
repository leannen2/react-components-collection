import submitForm from "./submitForm";
import Modal from "../modal/Modal";
import "./styles.css";

export default function ContactForm() {
  return (
    <div id="contact-form-container">
      <Modal>
        <form
          id="contact-form"
          onSubmit={submitForm}
          action="https://www.greatfrontend.com/api/questions/contact-form"
          method="post"
        >
          <h1>Contact Us</h1>
          <div className="contact-form-section">
            <label htmlFor="name-input">Name</label>
            <input
              id="name-input"
              className="contact-form-input"
              name="name"
              type="text"
            />
          </div>
          <div className="contact-form-section">
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              className="contact-form-input"
              name="email"
              type="email"
            />
          </div>
          <div className="contact-form-section">
            <label htmlFor="message-input">Message</label>
            <textarea id="message-input" name="message"></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
