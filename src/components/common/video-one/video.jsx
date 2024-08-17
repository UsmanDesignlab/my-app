import React from 'react'

const Video = () => {
  return (
    <div className='video-one'>
    <div className='video'>
    <video 
        src="video-one.mp4" // Replace with the path to your video file
        autoPlay
        muted
        playsInline
        loop // Optional: to loop the video
        className="video-element" // Optional: to apply custom styles
      >
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  )
}

export default Video;