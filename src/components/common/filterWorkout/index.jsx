 import React,{useState} from 'react';
 import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { filterWorkoutListRun } from '../../../store/action/RunAction';


 const FilterWorkout = () => {
   const[title, setTitle] = useState('filter by')
   const dispatch = useDispatch()
   const handdleClick = (e) => {
      setTitle(e.target.value)
      dispatch(filterWorkoutListRun(e.target.value))
   }
     return (
        <UncontrolledDropdown className="mb-5">
      <DropdownToggle caret>
        {title}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handdleClick} value="descending date">descending date</DropdownItem>
        <DropdownItem onClick={handdleClick} value="ascending date">ascending date</DropdownItem>
        <DropdownItem onClick={handdleClick} value="sort by km by age">sort by km by age</DropdownItem>
        <DropdownItem onClick={handdleClick} value="sort by km descending">sort by km descending</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown> 
     );
 };

 export default FilterWorkout;
 