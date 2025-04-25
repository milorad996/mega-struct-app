import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../css/contact.css';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';



function Contact() {
    return (
        <div className='contact-main'>
            <section className='contact-hero'>
                <div className='contact-hero-text'>
                    <h2 className='contact-title'>CONTACT US</h2>
                    <p className='contact-subtitle'>Let's build something great together.</p>
                </div>
                <div className='contact-cards'>
                    <div className='contact-card'>
                        <FontAwesomeIcon className='contact-card-icon fa-fw' icon={faEnvelope} />
                        <h2 className='contact-card-title'>EMAIL</h2>
                        <p className='contact-card-subtitle'>info@megastruct.com</p>
                    </div>
                    <div className='contact-card'>
                        <FontAwesomeIcon className='contact-card-icon fa-fw' icon={faPhone} />
                        <h2 className='contact-card-title'>PHONE</h2>
                        <p className='contact-card-subtitle'>+1 (212) 555-0198</p>
                    </div>
                    <div className='contact-card'>
                        <FontAwesomeIcon className='contact-card-icon fa-fw' icon={faLocationDot} />
                        <h2 className='contact-card-title'>VISIT US</h2>
                        <p className='contact-card-subtitle'>290 Front Street West, Suite 1200, Toronto, ON M5V 3L9, Canada</p>
                    </div>
                </div>
            </section>
            <section className='contact-cards-mobile'>
                <div className='contact-card-mobile'>
                    <FontAwesomeIcon className='contact-card-icon fa-fw' icon={faEnvelope} />
                    <h2 className='contact-card-title'>EMAIL</h2>
                    <p className='contact-card-subtitle'>info@megastruct.com</p>
                </div>
                <div className='contact-card-mobile'>
                    <FontAwesomeIcon className='contact-card-icon fa-fw' icon={faPhone} />
                    <h2 className='contact-card-title'>PHONE</h2>
                    <p className='contact-card-subtitle'>+1 (212) 555-0198</p>
                </div>
                <div className='contact-card-mobile'>
                    <FontAwesomeIcon className='contact-card-icon fa-fw' icon={faLocationDot} />
                    <h2 className='contact-card-title'>VISIT US</h2>
                    <p className='contact-card-subtitle visit-us-mobile'>290 Front Street West, Suite 1200, Toronto, ON M5V 3L9, Canada</p>
                </div>
            </section>
            <section className="contact-form-section">
                <div className="contact-info-box">
                    <h2>Why Choose MegaStruct?</h2>
                    <ul>
                        <li>✔ Over 20 years of experience</li>
                        <li>✔ Innovative construction solutions</li>
                        <li>✔ Trusted by over 500+ clients</li>
                    </ul>
                </div>
                <div className="contact-form-box">
                    <h2>Get in Touch</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
            <section className="contact-map-section">
                <h2 className="map-title">Find Us</h2>
                <p className="map-subtitle">Visit our office at the heart of Toronto.</p>
                <p className="map-address">290 Front Street West, Suite 1200, Toronto, ON M5V 3L9, Canada</p>

                <div className="map-container">
                    <iframe
                        title="MegaStruct Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.678355434453!2d-79.38801982337884!3d43.644367053446456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d63ff1bba9%3A0x29e86d1f4b08fc9!2s290%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5V%203L9%2C%20Canada!5e0!3m2!1sen!2s!4v1713613940783!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '12px', boxShadow: '0 0 20px rgba(0,251,246,0.2)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </div>
    )
}


export default Contact;