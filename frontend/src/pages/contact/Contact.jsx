import React from 'react'
import back from "../../assets/images/backimage.jpg"
const Contact = () => {
  return (
    <>
      <section className='singlePost'>
          <div className="container">
          <img src={back} alt="" />
            <div className="left">
             
            </div>
            <div className="right">
                <h1>Контакти</h1>
                <h1>Телефон довіри</h1>
                <p>Національної гвардії України (044) 249-27-82, (044) 226-22-52</p>
                <p>Гаряча телефонна лінія Міністра внутрішніх справ України для військовослужбовців Національної гвардії України 15-36</p>
                <h1>Головне управління Національної гвардії України</h1>
                <p>тел.: (044) 249-41-12, 249-41-13,</p>
                <p>факс: (044) 249-41-97</p>
                <p>Електронна адреса: gu@ngu.gov.ua</p>
            </div>
          </div>
        </section>  
    </>
  )
}

export default Contact
