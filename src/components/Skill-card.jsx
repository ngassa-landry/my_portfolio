const Skill = ({skill_img, skill_title, skill_level}) =>{
    return(
        <div className="skill-item">
            <div className="skill-img-part">
                <img className="skill-img rounded-[3px]" src={skill_img} alt="" />
            </div>
            <div className="skill-description-part">    
                <h3 className="skill-title">{skill_title}</h3>
                <div className="skill-level">
                    {(() => {
                        switch (skill_level) {
                        case 1:
                            return (
                                <>
                                    <div className="skill-point"></div>
                                    <div className="skill-blank-point"></div>
                                    <div className="skill-blank-point"></div>
                                    <div className="skill-blank-point"></div>
                                    <div className="skill-blank-point"></div>
                                </>
                                );
                        case 2:
                            return (
                                <>
                                    <div className="skill-point"></div>
                                    <div className="skill-point"></div>
                                    <div className="skill-blank-point"></div>
                                    <div className="skill-blank-point"></div>
                                    <div className="skill-blank-point"></div>
                                </>
                                );
                        case 3:
                            return (
                                <>
                                    <div className="skill-point"></div>
                                    <div className="skill-point"></div>
                                    <div className="skill-point"></div>
                                    <div className="skill-blank-point"></div>
                                    <div className="skill-blank-point"></div>
                                </>
                                );
                        case 4:
                            return (
                                <>
                                    <div className="skill-point"></div>
                                    <div className="skill-point"></div>
                                    <div className="skill-point"></div>
                                    <div className="skill-point"></div>
                                    <div className="skill-blank-point"></div>
                                </>
                                );
                        case 5:
                            return (
                            <>
                                <div className="skill-point"></div>
                                <div className="skill-point"></div>
                                <div className="skill-point"></div>
                                <div className="skill-point"></div>
                                <div className="skill-point"></div>
                            </>
                            );
                        default:
                            return null;
                        }
                    })()}
                </div>
            </div>
        </div>
    );
};

export default Skill;