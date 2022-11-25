import React from 'react'
import StudentItem from "./StudentItem";


function StudentList({students, changeColor}) {
  return (
    <div>
        <h2>Student List</h2>
        {students.map((student)=>(
            
            <StudentItem key={student.id} student={student} changeColor={changeColor}/>
        )
           
        )
         }
    </div>
  )
}

export default StudentList