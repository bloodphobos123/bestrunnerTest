import React,{useState} from "react";
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteWorkoutRun, changeWorkoutRun } from "../../store/action/RunAction";
import './style.scss'

const RunItems = ({date, km, comment, id}) => {
    const [togChange, setTogChange] = useState(false)
    const [changeKm, setChangeKm] = useState(km)
    const [changeComment, setChangeComment] = useState(comment)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteWorkoutRun(id))
    }
    const handleChangeWorkout = (e) => {
        setTogChange(!togChange)
        if(e.target.value === "save") {
            dispatch(changeWorkoutRun(id,changeKm, changeComment))
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

RunItems.propTypes = {
    date: PropTypes.string,
    km: PropTypes.number,
    comment: PropTypes.string
}

export default RunItems;
