import React from 'react'
import InputFields from '../InputFields'

const DOP = ({handleChange}) => {
    const now = new Date();
    // console.log(now);
    const tfHoursAgo=new Date(now-24*60*60*1000);
    const sDaysAgo=new Date(now-7*24*60*60*1000);
    const tDaysAgo=new Date(now-30*24*60*60*1000);

    const tfHoursAgoDate=tfHoursAgo.toISOString().slice(0,10);
    const sDaysAgoDate=sDaysAgo.toISOString().slice(0,10);
    const tDaysAgoDate=tDaysAgo.toISOString().slice(0,10);
    
  return (
      <div>
      <h3 className=' text-lg font-medium mb-2'>Date Of Posting</h3>
      <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test3' id='test3' value='' onChange={handleChange}></input>
        <span className='checkmark'></span>All
      </label>
      <InputFields handleChange={handleChange} value={tfHoursAgoDate} title='Last 24 hours' name='test3'/>
      <InputFields handleChange={handleChange} value={sDaysAgoDate} title='Last 7 days' name='test3'/>
      <InputFields handleChange={handleChange} value={tDaysAgoDate} title='Last Month' name='test3'/>
      </div>
    </div>
  )
}

export default DOP
