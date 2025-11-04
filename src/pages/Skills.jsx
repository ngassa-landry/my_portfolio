import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Skills = () => {
    return(
        <div className='skills-page flex h-screen'>
          <Navigation />
          <div className='body-part '>
            <Header />
            <h1 className="text-center">Skills</h1>
            <section id="skills" className='skills-container'>
              <div className="skill-item text-center">
                <div className="skill-img-part">
                    <img className="skill-img" src="src\images&files\logo_dschang.jpg" alt="" />
                </div>
                <div className="skill-description-part">    
                    <h3 className="skill-title">Skill 1 Title</h3>
                    <p className="skill-description"> 
                        Brief description of the skill, technologies used, and key features.
                        Brief description of the skill, technologies used, and key features.
                        Brief description of the skill, technologies used, and key features.
                        Brief description of the skill, technologies used, and key features.
                    </p>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
    );
};

export default Skills;