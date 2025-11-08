import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/project-card";

const Projects = () => {
    return (
        <div class="page">
            <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-radial from-(--color-projects) to-[#0a0a0a]'></div>
            <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-radial from-(--color-projects) to-[#0a0a0a]'></div>
            <Navigation />
            <div className="body-part">
                <Header name="text-(--color-projects)"/>
                <h1 className="text-center my-10">Projects</h1>
                <section id="projects" className="projects-container">
                    <Project
                        project_img="src\images&files\logo_dschang.jpg"
                        project_title="Extension WordPress GuideTV"
                        project_year="2022"
                        project_description="This is a brief description of Project One. It showcases my skills in React and CSS."
                        project_skills={['HTML', 'CSS', 'PHP', 'WordPress', 'MySQL']}
                    />
                </section>
                <Footer bgdot='bg-(--color-projects)'/>
            </div>
        </div>
    );
};

export default Projects;