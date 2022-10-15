import React from 'react'
import './experience.css'
import {BsPatchCheckFill}from 'react-icons/bs'

const experience = () => {
  return (
 <section id='experience'>
 <h5>What skills I have </h5>
 <h2>My Experience</h2>

 <div className="container experience_container">
 <div className = "experience_frontend">
<h3>FrontEnd Development </h3>
 <div className="experience_content">
 <article className='experience_details'>
 <BsPatchCheckFill className="experience_details-icon"/>
 <div>
 <h4>HTML</h4>
 <small className="text-light">Experience</small>
 </div>
 </article>

 <article className='experience_details'>
 <BsPatchCheckFill className="experience_details-icon"/>
 <div>
 <h4>CSS/TailWind</h4>
 <small className="text-light">Mediocre</small>
 </div>
 </article>

 <article className='experience_details'>
 <BsPatchCheckFill/>
 <div>
 <h4>JavaScript</h4>
 <small className="text-light">Average</small>
 </div>
 </article>

 <article className='experience_details'>
 <BsPatchCheckFill/>
<div>
 <h4>Bootstrap</h4>
 <small className="text-light">Mediocre</small>
</div> 
 </article>

 <article className='experience_details'> 
<BsPatchCheckFill/>
<div>
<h4>React-js</h4>
 <small className="text-light">Mediocre</small>
 </div>
 </article>
 </div>
 </div>
 {/*----End of Frontend---*/}
 <div className="experience_backend">
 <h3>Backend Development</h3>
 <article className='experience_details'>
 <BsPatchCheckFill/>
 <div>
 <h4>Node js</h4>
 <small className="text-light">Beginner</small>
 </div>
 </article>

 <article className='experience_details'>
 <BsPatchCheckFill/>
<div>
 <h4>Mongo DB</h4>
 <small className="text-light">Mediocre</small>
 </div>
 </article>

 <article className='experience_details'>
 <BsPatchCheckFill/>
 <div>
 <h4>JavaScript</h4>
 <small className="text-light">Mediocre</small>
 </div>
 </article>
 </div>
 </div>
 </section>
  )
}

export default experience
