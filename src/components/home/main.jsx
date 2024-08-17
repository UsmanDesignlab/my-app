import React from 'react'
import useIntersectionObserver from './animation';

const Main = () => {
  const options = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  // Use the custom hook
  const isVisible = useIntersectionObserver(options);

  return (
    <>
    <div className='name'>
    <div className='tag'>
    <h4>With a blend of creativity and technical prowess, we transform ideas into reality! </h4>
  </div>
  </div>
    <div className='name'>
    <div className='tag'>
    <h4>[ OUR SERVICES]</h4>
  </div>
  </div>

  <div className={`reasearch ${isVisible ? 'visible' : ''}`}>
    <div className="reasearch-one">
      <div className='reasearch-two'>
      <h5>O1</h5>
       <h2>Research</h2>
      </div>
      <div className='reasearch-three'>
      <h4>Digging Deep</h4>
       <h5>We unearth valuable insights that inform strategic decisions, guiding you towards sustainable growth and impact.</h5>
      </div>
    </div>
    <div className="reasearch-one">
    <div className='reasearch-two'>
      <h5>O2</h5>
       <h2>Strategy</h2>
      </div>
      <div className='reasearch-three'>
      <h4>Paving the way</h4>
       <h5>Tailored strategies that align with your goals, and help you to navigate complexities and seize opportunities and help you to navigate difficulties</h5>
      </div>
    </div>

  </div>

  <div className={`reasearch ${isVisible ? 'visible' : ''}`}>
    <div className='reasearch-one'>
      <div className='reasearch-two'>
      <h5>O3</h5>
       <h2>Design</h2>
      </div>
      <div className='reasearch-three'>
      <h4>Building Vision</h4>
       <h5>We blend creativity with functionality, crafting experiences that leave lasting impressions and resonate.</h5>
      </div>
    </div>
    <div className='reasearch-one'>
    <div className='reasearch-two'>
      <h5>O4</h5>
       <h2>Development</h2>
      </div>
      <div className='reasearch-three'>
      <h4>Shaping the future</h4>
       <h5>We harness the latest technologies to build robust, scalable platforms that drive your digital presence forward</h5>
      </div>
    </div>
  </div>
  </>
  )
}


export default Main;