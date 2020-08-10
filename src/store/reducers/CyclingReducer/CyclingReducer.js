import { ADD_WORKOUT_CYCLING, DELETE_WORKOUT_CYCLING, CHANGE_WORKOUT_CYCLING } from "../../actionType/CyclingActionType";
import { FILTER_WORKOUT_RUN } from "../../actionType/RunActionType";

const initialState = {
    allWorkout:[],
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ADD_WORKOUT_CYCLING: {
            return {...state,allWorkout: [...state.allWorkout,action.newWorkout]}
        }
        case DELETE_WORKOUT_CYCLING: {
            const newWorkoutLst = state.allWorkout
                                        .filter((elem) => elem.id !== action.id)
            return{...state,allWorkout: newWorkoutLst}
        } 
        case CHANGE_WORKOUT_CYCLING: {
            const newChangeWorkoutList = state.allWorkout.map((elem) => (
                {
                    ...elem,
                    km: elem.id === action.id ? action.km : elem.km,
                    comment: elem.id === action.id ? action.comment: elem.comment
                }
            ))
            return{...state,allWorkout: newChangeWorkoutList}
        }
        case FILTER_WORKOUT_RUN: {
            if(action.keyWord === "sort by km descending") {
                const filterWorkout = state.allWorkout.sort((a,b) =>  a.km < b.km ? 1 : -1)
                return{...state, allWorkout: [...filterWorkout]}
            }  if (action.keyWord === "sort by km by age") {
                const filterWorkout = state.allWorkout.sort((a,b) => a.km > b.km ? 1 : -1)
                return{...state, allWorkout: [...filterWorkout]}
            } if(action.keyWord === "descending date") {
                const filterWorkout = state.allWorkout.sort((a,b) => {
                    return new Date(b.date) - new Date(a.date)
                })
                return{...state, allWorkout: [...filterWorkout]}
            } if(action.keyWord === "ascending date") {
                const filterWorkout = state.allWorkout.sort((a,b) => {
                    return new Date(b.date) < new Date(a.date)
                })
                return{...state, allWorkout: [...filterWorkout]}
            }
            
            break
        }
        default: return state
    }
}