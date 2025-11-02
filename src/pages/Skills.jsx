import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Skills = () => {
    return(
        <>
          <Navigation />
          <div className='body-part'>
            <Header />
            <section id="skills">
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="languages">
                  <div className="language">
                    JavaScript
                    <img src="" alt="" />
                  </div>
                  <div className="language">
                    Python
                    <img src="" alt="" />
                  </div>
                  <div className="language">
                    Java
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Web Development</h3>
                <div className="web-dev-tools">
                  <div className="web-dev-tool">
                    HTML/CSS
                    <img src="" alt="" />
                  </div>
                  <div className="web-dev-tool">
                    ReactJs
                    <img src="" alt="" />
                  </div>
                  <div className="web-dev-tool">
                    Node.js
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Platforms</h3>
                <div className="tools">
                  <div className="tool">
                    git&Github
                    <img src="" alt="" />
                  </div>
                  <div className="tool">
                    Docker
                    <img src="" alt="" />
                  </div>
                  <div className="tool">
                    AWS
                    <img src="" alt="" />
                  </div>
                  <div className="tool">
                    Linux
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </>
    );
};

export default Skills;