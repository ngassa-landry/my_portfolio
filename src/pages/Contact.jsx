import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Contact = () => {
    return (
        <div className="contact-page flex h-screen">
            <Navigation />
            <div className='body-part'>
                <Header />
                <section id="contact" className="container">
                    <h2>Contact Me</h2>
                    <form className="contact-form">
                        
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;