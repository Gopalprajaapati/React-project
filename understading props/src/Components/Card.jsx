import React from 'react'

const Card = (props) => {

  console.log(props);

  return (
     <div>
          <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Quos ullam dolor explicabo eius at repudiandae ipsa quia temporibus!</p>
          <button>click</button>
      </div>  </div>
    
   
  )
}

export default Card
