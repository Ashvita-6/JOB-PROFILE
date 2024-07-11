import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <h3 className='ml-2 mt-2 font-bold text-lg'>{result.length} Jobs</h3>
      {result}
    </>
  )
}

export default Jobs
