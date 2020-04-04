import ActionTypes from '../actions/ActionTypes';

const initialAuthState = {
  todos: [],
  errorMessage: '',
  loading: false,
};
console.log(initialAuthState.todos)
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.TODOS_LOGIN:
      return {
        ...state,
        loading: true
      };
      case ActionTypes.TODOS_LOADING_SUCCESS:
        return {
          ...state,
          todos: action.data
        };

    case ActionTypes.TODOS_LOGIN_FAIL:   
      return {...state, todos: null, errorMessage: action.data.errorMessage}

    default:
      return state;
  }
};