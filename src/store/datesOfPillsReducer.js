const defaultState = {
    datesOfPills: []
}

const ADD_NEW_DATE_PILLS = 'ADD_NEW_DATE_PILLS'

export const datesOfPillsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_DATE_PILLS:
            return { ...state, datesOfPills: [...state.datesOfPills, action.payload] }
        default:
            return state
    }
}

export const addNewDatePills = (payload) => ({ type: ADD_NEW_DATE_PILLS, payload })