import React from 'react'
import './Education.scss'

function Education({education}) {
  return (
    <>
      <h2>Educación</h2>
      <ol></ol>
      <div>
        <div className='c-education c-card'>
          {education.map((item, index) => {
              return (
                  <div key={JSON.stringify(item)}>
                      <p className='c-name'>📕 {item.name}</p>
                      <p>{item.where}</p>
                      <p>{item.date}</p>
                      {index+1 !== education.length ? <div className='c-sep'></div> : <div></div>}
                  </div>
              );
          })}
        </div>
      </div>
    </>
  )
}

export default Education