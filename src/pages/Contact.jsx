import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Contact = () => {
    return (
        <div className="page">
            <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-contact)_0%_1%,_#2c244a_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
            <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-contact)_0%_1%,_#2c244a_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
            <Navigation />
            <div className='body-part'>
                <Header name="text-(--color-contact)"/>
                <section id="contact" className="container h-[calc(100vh-40px)]">
                    <h2>Contact Me</h2>
                    <form className="contact-form">
                        
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
                <Footer bgdot='bg-(--color-contact)'/>
            </div>
        </div>
    );
};

export default Contact;