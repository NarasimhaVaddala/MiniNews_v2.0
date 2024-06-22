import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { brief } from '../counter/counterSlice'

const NewsCard = (props) => {
  const { imgurl, title, content } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const truncateText = (text, length) => {
    if (!text) return ''
    if (text.length > length) {
      return text.substring(0, length) + '...'
    }
    return text
  }

  const statechange = () => {
    dispatch(brief({
      imgurl: props.imgurl,
      content: props.desc,
      title: props.title
    }))
    console.log("done", { imgurl, title, content });
  }

  return (
    <div className="card  col-md-3 mx-2 my-3" style={{width:"20rem"}}>
      <img src={props.imgurl || 'default_image_url.jpg'} className="card-img-top mt-2" alt="News Image" style={{height:"40%"}} />
      <div className="card-body">
        <h5 className="card-title">{truncateText(props.title, 50)}</h5>
        <p className="card-text">{truncateText(props.desc, 150)}</p>
        <Link to="/brief" onClick={()=>statechange()} className="btn btn-primary">Read More</Link>
         </div>
    </div>
  )
}

export default NewsCard
