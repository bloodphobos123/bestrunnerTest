import { ADD_WORKOUT_RUN, DELETE_WORKOUT_RUN, CHANGE_WORKOUT_RUN, FILTER_WORKOUT_RUN } from "../../actionType/RunActionType";

export const addNewWorkautRun = (newWorkout) => ({
    type: ADD_WORKOUT_RUN,
    newWorkout
});

export const deleteWorkoutRun = (id) => ({
    type: DELETE_WORKOUT_RUN,
    id
})

export const changeWorkoutRun = (id, km, comment) => ({
    type: CHANGE_WORKOUT_RUN,
    id,
    km,
    comment
})

export const filterWorkoutListRun = (keyWord) => ({
    type: FILTER_WORKOUT_RUN,
    keyWord
})