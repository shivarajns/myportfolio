import Weatherproject from './assets/images/Weatherproject.png'
import Weatherproject2 from './assets/images/Weatherproject2.png'
import Weatherproject3 from './assets/images/Weatherproject3.png'

function Projects() {

    return (
        <div id="Projects">
            <div className="project-cnt">
                <p className='heading'>Projects</p>
                <div className='sub-cont-project'>
                    <div className='Image-cont'>
                        <img src={Weatherproject} alt='Photo-1' style={{ width: "100%"}}></img>
                        <img src={Weatherproject2} alt='Photo-1' style={{ width: "100%"}}></img>
                        <img src={Weatherproject3} alt='Photo-1' style={{ width: "100%"}}></img>
                    </div>
                    <div>
                        <p>Weather App</p>
                        <p className='pro-cnt-content'>A responsive web application that provides real-time weather information for any city worldwide. Built using React and integrated with the OpenWeather API, this project demonstrates clean UI design, dynamic API data fetching, and error handling for invalid inputs.</p>
                        <div className='project-links'>
                            <a href='https://shivarajns.github.io/Weather.find-/' target='blank'><button>Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Projects