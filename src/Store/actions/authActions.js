import ActionTypes from './ActionTypes';

class AuthActions {

  static todosLoading = () => {
    return {
      type: ActionTypes.TODOS_LOADING
    }
  }

  static todosLoadingSuccess = (data) => {
    return {
      type: ActionTypes.TODOS_LOADING_SUCCESS,
      data
    }
  }


  static todosLoadingFail = (data) => {
    return {
      type: ActionTypes.TODOS_LOADING_FAIL,
      data
    }
  }


}

export default AuthActions;