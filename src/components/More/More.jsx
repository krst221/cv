import React from 'react'
import './More.scss'

function More({languages, habilities, volunteer}) {
  return (
    <>
      <h2>Idiomas</h2>
      <ol></ol>
      <div className='c-more c-card'>
        {languages.map((item, index) => {
            return (
                <div key={JSON.stringify(item)}>
                    <p className='name' style={{fontSize: 24}}><strong>{item.language}</strong></p>
                    <p><strong>🖋 Nivel leído/escrito:</strong> {item.wrlevel}</p>
                    <p><strong>💬 Nivel hablado:</strong> {item.splevel}</p>
                    {index+1 !== languages.length ? <div className='c-sep'></div> : <p></p>}
                </div>
            );
        })}
        </div>
        <h2>Skills</h2>
        <ol></ol>
        <div className='c-more c-card'>
        {habilities.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                    <p>🖋 {item}</p>
                </div>
            );
        })}
        </div>
        <h2>Información complementaria</h2>
        <ol></ol>
        <div className='c-more c-card'>
        {volunteer.map((item, index) => {
            return (
                <div key={JSON.stringify(item)}>
                    <p className='c-name'>{item.name}</p>
                    <p className='c-name--second'>{item.where}</p>
                    <p className='c-justify'>{item.description}</p>
                    {index+1 !== volunteer.length ? <div className='c-sep'></div> : <div></div>}
                </div>
            );
        })}
      </div>
    </>
  )
}

export default More