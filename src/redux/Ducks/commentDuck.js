export const commentConst = {
    FETCH_COMMENTS_ACTION: "FETCH_COMMENTS_ACTION",
    FETCH_COMMENTS_IS_LOADING: "FETCH_COMMENTS_IS_LOADING",
    FETCH_COMMENTS_SUCCESS: "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAIL: "FETCH_COMMENTS_FAIL",
    CREATE_COMMENT_ACTION: "CREATE_COMMENT_ACTION",
    CREATE_COMMENT_IS_LOADING: "CREATE_COMMENT_IS_LOADING",
    CREATE_COMMENT_SUCCESS: "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_FAIL: "CREATE_COMMENT_FAIL",
};

const initialState = {
    loading: false,
    comments: [],
    error: ""
};

export const fetchCommentsSuccess = comments => ({
    type: commentConst.FETCH_COMMENTS_SUCCESS,
    payload: {
        comments: comments
    }
});

export const fetchCommentsFail = error => ({
    type: commentConst.FETCH_COMMENTS_FAIL,
    payload: {
        error: error
    }
});

export function commentReducer(state = initialState, action) {
    switch (action.type) {
        case commentConst.FETCH_COMMENTS_IS_LOADING:
            return {...state, loading: true, error: null};

        case commentConst.FETCH_COMMENTS_SUCCESS:
            return {...state, loading: false, comments: action.payload.comments};

        case commentConst.FETCH_COMMENTS_FAIL:
            return {...state, loading: false, comments: null, error: action.payload.error};

        case commentConst.CREATE_COMMENT_IS_LOADING:
            return {...state, loading: true, error: null};

        case commentConst.CREATE_COMMENT_SUCCESS:
            let clonedComments = [].concat(state.comments);
            clonedComments.push(action.payload.comment);
            return {...state, loading: false, comments: clonedComments};

        case commentConst.CREATE_COMMENT_FAIL:
            return {...state, loading: false, comments: null, error: action.payload.error};

        default:
            return state;
    }
}
