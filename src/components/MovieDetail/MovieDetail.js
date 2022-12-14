import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchAsyncMovieOrSeriesDetails,
  getSelectedMovieOrSeriesDetail,
  removeMovieOrSeriesDetail
}
  from '../../features/movies/movieSlice'

import './MovieDetail.scss'

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { imdbID } = useParams()
  const data = useSelector(getSelectedMovieOrSeriesDetail)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriesDetails(imdbID))

    return () => {
      // if this clean up function is not present then when we go back from details page
      // to the home page and selcted any other show, details page displays details of prev selected show
      // for few second before new data is fetched... we dont wont user to have this bad experince
      dispatch(removeMovieOrSeriesDetail())
    }
  }, [dispatch, imdbID])

  return (
      <div id = "detailsPage" className="movie-section" style={{ backgroundImage: `url(${data.Poster})` }}>
      {Object.keys(data).length === 0
        ? (
        <div><i className="fas fa-spinner"></i></div>
          )
        : (
        <>
          <div className="section-left">
                <div className="section-right disabled">
                  <img src={data.Poster} alt={data.Title} />
                </div>
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{' '}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>

        </>
          )}
    </div>
  )
}

export default MovieDetail
