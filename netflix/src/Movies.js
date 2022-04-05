import React from 'react'
import './Movies.css';

function Movies() {
  return (
    <>
    <div className='movie_row'>
        <h2>
            Netflix Originals
        </h2>
        <div className='row_posters'>
            <img className='row_poster_large_row' src='/moviesimages/adamproject.png' alt='adamproject'/>
            <img className='row_poster_large_row' src='/moviesimages/shrek.png' alt='shrek'/>
            <img className='row_poster_large_row' src='/moviesimages/thebubble.png' alt='thebubble'/>
            <img className='row_poster_large_row' src='/moviesimages/fourbrothers.jpeg' alt='fourbrothers'/>
            <img className='row_poster_large_row' src='/moviesimages/therental.jpg' alt='therental'/>
            <img className='row_poster_large_row' src='/moviesimages/blow.png' alt='blow'/>
            <img className='row_poster_large_row' src='/moviesimages/howtotraindragon.jpg' alt='dragon'/>
            <img className='row_poster_large_row' src='/moviesimages/hometeam.jpg' alt='hometeam'/>
            <img className='row_poster_large_row' src='/moviesimages/sorrytobotheryou.png' alt='sorrytobotheryou'/>
        </div>
    </div>

    {/* trending now */}
    <div className='movie_row'>
        <h2>
            Trending Now
        </h2>
        <div className='row_posters'>
            <img className='row_poster' src='/moviesimages/trustno1.png' alt='trustnoone'/>
            <img className='row_poster' src='/moviesimages/inception.png' alt='inception'/>
            <img className='row_poster' src='/moviesimages/dontlookip.jpg' alt='dontlookup'/>
            <img className='row_poster' src='/moviesimages/uncutgems.png' alt='uncutgems'/>
            <img className='row_poster' src='/moviesimages/cloudy.png' alt='cloudywithchanceofmeatballs'/>
            <img className='row_poster' src='/moviesimages/rush.jpg' alt='rush'/>
            <img className='row_poster' src='/moviesimages/captainnova.jpg' alt='captainnova'/>
            <img className='row_poster' src='/moviesimages/21bridges.jpg' alt='21bridges'/>
            <img className='row_poster' src='/moviesimages/survivingparadise.jpg' alt='survivingparadise'/>
        </div>   
    </div>

    {/* top rated now */}
    {/* <div className='movie_row'>
        <h2>
            Trending Now
        </h2>
        <div className='row_posters'>
            <img className='row_poster' src='/moviesimages/trustno1.png' alt='trustnoone'/>
            <img className='row_poster' src='/moviesimages/inception.png' alt='inception'/>
            <img className='row_poster' src='/moviesimages/dontlookip.png' alt='dontlookup'/>
            <img className='row_poster' src='/moviesimages/uncutgems.png.jpeg' alt='uncutgems'/>
            <img className='row_poster' src='/moviesimages/cloudy.png' alt='cloudywithchanceofmeatballs'/>
            <img className='row_poster' src='/moviesimages/rush.jpg' alt='rush'/>
            <img className='row_poster' src='/moviesimages/captainnova.jpg' alt='captainnova'/>
            <img className='row_poster' src='/moviesimages/21bridges.jpg' alt='21bridges'/>
            <img className='row_poster' src='/moviesimages/survivingparadise.jpg' alt='survivingparadise'/>
        </div>   
    </div> */}

    </>
  )
}

export default Movies