import React from 'react';
import MainHOC from '../HOC';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkout from '../common/AddWorkout';
import { useDispatch, useSelector } from 'react-redux';
import { getNewWorkoutRun } from '../../store/selectors/RunSelectors/getNewWorkautRun';
import { addNewWorkautRun } from '../../store/action/RunAction';
import RunItems from './RunItems';
import FilterWorkout from '../common/filterWorkout';

const Run = () => {
  const dispatch = useDispatch();
  const addWorkout = useSelector(getNewWorkoutRun)
  const handleAddWorkout = (newWorkout) => {
    dispatch(addNewWorkautRun(newWorkout))
  }
  return(
    <>
      <AddWorkout
        handleAddWorkout = {handleAddWorkout}
      />
      <FilterWorkout />
      <div className="table_wrapper">
    <Table dark>
      <thead>
        <tr>
          <th>Date</th>
          <th>KM</th>
          <th>comment</th>
          <th>delete</th>
          <th>change</th>
        </tr>
      </thead>
      <tbody>
        {
          addWorkout.length ? addWorkout.map((elem) => <RunItems date={elem.date} km={elem.km} comment={elem.comment} key={elem.id} id={elem.id} />) : null
        }
       
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default MainHOC(Run);
