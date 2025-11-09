const Skill = ({skill_img, skill_title, skill_description}) =>{
    return(
        <div className="skill-item">
            <div className="skill-img-part">
                <img className="skill-img" src={skill_img} alt="" />
            </div>
            <div className="skill-description-part">    
                <h3 className="skill-title">{skill_title}</h3>
                <p className="skill-description">{skill_description}</p>
            </div>
        </div>
    );
};

export default Skill;