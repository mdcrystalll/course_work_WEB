import React from 'react'
import image from "../../assets/images/logo.svg"
import './login.css'

const Login = () => {
  return (
    <>
      <section className='accountInfo'>
        <h1>Account Information</h1>
        <div className="content">
            <div className="left">
                <div className="img flexCenter">
                   
                    <input type="file" src={image} />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
