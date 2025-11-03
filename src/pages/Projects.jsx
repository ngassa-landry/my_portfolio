import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Projects = () => {
    return (
        <div class="projects-page flex h-screen">
            <Navigation />
            <div className="body-part">
                <Header />
                <section id="projects" className="container">
                    <div className="project-item">
                        <div className="project-presentation">
                            <h3>Project-name</h3>
                            <div className="project-skills"></div>
                        </div>
                        <div className="project-images"></div>
                        <div className="project-references"></div>
                    </div>
                    <div className="project-item">
                        <div className="project-presentation">
                            <h3>Project-name</h3>
                            <div className="project-skills"></div>
                        </div>
                        <div className="project-images"></div>
                        <div className="project-references"></div>
                    </div>
                    <div className="project-item">
                        <div className="project-presentation">
                            <h3>Project-name</h3>
                            <div className="project-skills"></div>
                        </div>
                        <div className="project-images"></div>
                        <div className="project-references"></div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Projects;