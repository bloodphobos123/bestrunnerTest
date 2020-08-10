import { ADD_WORKOUT_CYCLING, DELETE_WORKOUT_CYCLING, CHANGE_WORKOUT_CYCLING } from "../../actionType/CyclingActionType";

export const addNewWorkautCycling = (newWorkout) => ({
    type: ADD_WORKOUT_CYCLING,
    newWorkout
});

export const deleteWorkoutCycling = (id) => ({
    type: DELETE_WORKOUT_CYCLING,
    id
})

export const changeWorkoutCycling = (id, km, comment) => ({
    type: CHANGE_WORKOUT_CYCLING,
    id,
    km,
    comment
})

