import React from 'react';
import MainHOC from '../HOC';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkout from '../common/AddWorkout';
import WalkingItems from './WalkingItems';
import { useDispatch, useSelector } from 'react-redux';
import { getNewWorkoutWalking } from '../../store/selectors/WalkingSelectors/getNewWorkoutWalking';
import { addNewWorkautWalking } from '../../store/action/WalkingAction';
import FilterWorkout from '../common/filterWorkout'


const Walking = () => {
  
  const dispatch = useDispatch();
  const addWorkout = useSelector(getNewWorkoutWalking)
  const handleAddWorkout = (newWorkout) => {
    dispatch(addNewWorkautWalking(newWorkout))
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
          addWorkout.length ? addWorkout.map((elem) => <WalkingItems date={elem.date} km={elem.km} comment={elem.comment} key={elem.id} id={elem.id} />) : null
        } 
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default MainHOC(Walking);
