import React, {useState} from 'react';
import './style.scss';
import { Button } from 'reactstrap';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types';
var datef = require('datef');

const AddWorkout = ({handleAddWorkout}) => {
    const [km, setKm] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const newWorkout = {
            date: datef('dd.MM.YYYY'),
            km: +km,
            comment: comment,
            id: nanoid()
        }
        if(km) {
            handleAddWorkout(newWorkout)
            setKm('')
            setComment('')
        }
    }

    const handleChange = (value) => {
        if (!isNaN(+value) && value.length < 6) setKm(value);
    }

    return (
        <form className="addWorkout" onSubmit={handleSubmit}>
            <div className="addWorkout__section">
                <div className="addWorkout-title">Date</div>
                <div>{datef('dd.MM.YYYY')}</div>
            </div>
            <div className="addWorkout__section">
                <div className="addWorkout-title">KM</div>
                <div className="addWorkoutKmInp_section">
                <input
                    type="text"
                    value={km}
                    onChange={(e) => handleChange(e.target.value)}
                    className="addWorkoutKmInp"
                    placeholder="0.1"
                />
                <div className="addWorkoutKmInp_text">KM</div>
                </div>
            </div>
            <div className="addWorkout__section textarea_P">
                <div className="addWorkout-title">comment</div>
                <textarea
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}
                     placeholder="comment"
                />
            </div>
            <div className="addWorkout__section">
            <div className="addWorkout-title">add workout</div>
            <Button
                color="success"
                type="submit"
            >
                add workout
            </Button>
            </div>
        </form>
    );
};

AddWorkout.propTypes  = {
    onClick: PropTypes.func
}

export default AddWorkout;
