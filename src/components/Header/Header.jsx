import './Header.css'

const profPic = 'https://media.licdn.com/dms/image/D5603AQHLFM9j_OSsHg/profile-displayphoto-shrink_200_200/0/1710966147145?e=1719446400&v=beta&t=5y5X-3SoUOoCEN3JjhatnohHU229G3bi7owPLjk03pg'
const Header = () =>{
    return(
        <div className="Header" id="Home">

            <h1><span>I'm Szymon Kalinowski,</span> aspiring developer based in Poland</h1>
            <p>Trying my best with programming</p>
            <div className="Header-action">
                <div className="Header-connect">
                    <a target="_blank" href='https://www.linkedin.com/in/szymon-kalinowski-1b05b12b3/'>Linkedin</a></div>
                <div className="Header-resamue">
                    <a target="_blank" href="https://github.com/AydieGit">GitHub</a></div>
            </div>
        </div>
    );
}

export default Header