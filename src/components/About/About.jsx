import './About.css'
import pic2 from '../../assets/pic2.jpg'


const About = () =>{
    return(
        <div className="About" id="About">
            <div className="About-title">
                <h1>About Me</h1>

            </div>
            <div className="About-section">
                <div className="About-left"></div>
                    <img src={pic2}></img>
            
                <div className="About-right">
                    <div className="About-me">
                        <p>I am a fifth-year master's student at the Poznan
                            University of Life Sciences. I am interested in the IT industry, therefore
                            I am expanding my skills by taking courses in programming languages. In the face of graduation, I am looking for
                            first job in the IT industry so that I can develop practical
                            programming skills and passion for technology.</p>
                    </div>
                    <div className="About-skills">
                        <p>HTML & CSS</p> <hr style={{width:'80%'}}/>
                        <p>React JS</p> <hr style={{width:'50%'}}/>
                        <p>JavaScript</p> <hr style={{width:'50%'}}/>
                        <p>Python</p> <hr style={{width:'70%'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About