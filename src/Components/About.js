import React from 'react'

function About() {
  return (
    <>
     <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p>I am Trainee Software Engineer at Bestpeers Infosystem Indore.I have done my B.tech from Mahakal Institute of Technology and Management Ujjain.
            I have done 6 months Internship on Python Django. I am currently  Working at Bestpeers Infosystem as Trainee Software Engineer
           
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" style={{marginLeft:"2rem"}}>
            <h3>Python Developer</h3>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 26 oct 2001</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +917987162371</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> City : Ujjain</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 23</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> B.tech</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Email:</strong> shchouhan@bestpeers.in.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default About