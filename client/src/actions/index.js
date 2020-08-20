const baseUrl = 'http://localhost:3001'

export const addHabit = habit => {
    return dispatch => {
        return fetch(baseUrl + '/api/habit_objects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habit)
        })
        .then(response => response.json())
        
        .then(habit => {
             dispatch({type: "ADD_HABIT", habit})
        })
    }
}
export const addCompletedHabit = completedHabit => {
    let habit = {completed_on: completedHabit.completedOn, habit_object_id: completedHabit.habitObjectId}
    
    return dispatch => {
        return fetch(baseUrl + '/api/completed_habits', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habit)
        })
        //.then(response => response.json())
        
        .then(completedHabit => {
             dispatch({type: "ADD_COMPLETED_HABIT", completedHabit})
        })
    }
}
export const getCompletedHabits = () => {

    // add async 
    return async dispatch => {
        return await fetch(baseUrl + '/api/completed_habits')
        .then(response => response.json())
        .then(completedHabits => {
            return dispatch({ type: "GET_COMPLETED_HABITS", completedHabits })
        })

    }
    
}

export const getHabits = () => {
    return dispatch => {
        return fetch(baseUrl + '/api/habit_objects')
        .then(response => response.json())
        .then(habits => {
            return dispatch({ type: "GET_HABITS", habits })
        })
    }
}

export const getHabit = id => {
    return dispatch => {
        return fetch(baseUrl + '/api/habit_objects/' + id)
        .then(response => response.json())
        .then(habit => {
            return dispatch({type: "GET_HABIT", habit})})
    }
}