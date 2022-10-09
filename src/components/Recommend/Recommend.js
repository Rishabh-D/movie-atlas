import React, { useRef } from 'react'
import { recommendations } from '../../common/apis/RecommendedShows'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import { Settings } from '../../common/settings.js'
import './Recommend.scss'
const Recommend = () => {
  const sliderRef = useRef()
  const shows = recommendations.map(show => {
    return <MovieCard key={show.id} data={show}></MovieCard>
  })
  const onWheelSlider = (e) => {
    // console.log("inside loadad",e.deltaX)
    if (!sliderRef.current) return

    if (e.deltaX > 0) {
      sliderRef.current.slickNext()
    } else if (e.deltaX < 0) {
      sliderRef.current.slickPrev()
    }
  }

  return (
        <div onWheel={(e) => onWheelSlider(e)}>
            <Slider ref = {sliderRef} {...Settings}>{shows}</Slider>
        </div>
  )
}

export default Recommend
