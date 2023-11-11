import React from 'react'
import image from "../../assets/images/logo.svg"
import './login.css'

const Login = () => {
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
        <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                    <input type='file' src={image} alt='imgs' />
                    <img src={image} alt='images' />
              </div>
            </div>
                <div className="right">
                  <label htmlFor="">Username</label>
                  <input type="text" />
                  <label htmlFor="">Email</label>
                  <input type="email" />
                  <label htmlFor="">Password</label>
                  <input type="password" />
                  <button className='button'>Update</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
