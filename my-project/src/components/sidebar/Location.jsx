import React from 'react'
import InputFields from '../InputFields'

const Location = ({handleChange}) => {
  return (
    <div>
      <h3 className=' text-lg font-medium mb-2'>Location</h3>
      <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value='' onChange={handleChange}></input>
        <span className='checkmark'></span>All
      </label>
      <InputFields handleChange={handleChange} value='london' title='London' name='test' />
      <InputFields handleChange={handleChange} value='seattle' title='Seattle' name='test'/>
      <InputFields handleChange={handleChange} value='madrid' title='Madrid' name='test'/>
      <InputFields handleChange={handleChange} value='boston' title='Boston' name='test'/>
      </div>
    </div>
  )
}

export default Location
