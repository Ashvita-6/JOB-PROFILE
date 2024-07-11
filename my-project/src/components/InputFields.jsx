import React from 'react'

const InputFields = ({handleChange,value,title,name}) => {
  return (
    <div>
      <label className='sidebar-label-container'>
        <input type='radio' name={name} value={value} onChange={handleChange}></input>
        <span className='checkmark'></span>{title}
      </label>
    </div>
  )
}

export default InputFields
