const initialState = {
    completedHabits: [],
    completedHabit: {}
}
const completedHabitsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case "ADD_COMPLETED_HABIT":
            return {
                ...state,
                completedHabits: [...state.completedHabits, action.completedHabit]
            }
        
        case "GET_COMPLETED_HABITS":
            
            return {
                ...state, completedHabits: action.completedHabits
            }
        default:
            return state;
    }
}

export default completedHabitsReducer;