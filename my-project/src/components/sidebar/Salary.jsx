import React from 'react'
import Button from './Button'
import InputFields from '../InputFields'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
      <h3 className=' text-lg font-medium mb-2'>Salary</h3>
      <div className=' flex flex-wrap md:gap-2 sm:gap-0 mb-2'>
      <Button onClickHandler={handleClick} value='' title='Hourly'/>
      <Button onClickHandler={handleClick} value='Monthly' title='Monthly'/>
      <Button onClickHandler={handleClick} value='Yearly' title='Yearly'/>
      </div>
      <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test2' id='test' value='' onChange={handleChange}></input>
        <span className='checkmark'></span>All
      </label>
      <InputFields handleChange={handleChange} value={30} title='<30k' name='test2' />
      <InputFields handleChange={handleChange} value={50} title='<50k' name='test2' />
      <InputFields handleChange={handleChange} value={80} title='<80k' name='test2' />
      <InputFields handleChange={handleChange} value={100} title='<100k' name='test2' />
      </div>
    </div>
  )
}

export default Salary
