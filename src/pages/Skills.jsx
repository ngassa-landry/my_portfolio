import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Skill from '../components/Skill-card';

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
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='JavaScript'
                skill_description="Voici l'une des compétences que je maitrise"
              />
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='JavaScript'
                skill_description="Voici l'une des compétences que je maitrise"
              />
            </section>
            <Footer bgdot='bg-(--color-skills)'/>
          </div>
        </div>
    );
};

export default Skills;