import React, { useState, useEffect } from 'react'
function Skills() {

    const Techs = ["HTML", "CSS", "JAVA SCRIPT", "JAVA"];
    const [text, setText] = useState(Techs[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % Techs.length)
        }, 1500)
        return () => clearInterval(Interval)
    }, [])

    useEffect(() => {
        setText(Techs[index])
    }, [index])

    return (
        <>
            <section id="Skills">
                <div className='Skills-main-container'>
                    <div className='Skills-main-cnt'>
                        <div className='skills-cnt-one' style={{ color: 'black', fontSize: '24px' }}>
                            I Know: <span id="change"> {text}.</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills