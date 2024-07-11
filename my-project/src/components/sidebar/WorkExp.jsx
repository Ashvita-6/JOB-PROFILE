import React from 'react'
import InputFields from '../InputFields'

const WorkExp = ({handleChange}) => {
  return (
    <div>
      <h3 className=' text-lg font-medium mb-2'>Work Experience</h3>
      <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test4' id='test4' value='' onChange={handleChange}></input>
        <span className='checkmark'></span>Any Experience
      </label>
      <InputFields handleChange={handleChange} value='Internship' title='Internship' name='test4' />
      <InputFields handleChange={handleChange} value='Work remotely' title='Work remotely' name='test4'/>
      </div>
    </div>
  )
}

export default WorkExp
