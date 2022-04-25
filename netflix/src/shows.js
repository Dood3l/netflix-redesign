import React from 'react'
import './Movies.css';

// import '/shows.css'
import Nav from '../src/components/Nav.js'
import {Link} from 'react-router-dom';


function Shows() {
  return (
    <>
    {/* <Nav  /> */}
   
    

    {/* header */}
    <div className='banner1'>

        <div className='backButton'>
        <Link to="/AccountLoad"><img src='/accountimages/goBackButton.png' alt='back button'/></Link>
        </div>  


        <div className='banner_items'>
            <h1 className='banner_title'>The TheCrown</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>Add to Favorites</button>
            </div>
            {/* <div className='banner_description'>
            "Halo is an American military science fiction television series developed by Kyle Killen and Steven Kane for the streaming service Paramount+, loosely based on the video game franchise of the same name. Produced by Showtime Networks, 343 Industries, Amblin Television, One Big Picture, and Chapter Eleven, the series follows a 26th-century war between the United Nations Space Command and the Covenant, a theocratic-military alliance of several advanced alien races determined to eradicate the human race."
            </div> */}
        </div>
        <div className='banner--fadeBottom'></div>
    </div>

    {/* larger movie row */}
    <div className='movie_row'>
        <h2>
            Up Coming Tv Shows
        </h2>
        <div className='row_posters'>
        <img className='row_poster large_row' src='/showimages/GoodGirls.jpeg' alt='dragon'/>
            <img className='row_poster large_row' src='/showimages/GreysAnatomy.jpg' alt='Grey'/>
            <img className='row_poster large_row' src='/showimages/MoneyHeist.jpg' alt='moneyhesit'/>
            <img className='row_poster large_row' src='/showimages/Outlander.avif' alt='shrek'/>
            <img className='row_poster large_row' src='/showimages/Shameless.jpeg' alt='thebubble'/>
            <img className='row_poster large_row' src='/showimages/TheBlacklist.jpg' alt='fourbrothers'/>
            <img className='row_poster large_row' src='/showimages/TheCookOfCastamar.jpeg' alt='therental'/>
            <img className='row_poster large_row' src='/showimages/TheCrown.jpeg' alt='blow'/>
            <img className='row_poster large_row' src='/showimages/TheWitcher.png' alt='adamproject'/>
        </div>
    </div>

    {/* trending now */}
    <div className='movie_row'>
        <h2>
            Trending Now
        </h2>
        <div className='row_posters'>
            <img className='row_poster' src='/showimages/halo.jpeg' alt='trustnoone'/>
            <img className='row_poster' src='/showimages/startrek.jpeg' alt='inception'/>
            <img className='row_poster' src='/showimages/the-offer.jpeg' alt='dontlookup'/>
            <img className='row_poster' src='/showimages/ms-marvel.jpeg' alt='uncutgems'/>
            <img className='row_poster' src='/showimages/obi-wan.jpeg' alt='cloudywithchanceofmeatballs'/>
            <img className='row_poster' src='/showimages/hsd.jpeg' alt='rush'/>
            <img className='row_poster' src='/showimages/manifest.jpeg' alt='manifest'/>
            <img className='row_poster' src='/showimages/girlfriends.jpeg' alt='girlfriends'/>
            <img className='row_poster' src='/showimages/ginnyandgeorgia.jpeg' alt='ginnyandgeorgia'/>
        </div>   
    </div>
    </>
  )
}

export default Shows