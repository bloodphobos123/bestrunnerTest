import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';

const Home = () => {
  const [info, setInfo] = useState({})
  const history = useHistory()
  const location = useLocation()
  
  useEffect(()=>{
    console.log(localStorage.getItem('user'))
    const nameLastname = localStorage.getItem('user')
    const getInfoAboutAthlet = nameLastname ? JSON.parse(localStorage.getItem('user')) : {}
    setInfo(getInfoAboutAthlet)
  },[])

  const handleExit = () => {
    history.push('/')

  }

  const handleClickCycling = () => {
    history.push('/cycling')
  }

  const handleClickRun = () => {
    history.push('/run')
  }

  const handleClickSkiing = () => {
    history.push('/skiing')
  }

  const handleClickWalking = () => {
    history.push('/walking')
  }

  return(
    <>
    <div className="navSection">
    <div className="Athlete__information">
      <div className="Athlete__information-name">
        name:
        <span className="Athlete__information_content">{` ${info.name}`}</span></div>
      <div className="Athlete__information-lastname">
        lastname:
        <span className="Athlete__information_content">{` ${info.lastname}`}</span></div>
    </div>
    <Button color="primary" size="lg" active onClick={handleExit}>Exit</Button>
    </div>
    <div>
      <div className="sport__section">
        <button
          type="button"
          className="cycling"
          onClick={handleClickCycling}
          style={{opacity: location.pathname === "/cycling" ? 1 : 0.5 }}
        >
          Cycling
        </button>
        <button
          type="button"
          className="run"
          onClick={handleClickRun}
          style={{opacity: location.pathname === "/run" ? 1 : 0.5 }}
        >
          Run
        </button>
        <button
          type="button"
          className="skiing"
          onClick={handleClickSkiing}
          style={{opacity: location.pathname === "/skiing" ? 1 : 0.5 }}
        >
          Skiing
        </button>
        <button
          type="button"
          className="walking"
          onClick={handleClickWalking}
          style={{opacity: location.pathname === "/walking" ? 1 : 0.5 }}
        >
          Walking
        </button>
      </div>
    </div>
    </>
  );
};

export default Home;
