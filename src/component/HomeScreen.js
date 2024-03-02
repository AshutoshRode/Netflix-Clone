import React from 'react';
import "../css/HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import userrequests from '../Request';

function HomeScreen() {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals} />

      <Row title="Tending Now" fetchURL={userrequests.fetchTrending} />

      <Row title="Top Rated" fetchURL={userrequests.fetchTopRated} />

      <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies} />

      <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies} />

      <Row title="Animation" fetchURL={userrequests.fetchAnimations} />

      <Row title="Mystery" fetchURL={userrequests.fetchMystery} />
    </div>
  )
}

export default HomeScreen
