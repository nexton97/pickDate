import React from 'react'
import "./Main.css"

const main = ({ imageSrc }) => {
  return (
    <div className="Main">
        <img src={imageSrc} alt="Travel" className="main__image"/>
        <h1 className='main__title'>Pick a Meeting with me !</h1>
    </div>
  )
}

export default main;
