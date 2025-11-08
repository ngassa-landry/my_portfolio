const Project = ({ project_img, project_title, project_year, project_skills, project_description }) =>{
    return(
        <div className="project-item">
            <div className="project-img-part">
                <img className="project-img" src={project_img} alt="" />
            </div>
            <div className="project-description-part">    
                <h3 className="project-title">{project_title} <span>{project_year}</span></h3>
                <div className="project-skills">
                    {project_skills.map((skill, index) => (
                        <span key={index} className='skill-tag'>{skill}</span>
                    ))}
                </div>
                <p className="project-description"> 
                    {project_description}
                </p>
            </div>
        </div>
    )
}

export default Project;