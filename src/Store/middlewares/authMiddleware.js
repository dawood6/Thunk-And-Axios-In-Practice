import AuthActions from '../actions/authActions'
import axios from 'axios'

const SERVER_PATH = 'https://jsonplaceholder.typicode.com/todos'
class AuthMiddleware  {
  static postLoadingMiddleware = (data) => {
    return (dispatch) => {
      dispatch(AuthActions.postsLoading())
      axios.get(SERVER_PATH).then(response => {
        console.log(response.data)
        dispatch(AuthActions.postsLoadingSuccess(response.data))

      }).catch(err => {
        console.log(err)
        dispatch(AuthActions.postsLoadingFail({ success: false, errorMessage: err.message }))

      })
    }
  }

}

export default AuthMiddleware