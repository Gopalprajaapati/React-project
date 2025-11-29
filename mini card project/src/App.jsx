import React from 'react'

const App = () => {
  return (
    <div>
      <div className="card">

        <div className="card-top">
          <img src="https://m.media-amazon.com/images/I/51lOBWCFOyL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <button>save </button>        
        </div>

        <div className="card-center">
          <h3>Amzone <span>5 day age</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part time </h4>
            <h4>Senior Desginer</h4>
          </div>
        </div>

      <div className="card-bottom">
        <div>
            <h3>$120/hr</h3>
            <p>Mumbai</p>
        </div>
       <button>Apply</button>
      </div>

      </div>
    </div>
  )
}

export default App
