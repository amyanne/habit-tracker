const initialState = {
    habits: [],
    habit: {},
}

const habitsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_HABIT":
            return {
                ...state,
                habits: [...state.habits, action.habit]
            }

        case "GET_HABITS":
             return {
                ...state, habits: action.habits
            }
        case "GET_HABIT":
            return {
                ...state, habit: action.habit
                
            }

        
        default:
            return state;
    }
}

export default habitsReducer;