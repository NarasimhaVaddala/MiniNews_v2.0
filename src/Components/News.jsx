import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import { list } from '../news/newsSlice'

import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const { news } = useSelector((state) => state.news)
  const dispatch = useDispatch()

  const stateChange = (newNews) => {
    dispatch(list({
      news: [...news, ...newNews]
    }))
  }

  const url = `https://api.currentsapi.services/v1/latest-news?apiKey=WoUQpS7tVvjJFJTliUQPfztgN4vsWO3kht6ZhbnCc7PPYzWI&country=IN`

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
      {loading && page === 1 ? <Loader /> :
        <InfiniteScroll
          dataLength={news.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container mt-5" style={{ width: "100%", margin: "20px auto" }}>
            <div className="row mx-auto" style={{ width: "99%", margin: "20px auto" }}>
              {
                news.map((item) => (
                  <NewsCard key={item.id} content={item.description} imgurl={item.image} title={item.title} desc={item.description} />
                ))
              }
            </div>
          </div>
        </InfiniteScroll>
      }
    </>
  )
}

export default News
