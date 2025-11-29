import React from 'react'
import  Card  from "./Components/Card";

import "./index.css";


const App = () => {


  const users = [
    {
      id: 1,
      name: "Gopal Prajapati",
      job: "Full Stack Developer",
      img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      id: 2,
      name: "Rohit Sharma",
      job: "Software Engineer",
      img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
      id: 3,
      name: "Aman Verma",
      job: "UI/UX Designer",
      img: "https://www.w3schools.com/howto/img_avatar.png"
    }
  ];


  return (
    
  <div className="card-container">

   {users.map((user)=>(
    <Card
          key={user.id}
          name={user.name}
          job={user.job}
          img={user.img}
        />
   ))}

   </div>
  )
}

export default App
