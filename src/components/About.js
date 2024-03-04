import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  return (
    <div className="about" onClick={()=>navigate("/")}>
      <h4>About</h4>
      <p>I am a programmer with over 10 years of experience. I have worked on a variety of projects, from small websites to large enterprise applications. I am passionate about building high-quality software that solves real-world problems.</p>
      <p>In my free time, I enjoy spending time with my family and friends, playing video games, and reading.</p>
    </div>
  )
}

export default About