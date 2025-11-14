import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Skill from '../components/Skill-card';

const Skills = () => {
    return(
        <div className='page'>
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-skills)_0%_1%,_#453a22_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
            <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-skills)_0%_1%,_#453a22_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
          </div>
          <Navigation />
          <div className='body-part flex flex-col max-sm:items-center max-md:items-center'>
            <Header name='text-(--color-skills)'/>
            <h1 className="text-center my-10">Skills</h1>
            <section id="skills" className='skills-container'>
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='HTML/CSS'
                skill_level={4}
              />
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='JavaScript'
                skill_level={3}
              />
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='Java'
                skill_level={2}
              />
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='MySQL'
                skill_level={3}
              />
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='PHP'
                skill_level={2}
              />
              <Skill
                skill_img="src\images&files\logo_dschang.jpg"
                skill_title='ReactJS'
                skill_level={2}
              />
            </section>
            <Footer bgdot='bg-(--color-skills)'/>
          </div>
        </div>
    );
};

export default Skills;