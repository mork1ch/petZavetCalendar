let Date = new Date();

const defaultState = {
	yearNow: Date.getFullYear(),
	month: Date.getMonth(),
	dayNowNumber: Date.getDate(),
};

const MONTH_NEXT = "MONTH_NEXT";

export const dateReducer = (state = defaultState, action) => {
	switch (action.type) {
		case MONTH_NEXT:
			return { ...state, month: state.month + 1 };
		default:
			return state;
	}
};

export const date = (payload) => ({ type: MONTH_NEXT, payload });
