import React from 'react'

const Card = ({ name, job, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>{job}</p>
      </div>
    </div>
  )
}

export default Card
