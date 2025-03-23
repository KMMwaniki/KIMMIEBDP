export default function Contact() {
  return (
    <div className="home-container">
      <div className="container">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-section">
              <h2 className="contact-heading">PHONE</h2>
              <a href="https://wa.me/254703592854" target="_blank" rel="noopener noreferrer" className="contact-info">
                +254703592854
              </a>
              <p className="contact-note">Click to message on WhatsApp</p>
            </div>

            <div className="contact-section">
              <h2 className="contact-heading">EMAIL</h2>
              <a href="mailto:msomwa20@gmail.com" className="contact-info">
                msomwa20@gmail.com
              </a>
              <p className="contact-note">Click to send an email</p>
            </div>
          </div>

          <div className="center-button">
            <a href="/" className="btn btn-pink">
              BACK TO HOME
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

