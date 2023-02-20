import React from 'react'
import PauseOnHover from './PauseOnHoverSlider'

const TrandingNow = ({title}:{title:string}) => {
  return (
    <div className="wrapper trandingNow--wrapper">
      <div className="trandingNow__slider">
        <PauseOnHover title={title}/>
        </div>
    </div>
  )
}

export default TrandingNow