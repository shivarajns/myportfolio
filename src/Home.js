import React from 'react';
import BGVideo from './assets/Videos/BGVideo.mp4';
import ProfilePicture from './assets/images/ProfilePicture.png'
import resume from './assets/Files/ShivarajuNS_Resume IT.pdf'
function Home() {


    return (
        <>
            <section id="Home">
                <div id='video-cnt' >
                    <video id="video-bg" autoPlay loop muted playsInline disablePictureInPicture>
                        <source src={BGVideo} type='video/mp4'></source>
                    </video>
                </div>
                <div className='home-main-cnt'>
                    <div className='home-sub-cnt'>
                        {/* container for profile picture */}
                        <div className='profile-cnt'>
                            <div className='profile-bg'>
                            </div>
                            <div className='profile-bg1'>
                            </div>
                            <div className='profile-pic'>
                                <img src={ProfilePicture} alt='Profile'></img>
                            </div>
                        </div>

                        {/* contaier for about/bio */}

                        <div className='bio-cnt-main'>
                            <div className='heading'>
                                Shivaraju NS
                            </div>
                            <div className='bio-about-cnt'>
                               <p> Creative mind with a developer's precision. I build smooth, responsive web experiences that blend design with performance. Always learning, always evolving.</p>
                            <h6 style={{marginTop: "40px"}}>Download Resume</h6>
                            <button className='Resume-btn'>
                                <a href={resume} style={{ textDecoration: "none", color: "black" }}>
                                    Resume
                                </a>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home



