import React from 'react'
import './About.scss'

function About({about}) {
  return (
    <>
      <h2>Sobre mí</h2>
      <ol></ol>
      <div>
        <div className='c-about c-card'>
          {about.map((item) => {
              return (
                  <div key={JSON.stringify(item)}>
                      <p>{item.info}</p>
                  </div>
              );
          })}
        </div>
      </div>
    </>
  )
}

export default About