import React from 'react';
import MainHOC from '../HOC';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkout from '../common/AddWorkout';
import FilterWorkout from '../common/filterWorkout';
import { useDispatch, useSelector } from 'react-redux';
import { getNewWorkoutCycling } from '../../store/selectors/CyclingSelectors/getNewWorkoutCycling';
import { addNewWorkautCycling } from '../../store/action/CyclingAction';
import CyclingItems from './CyclingItems';

const Cycling = () => {
  
  const dispatch = useDispatch();
  const addWorkout = useSelector(getNewWorkoutCycling)
  const handleAddWorkout = (newWorkout) => {
    dispatch(addNewWorkautCycling(newWorkout))
  }
  return(
    <>
      <AddWorkout
         handleAddWorkout = {handleAddWorkout}
      />
      <FilterWorkout />
      <div className="table_wrapper">
    <Table dark >
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
          addWorkout.length ? addWorkout.map((elem) => <CyclingItems date={elem.date} km={elem.km} comment={elem.comment} key={elem.id} id={elem.id} />) : null
        } 
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default MainHOC(Cycling);
