import React from 'react'
import './create.css'
import back from "../../assets/images/backimage.jpg"
const Create = () => {
  return (
    <>
      <section className='newPost'>
        <div className="containerl">
            <div className="img">
            <img src={back} alt="" />
            </div>
            <form >
                <div className="inputFile flexCenter">
                    <input type="file" />
                </div>
                <input type="text" placeholder='Title' />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className='button'>Create Post</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Create
