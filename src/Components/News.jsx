import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import { list } from '../news/newsSlice'

import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const [page, setpage] = useState(1)
  const [loading, setLoading] = useState(true)
  const { news } = useSelector((state) => state.news)
  const dispatch = useDispatch()

  const stateChange = (newNews) => {
    dispatch(list({
      news: newNews
    }))
  }

  document.title = `Mini News | ${props.category}`

  const url = `https://api.currentsapi.services/v1/latest-news?apiKey=BvrPMCHhsKvPkTVP7-wdqrFsCVNBDnB7jiLFKoN2nTKf4B1U&country=IN`

  const getData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${url}&category=${props.category}&page_number=${page}&page_size=9`)

      stateChange(res.data.news)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <>
      {loading ? <Loader /> :
       
          <div className="container mt-5" style={{ width: "100%", margin: "20px auto" }}>
            <h1 style={{textTransform:"capitalize"}}>{props.category}</h1>
            <div className="row mx-auto d-flex justify-content-center" style={{ width: "99%", margin: "20px auto" }}>
              {
                news.map((item) => (
                  <NewsCard key={item.id} link={item.url} content={item.description} imgurl={item.image} title={item.title} desc={item.description} />
                ))
              }
            </div>
            <div className='d-flex justify-content-between'>
                    <button className="btn btn-primary" onClick={()=>setpage(page>1?page-1:page)} disabled={page==1}><i class="fa-solid fa-arrow-left"></i></button>
                    <button className="btn btn-primary" onClick={()=>setpage(page=>page+1)}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
          </div>
        
      }
    </>
  )
}

export default News