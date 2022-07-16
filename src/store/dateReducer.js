var now = new Date();

const defaultState = {
	yearNow: now.getFullYear(),
	year: now.getFullYear(),
	monthNow: now.getMonth(),
	month: now.getMonth(),
	day: now.getDate(),
	weekDay: now.getDay(),
};

const MONTH_SET_NEXT = "MONTH_NEXT";
const MONTH_SET_PREV = "MONTH_SET_PREV";

export const dateReducer = (state = defaultState, action) => {
	switch (action.type) {
		case MONTH_SET_NEXT:
			return { ...state, month: state.month + 1 };
		case MONTH_SET_PREV:
			return { ...state, month: state.month - 1 };
		default:
			return state;
	}
};

export const monthSetNext = (payload) => ({ type: MONTH_SET_NEXT, payload });
export const monthSetPrev = (payload) => ({ type: MONTH_SET_PREV, payload });
