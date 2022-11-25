import React from 'react'

function StudentItem({student, changeColor}) {
    const{ name, id, email, color, age } = student
  return ( 
    <div style={{backgroundColor :color, paddingBottom:"2rem", paddingTop:"1rem", marginTop:"1rem" }}>
        <h3>{name}</h3>
        <p>Email:{email}</p>
        <p>Age:{age}</p>
        
         Color: <input type="text" value={color} onChange={(e) => changeColor(id, e.target.value)}/>
          

        
    </div>
    
  )
}

export default StudentItem