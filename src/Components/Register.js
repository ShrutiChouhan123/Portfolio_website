import React, { useState } from 'react'
import '../index.css'
import axios from 'axios'
function Register() {
    const [username,setusername] = useState("")
    const [first_name,setfirst_name] = useState("")
    const [last_name,setlast_name] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [data,setdata] = useState([])
    let baseUrl='http://127.0.0.1:8000/users/'

  let register = () =>{
    let item = {username,first_name,last_name,email,password}
    axios.post(baseUrl,{
        username:username,
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password
    }).then((res)=>setdata(res.data))
    console.log(data)
  }

    
  return (
    <>
     <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Register</h2>
        </div>
      
          <div class="col-lg-8 mt-5 mt-lg-0">
            <form method="post" role="form" class="php-email-form" >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="username" value={username} class="form-control" id="name" placeholder="Your User Name"  onChange={(e)=>setusername(e.target.value)} required/>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" name="first_name" value={first_name} class="form-control" id="name" placeholder="Your First Name" onChange={(e)=>setfirst_name(e.target.value)} required/>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" name="last_name"  value={last_name}class="form-control" id="name" placeholder="Your Last Name" onChange={(e)=>setlast_name(e.target.value)}required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" value={email} id="email" placeholder="Your Email" onChange={(e)=>setemail(e.target.value)} required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="password" class="form-control" name="password"  value={password} id="email" placeholder="Your Password" onChange={(e)=>setpassword(e.target.value)} required/>
                </div>
              </div>
            
              {/* <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div class="text-center"><button type="submit" onClick={register}>Register</button></div>
            </form>
          </div>
        </div>

    </section>
    </>
  )
}

export default Register