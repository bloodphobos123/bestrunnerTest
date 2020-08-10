import React,{ useState } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';

const MainForm = () => {
const[nameVal, setNameVal] = useState('')
const[lastVal, setLastVal] = useState('')
const[errTog, setErrTog] = useState(false)
const history = useHistory()

const handleSubmit = (e) => {
  e.preventDefault()
  if(!nameVal.length && !lastVal.length) {
    return setErrTog(true)
  } else {
    const newUser = {
      name: nameVal,
      lastname: lastVal
    }
    localStorage.setItem("user",JSON.stringify(newUser))
    history.push('/run')
  }
}
const handleChangeName = (e) => {
  setNameVal(e.target.value)
}
const handleChangeLastName = (e) => {
  setLastVal(e.target.value)
}
  return (
    <div className="mainForm">
    <div className="athlete_data">Athlete data</div>
      <form className="mainForm__wrap" onSubmit={handleSubmit}>
        <input
          type="text"
          className="mainForm__inp"
          placeholder="your name"
          value={nameVal}
          onChange={handleChangeName}
        />
        <input
          type="text"
          className="mainForm__inp"
          placeholder="your lastname"
          value={lastVal}
          onChange={handleChangeLastName}
        />
        <input type="submit" value="let's go" className="mainForm__btn"/>
        <div
          className="error__text"
          style={{display: errTog ? "block" : "none"}}
        >
          enter first and last name
        </div>
      </form>
    </div>
  );
};

export default MainForm;
