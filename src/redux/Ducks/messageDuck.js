export const FETCH_MESSAGE_IS_LOADING = "FETCH_MESSAGE_IS_LOADING";
export const FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS";
export const FETCH_MESSAGE_FAIL = "FETCH_MESSAGE_FAIL";
export const FETCH_MESSAGE_ACTION = "FETCH_MESSAGE_ACTION";

const initialState = {
    fetching: false,
    message: "",
    error: ""
};

export function messageDuck(state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGE_IS_LOADING:
            return { ...state, fetching: true, error: null };
        case FETCH_MESSAGE_SUCCESS:
            return { ...state, fetching: false, message: action.message };
        case FETCH_MESSAGE_FAIL:
            return { ...state, fetching: false, message: null, error: action.error };
        default:
            return state;
    }
}
