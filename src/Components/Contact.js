import React from 'react';
import '../index.css';
import  { useState } from 'react'
import axios from 'axios';

function Contact() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [subject, setsubject] = useState("")
  const [message, setmessage] = useState("")
  const [data, setdata] = useState([])

  let baseUrl = 'http://127.0.0.1:8000/contact/';
  let contact = () =>{
    let item = {name,email,subject,message}
    axios.post(baseUrl,{
        name:name,
        email:email,
        subject:subject,
        message:message,
    
    }
    ).then((res)=>
    setdata(res.data)
    )


   
  }
  return (
    <>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <div class="row mt-5">

            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Ujjain (M.P)</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>shchouhan@bestpeers.in</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 7987162371</p>
                </div>

              </div>

            </div>
            <br />
            <div class="col-lg-8 mt-5 mt-lg-0">

              <form action="http://127.0.0.1:8000/contact/" method="post" role="form" class="php-email-form" >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" value={name} class="form-control" id="name" placeholder="Your Name" onChange={(e)=>setname(e.target.value)} required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" value={email} name="email" id="email" placeholder="Your Email" onChange={(e)=>setemail(e.target.value)} required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject"  value={subject} id="subject" placeholder="Subject" onChange={(e)=>setsubject(e.target.value)} required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" value={message} rows="5" placeholder="Message" onChange={(e)=>setmessage(e.target.value)} required></textarea>
                </div>
                <div class="text-center"><button type="submit" onClick={contact}>Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact