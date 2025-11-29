import React from 'react'
import Card from './Components/Card'




const App = () => {

  const arr =[
  {
    name : "Gopal prajapati",
    age : "25",
    img : "https://cms.imgworlds.com/assets/9f39cd74-e665-45e5-9c59-b482d5223a01.jpg"
  },
   {
    name : "raj prajapati",
    age : "30",
    img : "https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/71fb6d83-a91e-4a08-b71b-34cb868033f4-10432-dubai-img-worlds-of-adventure---uae-resident-offer-06.jpg?auto=format&w=510.8727272727273&h=401.4&q=90&ar=14%3A11&crop=faces&fit=crop"
  }
];




  return (
    <div>
      <div className="parent">
     
     {arr.map(function (elem,idx) {
      return (
        <div key={idx}>
          <Card name={elem.name} age={elem.age} img={elem.img}/>
        </div>
      )
     })}
      
      {/* <Card name="Gopal" age={25} img="https://cms.imgworlds.com/assets/9f39cd74-e665-45e5-9c59-b482d5223a01.jpg" /> */}
      {/* <Card name="Prajapati" age={25}  img = "https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/71fb6d83-a91e-4a08-b71b-34cb868033f4-10432-dubai-img-worlds-of-adventure---uae-resident-offer-06.jpg?auto=format&w=510.8727272727273&h=401.4&q=90&ar=14%3A11&crop=faces&fit=crop"/> */}
    
      
    
    </div>
    </div>
  )
}

export default App
