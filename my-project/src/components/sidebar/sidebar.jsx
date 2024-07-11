import React from 'react'
import Location from './Location'
import Salary from './Salary'
import DOP from './DOP'
import WorkExp from './WorkExp'
import TypeOfEmp from './TypeOfEmp'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      <Location handleChange={handleChange}/>
      <Salary handleChange={handleChange} handleClick={handleClick}></Salary>
      <DOP handleChange={handleChange}></DOP>
      <WorkExp handleChange={handleChange}></WorkExp>
      <TypeOfEmp handleChange={handleChange}></TypeOfEmp>
    </div>
  )
}

export default Sidebar
