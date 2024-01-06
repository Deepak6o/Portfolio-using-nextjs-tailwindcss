import React from 'react'

const Details = ({position, company, companyLink, time, address,work})=>{
    return <li>
        <div>
            <h3>{position}</h3>
        </div>
    </li>
}
const Experience = () => {
  return (
    <div className='my-20'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div className='w-[75%] mx-auto relative'>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Experience