const baseUrl = 'http://localhost:3001'

export const addHabit = habit => {
    return dispatch => {
        return fetch(baseUrl + '/api/habit_objects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({habit})
        })
        .then(response => response.json())
        .then(habit => {
            dispatch({type: "ADD_HABIT", habit})
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
        return fetch(baseUrl + '/api/habits_objects/' + id)
        .then(response => response.json())
        .then(habit => {
            return dispatch({type: "GET_HABIT", habit})})
    }
}