import CSS from './assets/images/CSS.png'
import HTML from './assets/images/HTML.png'
import java from './assets/images/java.png'
import javascript from './assets/images/javascript.png'
import react from './assets/images/react.png'
function Skills() {


    return (
        <section id="Skills">
            <div className='Skills-main-container'>
                <div className='card-container'>
                    <div className='skills-card'>
                        <p>HTML</p>
                        <img src={HTML} alt='HTML'></img>
                    </div>

                    <div className='skills-card'>
                        <p>CSS</p>
                        <img src={CSS} alt='CSS'></img>
                    </div>

                    <div className='skills-card'>
                        <p>Java</p>
                        <img src={java} alt='java'></img>
                    </div>

                    <div className='skills-card'>
                        <p>Javascript</p>
                        <img src={javascript} alt='javascript'></img>
                    </div>

                    <div className='skills-card'>
                        <p>React.JS</p>
                        <img src={react} alt='React.JS'></img>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills