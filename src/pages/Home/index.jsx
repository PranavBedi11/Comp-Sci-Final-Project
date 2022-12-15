import React from 'react'
import Nav from '../../Components/navbar'
import "./index.css";


/**
 * The Home component is the homepage of the Job Finder website. The very top has a navbar component that is being called. It includes a header with a
 * call to action and information about the website's purpose, as well as a section with cards
 * that describe the services offered by the website (for freelancers and employeers).
 *
 * @returns {JSX.Element} A React component that renders the homepage and navbar.
 */
const Home = () => {





  return (
    <> 
    <Nav />
    <header>
      <div className="header_container">
        <div className="left-side">
            <h1>Job <span> Finder </span></h1>
            <h3>Giving Jobs to those who deserve it</h3>
            <button type="submit" className='home-btn'>
                Find a job now
            </button>
        </div>

        <div class="right-side">
          <img src="/assets/Images/worker3.webp" />
        </div> 
      </div>
    </header>

    <div class="service">
      <div class="title">
        <h2>What We Do</h2>
      </div>
      <div class="box">
        <div class="card">
          <i className="fa fa-user-edit fa-user"></i>
				  <h5>Freelancer</h5>
          <div class="pra">
            <p>If your family income is bellow 30,000$ or your personal income is bellow 20,000$ sign up to be a freelancer. Only low income poeple are allowed</p>
            <a class="button" href="">SingnUp As Freelancer</a>
          </div>
        </div>
   
        <div class="card">
          <i className="fa fa-spinner fa-spin"></i>
				  <h5>Employeert</h5>
          <div class="pra">
            <p>If you would like to empolyee people who are actually in need post freelancing jobs they can complete around the house or at ur office</p>
            <a class="button" href="">SingnUp As An Employeer</a>
          </div>
        </div>
      </div>
	  </div>


    </>
  )
}

export default Home