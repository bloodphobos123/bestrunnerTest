import React from 'react';
import Home from '../Home';
import './style.scss'

const MainHOC = (Component) => {
  const hoc = (props) => {
    return (
      <div className="Home">
      <Home {...props}/>
      <div className="wrapComponent">
        <Component {...props} />
      </div>
    </div>
    )
  }
  return  hoc

};

export default MainHOC;
