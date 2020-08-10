import React from 'react';
import MainHOC from '../HOC';
import { Table } from 'reactstrap';
import FilterWorkout from '../common/filterWorkout'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkout from '../common/AddWorkout';
import { useDispatch, useSelector } from 'react-redux';
import {getNewWorkoutSkiing} from '../../store/selectors/SkiingSelectors/getNewWorkoutSkiing';
import { addNewWorkautSkiing } from '../../store/action/SkiingAction/index';
import SkiingItems from './SkiingItems';

const Skiing = () => {

  const dispatch = useDispatch();
  const addWorkout = useSelector(getNewWorkoutSkiing)
  const handleAddWorkout = (newWorkout) => {
    dispatch(addNewWorkautSkiing(newWorkout))
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
          addWorkout.length ? addWorkout.map((elem) => <SkiingItems date={elem.date} km={elem.km} comment={elem.comment} key={elem.id} id={elem.id} />) : null
        }
       
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default MainHOC(Skiing);
