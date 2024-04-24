import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Contact = () =>{
    return(
        <div className="Contact" id="Contact">
            <div className="Contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern}></img>
            </div>
            <div className="Contact-section">
                <p className="Contact-detail">SzymonKalinowski@outlook.com</p>
            </div>
        </div>
    );
}

export default Contact