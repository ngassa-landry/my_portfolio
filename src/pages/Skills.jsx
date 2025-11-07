import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Skills = () => {
    return(
        <div className='page'>
          <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-radial from-(--color-skills) to-[#0a0a0a]'></div>
          <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-radial from-(--color-skills) to-[#0a0a0a]'></div>
          <Navigation />
          <div className='body-part'>
            <Header name='text-(--color-skills)'/>
            <h1 className="text-center my-10">Skills</h1>
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
            <Footer bgdot='bg-(--color-skills)'/>
          </div>
        </div>
    );
};

export default Skills;