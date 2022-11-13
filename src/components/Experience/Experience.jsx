import React from 'react'
import './Experience.scss'

function Experience({experience}) {
  return (
    <>
      <h2>Experiencia Profesional</h2>
      <ol></ol>
      <div>
      <div className='c-experience c-card'>
        {experience.map((item, index) => {
            return (
                <div key={JSON.stringify(item)}>
                    <p className='c-name'>📕 {item.name}</p>
                    <p>{item.where}</p>
                    <p>{item.date}</p>
                    <p class='c-justify'>{item.description}</p>
                    {index+1 !== experience.length ? <div className='c-sep'></div> : <div></div>}
                </div>
            );
        })}
      </div>
    </div>
    </>
  )
}

export default Experience