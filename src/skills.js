import CSS from './assets/images/CSS.png'
import HTML from './assets/images/HTML.png'
import java from './assets/images/java.png'
import javascript from './assets/images/javascript.png'
import react from './assets/images/react.png'
import git from './assets/images/git.png'
import github from './assets/images/github.png'
import vscode from './assets/images/vscode.png'
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

                    <div className='skills-card'>
                        <p>Git</p>
                        <img src={git} alt='Git'></img>
                    </div>

                    <div className='skills-card'>
                        <p>Github</p>
                        <img src={github} alt='Github'></img>
                    </div>

                    <div className='skills-card'>
                        <p>VS Code</p>
                        <img src={vscode} alt='VS Code'></img>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills