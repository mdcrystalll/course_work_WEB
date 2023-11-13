import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className="container flex">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur porro eius laudantium soluta reiciendis id iste dolorum expedita.</p>
            <div className="social">
                <BsFacebook className='icon' />
                <RiInstagramFill className='icon' />
                <AiFillTwitterCircle className='icon'/>
                <AiFillLinkedin className='icon' />
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
