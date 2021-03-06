import React,{useState} from "react";
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import './style.scss'
import { changeWorkoutSkiing, deleteWorkoutSkiing } from "../../store/action/SkiingAction";

const SkiingItems = ({date, km, comment, id}) => {
    const [togChange, setTogChange] = useState(false)
    const [changeKm, setChangeKm] = useState(km)
    const [changeComment, setChangeComment] = useState(comment)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteWorkoutSkiing(id))
    }
    const handleChangeWorkout = (e) => {
        setTogChange(!togChange)
        if(e.target.value === "save") {
            dispatch(changeWorkoutSkiing(id,changeKm, changeComment))
        }
    }
    const handleChangeKm =(e) => {
        setChangeKm(e.target.value)
    }
    return (
        <tr>
        <th scope="row">{date}</th>
        <td>{togChange ? <input type="text" value={changeKm} onChange={handleChangeKm} /> : km }</td>
        <td>{togChange ? <textarea value={changeComment} onChange={(e) => setChangeComment(e.target.value)} />: comment}</td>
        <td>
            <Button
                onClick={handleDelete}
                color="danger">
                    delete        
            </Button>
            </td>
        <td>
            <Button
                color="secondary"
                onClick={handleChangeWorkout}
                value={togChange ? "save":'change'
            }
            >
                    {togChange ? "save":'change'}
            </Button>
            </td>
      </tr>
    )
};

SkiingItems.propTypes = {
    date: PropTypes.string,
    km: PropTypes.number,
    comment: PropTypes.string
}

export default SkiingItems;

