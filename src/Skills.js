import React, { useState, useEffect } from 'react';

const Techs = ["HTML", "CSS", "JAVASCRIPT", "JAVA"];

function Skills() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % Techs.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Skills">
      <div className="Skills-main-container">
        <div className="Skills-main-cnt">
          <div className="skills-cnt-one" style={{ color: 'black', fontSize: '24px' }}>
            I Know: <span id="change">{Techs[index]}.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
