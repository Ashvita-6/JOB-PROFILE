import React from 'react'
import InputFields from '../InputFields'

const TypeOfEmp = ({handleChange}) => {
  return (
    <div>
      <h3 className=' text-lg font-medium mb-2'>Type of Employment</h3>
      <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test5' id='test5' value='' onChange={handleChange}></input>
        <span className='checkmark'></span>Any
      </label>
      <InputFields handleChange={handleChange} value='Full-time' title='Full-time' name='test5' />
      <InputFields handleChange={handleChange} value='Part-time' title='Part-time' name='test5'/>
      <InputFields handleChange={handleChange} value='Temporary' title='Temporary' name='test5'/>
      </div>
    </div>
  )
}

export default TypeOfEmp
