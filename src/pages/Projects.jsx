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
                        project_description="Il était question ici de développer et d'intégrer une extension WordPress permettant de gérer un guide TV pour le site web de la CRTV. L'extension devait permettre aux administrateurs du site de saisir, modifier et afficher les programmes télévisés de manière conviviale."
                        project_skills={['HTML', 'CSS', 'PHP', 'WordPress', 'MySQL']}
                    />
                    <Project
                        project_img="src\images&files\logo_dschang.jpg"
                        project_title="Système de Management de pressing moderne"
                        project_year="2024"
                        project_description="Il était question ici de concevoir une application windows de gestion pour un pressing moderne. L'application devait permettre de gérer les clients, les commandes, les paiements et les stocks de manière efficace et intuitive."
                        project_skills={['JAVA', 'JavaFX', 'MySQL']}
                    />
                    <Project
                        project_img="src\images&files\logo_dschang.jpg"
                        project_title="Plateforme Web de Recherche d'emploi"
                        project_year="2025"
                        project_description="Il était question ici de développer une plateforme web de recherche d'emploi qui connecte les chercheurs d'emploi avec les employeurs. La plateforme devait offrir des fonctionnalités telles que la création de profils, la recherche d'offres d'emploi, la candidature spontanée en ligne et la gestion des candidatures. 
                        Nous y avons aussi intégrer un agent IA pour aider les utilisateurs à analyser leurs CV et remplir automatiquement leurs données."
                        project_skills={['HTML', 'CSS', 'JavaScript', 'PHP', 'ReactJS', 'MySQL', 'AI']}
                    />
                </section>
                <Footer bgdot='bg-(--color-projects)'/>
            </div>
        </div>
    );
};

export default Projects;