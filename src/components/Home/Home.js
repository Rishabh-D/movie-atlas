import React from 'react'
import MovieListing from '../MovieListing/MovieListing'
// removed fetchMovies function
import { useSelector } from 'react-redux'
import { getSearchText } from '../../features/movies/movieSlice'
import { useHistory } from 'react-router-dom'

const Home = () => {
  // const dispatch = useDispatch();
  const history = useHistory()
  const searchText = useSelector(getSearchText)
  return (
        <>
            { searchText === ''
              ? (
                  history.replace('/')
                )

              : (
                    <div className='banner-img'>
                        <MovieListing searchText={searchText}></MovieListing>
                    </div>
                )
            }
        </>
  )
}

export default Home
