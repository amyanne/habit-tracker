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
        
        case "GET_COMPLETE_HABITS":
            return {
                ...state, habits: action.habits
            }
        default:
            return state;
    }
}

export default completedHabitsReducer;