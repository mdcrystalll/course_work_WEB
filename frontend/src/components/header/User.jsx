import React from 'react'
import { Link } from 'react-router-dom'
import {RiImageAddLine} from 'react-icons/ri';

import { BsBagCheck} from "react-icons/bs"
import { AiOutlineHeart} from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import {BiLogOut} from "react-icons/bi"
import { useState } from 'react';


export const User = () => {

  const user = false

  const [profileOpen,setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(false)
  }

  return (
    <>
      <div className ='profile'>
        {user  ? (
          <>
              <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='data:image/jpeg;base64,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' alt='images' />
            </button>
        

        {profileOpen && (
          <div className="openProfile boxItems" onClick={close}>
          <Link to ='account'>
            <div className="image">
              <div className="img">
                          <img src='data:image/jpeg;base64,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' alt='images' />
              </div>
              <div className="text">
                <h4>Dmytro Antoniuk</h4>
                <p>Kyiv ,UA</p>
              </div>
            </div>
          </Link>
          <Link to="/create">
            <button className='box'>
              <RiImageAddLine className='icon' />
              <h4>Create Post</h4>
            </button>
          </Link>
          <button className='box'>
            <BsBagCheck className='icon' />
            <h4>My Order</h4>
          </button>
          <button className='box'>
            <AiOutlineHeart className='icon' />
            <h4>WishList</h4>
          </button>
          <button className='box'>
            <GrHelp className='icon' />
            <h4>Help</h4>
          </button>
          <button className='box'>
            <BiLogOut className='icon' />
            <h4>LogOut</h4>
          </button>
          
        </div>
        )}
        </>
        ) : (
          <Link to='/login'>
          <button>My Account</button>
          </Link>
        )}
        </div>
    </>
  )
}

export default User
