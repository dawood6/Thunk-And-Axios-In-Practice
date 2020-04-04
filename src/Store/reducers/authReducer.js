import ActionTypes from '../actions/ActionTypes';

const initialAuthState = {
  posts: [],
  errorMessage: '',
  loading: false,
};
console.log(initialAuthState.posts)
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        loading: true
      };
      case ActionTypes.POSTS_LOADING_SUCCESS:
        return {
          ...state,
          posts: action.data
        };

    case ActionTypes.USER_LOGIN_FAIL:   
      return {...state, posts: null, errorMessage: action.data.errorMessage}

    default:
      return state;
  }
};