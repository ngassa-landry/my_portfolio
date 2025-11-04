import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Projects = () => {
    return (
        <div class="projects-page flex h-screen">
            <Navigation />
            <div className="body-part">
                <Header />
                <h1 className="text-center">Projects</h1>
                <section id="projects" className="projects-container">
                    <div className="project-item">
                        <div className="project-img-part">
                            <img className="project-img" src="src\images&files\logo_dschang.jpg" alt="" />
                        </div>
                        <div className="project-description-part">    
                            <h3 className="project-title">Project 1 Title</h3>
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
                            <h3 className="project-title">Project 1 Title</h3>
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
                            <h3 className="project-title">Project 1 Title</h3>
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
                            <h3 className="project-title">Project 1 Title</h3>
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
                            <h3 className="project-title">Project 1 Title</h3>
                            <p className="project-description"> 
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                                Brief description of the project, technologies used, and key features.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Projects;