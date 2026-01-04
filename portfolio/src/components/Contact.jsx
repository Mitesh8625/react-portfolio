export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h1 className="contact-title">Get In Touch</h1>

        <p className="contact-text">
          Have a project in mind or want to discuss opportunities?  
          Feel free to reach out. I’m always open to professional conversations.
        </p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
