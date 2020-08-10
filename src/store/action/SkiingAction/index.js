import { ADD_WORKOUT_SKIING, DELETE_WORKOUT_SKIING, CHANGE_WORKOUT_SKIING } from "../../actionType/SkiingActionType";

export const addNewWorkautSkiing = (newWorkout) => ({
    type: ADD_WORKOUT_SKIING,
    newWorkout
});

export const deleteWorkoutSkiing = (id) => ({
    type: DELETE_WORKOUT_SKIING,
    id
})

export const changeWorkoutSkiing = (id, km, comment) => ({
    type: CHANGE_WORKOUT_SKIING,
    id,
    km,
    comment
})

