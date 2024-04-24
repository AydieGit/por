import './Recent.css'
import work_data from '../../assets/recentWork_data'


import arrow from '../../assets/theme_pattern.svg'

const Recent = () =>{
    return(
        <div className="recentProjects" id="Portfolio">
            <div className="recent-title">
                <h1>My latest projects</h1>
                <img src ={arrow}></img>
            </div>
            <div className="Recent-container">
                {work_data.map((work, index)=>{
                    return <img key={index} src={work.w_img} ></img>
                })}
            </div>

        </div>
    )
}
export default Recent