import ActionTypes from './ActionTypes';

class AuthActions {

  static postsLoading = () => {
    return {
      type: ActionTypes.POSTS_LOADING
    }
  }

  static postsLoadingSuccess = (data) => {
    return {
      type: ActionTypes.POSTS_LOADING_SUCCESS,
      data
    }
  }


  static postsLoadingFail = (data) => {
    return {
      type: ActionTypes.POSTS_LOADING_FAIL,
      data
    }
  }


}

export default AuthActions;