import CSS from './assets/images/CSS.png'
import HTML from './assets/images/HTML.png'
function Skills() {


    return (
        <section id="Skills">
            <div id="Skills-main-cont">
                <p className="Skills-headings">Web Design</p>
                <div className="skills-cont-one">
                    <div className='Design-cont'>
                        <img src={HTML} alt="HTML"></img>
                        <p>HTML</p>
                    </div>
                    <div className='Design-cont'>
                        <img src={CSS} alt="CSS"></img>
                        <p>CSS</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills