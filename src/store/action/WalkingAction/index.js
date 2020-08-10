import { ADD_WORKOUT_WALKING, DELETE_WORKOUT_WALKING, CHANGE_WORKOUT_WALKING } from "../../actionType/WalkingActionType";

export const addNewWorkautWalking = (newWorkout) => ({
    type: ADD_WORKOUT_WALKING,
    newWorkout
});

export const deleteWorkoutWalking = (id) => ({
    type: DELETE_WORKOUT_WALKING,
    id
})

export const changeWorkoutWalking = (id, km, comment) => ({
    type: CHANGE_WORKOUT_WALKING,
    id,
    km,
    comment
})

