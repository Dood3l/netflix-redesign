import React from 'react'
import './Movies.css';
import Nav from '../src/components/Nav.js'
import { counter } from '@fortawesome/fontawesome-svg-core';

function Movies() {
  return (
    <>
    <Nav />

    {/* header */}
    <div className='banner'>
        <div className='banner_items'>
            <h1 className='banner_title'>Snowfall</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>Add to Favorites</button>
            </div>
            <div className='banner_description'>
            "Snowfall" is a drama set against the infancy of the crack cocaine epidemic in Los Angeles 
            and its ultimate radical impact on the culture as we know it.
            </div>
        </div>
        <div className='banner--fadeBottom'></div>
    </div>

    {/* larger movie row */}
    <div className='movie_row'>
        <h2>
            Netflix Originals
        </h2>
        <div className='row_posters'>
            <img className='row_poster large_row' src='/moviesimages/howtotraindragon.jpg' alt='dragon'/> 
                <p className='review review--blur'>
                This is my favorite movie of all time! I never get bored of it, the strong messages and emotional moments between characters makes it even more loveable.
                </p> 
            <img className='row_poster large_row' src='/moviesimages/hometeam.jpg' alt='hometeam'/>
                <p className='review review--blur'>
                Ugh, so dumb. I did not like this move. Don't bother.
                </p>  
            <img className='row_poster large_row' src='/moviesimages/sorrytobotheryou.png' alt='sorrytobotheryou'/>
                <p className='review review--blur'>
                By far MOVIE OF THE YEAR to me.  The movie is entertaining and creative.
                </p>  
            <img className='row_poster large_row' src='/moviesimages/shrek.png' alt='shrek'/>
                <p className='review review--blur'>
                What a classic! I am so glad this is on Netflix!!!
                </p>
            <img className='row_poster large_row' src='/moviesimages/thebubble.jpg' alt='thebubble'/>
                <p className='review review--blur'>
                Amazingly funny satirical drama. Worth a watch.
                </p>
            <img className='row_poster large_row' src='/moviesimages/fourbrothers.jpeg' alt='fourbrothers'/>
                <p className='review review--blur'>
                This was a great film, gritty Detroit, at it's best, an all-American tough guy movie.
                </p>
            <img className='row_poster large_row' src='/moviesimages/therental.jpg' alt='therental'/>
                <p className='review review--blur'>
                Very few movies kept audiences so engaged from starting to end that even after the end everyone keep guessing what exactly happened as mystery remained unfolded.
                </p>
            <img className='row_poster large_row' src='/moviesimages/blow.png' alt='blow'/>
                <p className='review review--blur'>
                Blow is based on the international drug trade of the 1970s when at the time, Pablo Escobar was the headline news. 
                </p>
            <img className='row_poster large_row' src='/moviesimages/adamproject.png' alt='adamproject'/> 
                <p className='review review--blur'>
                Pretty much what everyone else said below me, this is beautifully well done! 
                </p>
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

    {/* coming soon */}
    <div className='movie_row'>
        <h2>
            Coming Soon
        </h2>
        <div className='row_posters'>
        <img className='row_poster large_row' src='/moviesimages/whitehot.png' alt='whitehot'/>
            <img className='row_poster large_row' src='/moviesimages/chooseordie.png' alt='chooseordie'/>
            <img className='row_poster large_row' src='/moviesimages/heirsland.png' alt='heirsland'/>
            <img className='row_poster large_row' src='/moviesimages/onepiece.jpg' alt='onepiece'/>
            <img className='row_poster large_row' src='/moviesimages/themanofgod.png' alt='themanofgod'/>
            <img className='row_poster large_row' src='/moviesimages/thelegomovie.png' alt='lego'/>
            <img className='row_poster large_row' src='/moviesimages/thegrayman.png' alt='grayman'/>
            <img className='row_poster large_row' src='/moviesimages/bossbaby.jpg' alt='bossbaby'/>
            <img className='row_poster large_row' src='/moviesimages/silvertonsiege.jpg' alt='adamproject'/>
        </div>
    </div>
    </>
  )
}

export default Movies