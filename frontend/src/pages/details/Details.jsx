import React, { useEffect } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import { news } from '../../assets/data/data'
import { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
export const Details = () => {
  const {id} = useParams()
  const[newsimg,setNewsimg] = useState(null)

  useEffect(() => {
    let newsimg = news.find((newsimg) => newsimg.id === parseInt(id))
    if(newsimg){
      setNewsimg(newsimg) 
    }
  }, []) 

  return (
    <>
      {newsimg ? (
        <section className='singlePost'>
          <div className="container">
            <div className="left">
              <img src={newsimg.cover} alt="" />
            </div>
            <div className="right">
                <div className="buttons">
                    <button className='button'>
                        <BsPencilSquare />
                    </button>
                    <button className='button'>
                        <AiOutlineDelete />
                    </button>
                </div>
                <h1>{newsimg.title}</h1>
                <p>{newsimg.desc}</p>
                <p>Гвардійська авіація  також продовжує нищити ворога. Їхніми діями знищено близько 15 загарбників та нанесено ураження по військовій техніці ворога. Також минулий тиждень був результативним для наших мобільних вогневих груп та підрозділів протиповітряної оборони. Під час повітряних атак ворога нацгвардійці приземлили 6 повітряних цілей: 3 – БпЛА «Шахед-136»,  1 – БпЛА «Орлан-10», «Ланцет» та «Zala».</p>
            </div>
          </div>
        </section>  
      ) : null}
    </>
  )
}

export default Details