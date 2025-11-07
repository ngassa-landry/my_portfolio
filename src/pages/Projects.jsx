import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";


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
                    <div className="project-item">
                        <div className="project-img-part">
                            <img className="project-img" src="src\images&files\logo_dschang.jpg" alt="" />
                        </div>
                        <div className="project-description-part">    
                            <h3 className="project-title">Project 1 Title <span>2025</span></h3>
                            <div className="project-skills">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">CSS</span>
                            </div>
                            <p className="project-description"> 
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                            </p>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-img-part">
                            <img className="project-img" src="src\images&files\logo_dschang.jpg" alt="" />
                        </div>
                        <div className="project-description-part">    
                            <h3 className="project-title">Project 1 Title <span>2025</span></h3>
                            <div className="project-skills">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">CSS</span>
                            </div>
                            <p className="project-description"> 
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                            </p>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-img-part">
                            <img className="project-img" src="src\images&files\logo_dschang.jpg" alt="" />
                        </div>
                        <div className="project-description-part">    
                            <h3 className="project-title">Project 1 Title <span>2025</span></h3>
                            <div className="project-skills">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">CSS</span>
                            </div>
                            <p className="project-description"> 
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer bgdot='bg-(--color-projects)'/>
            </div>
        </div>
    );
};

export default Projects;