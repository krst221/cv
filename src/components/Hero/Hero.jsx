import React from 'react'
import './Hero.scss'

function Hero({hero}) {
  return (
    <div className='c-hero'>
      <img src={hero.image} alt=""/>
      <div className='c-card'>
        <h2>{hero.name} {hero.address}</h2>
        <p>πΊοΈ {hero.city}</p>
        <p>ποΈ {hero.birthDate}</p>
        <p>π§ <a href={'mailto:' + hero.email}>{hero.email}</a></p>
        <p>π±{hero.phone}</p>
        <p>πΎ <a href={hero.gitHub}>GitHub</a></p>
      </div>
    </div>
  )
}

export default Hero