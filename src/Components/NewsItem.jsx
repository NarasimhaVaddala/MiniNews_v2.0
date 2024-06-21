import React from 'react'
import { useSelector } from 'react-redux'

const NewsItem = (props) => {
  const { imgurl, title, content } = useSelector((state) => state.counter)

  return (
    <div className='container'>
      <h1 className='mt-5'>{title}</h1>
      <hr />
      <div className='row mt-5'>
        <div className='col-md-6 mb-3'>
          <img src={imgurl} alt='nop' className='img-fluid' style={{ maxHeight: "100%", width: "100%" }} />
        </div>
        <div className='col-md-6' style={{ textAlign: "justify", lineHeight: "2" }}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default NewsItem
