import React from 'react'
import '../style.css'
import ChartValue from './ChartValue'
import Welcome from './Welcome'
import Progress from './Progress'
const Main = () => {
  return (
    <div className='main'>
        <div className='main-content'>
       <Welcome />
       <Progress />
        <ChartValue />
        </div>
    </div>
  )
}

export default Main