import AuthActions from '../actions/authActions'
import axios from 'axios'

const SERVER_PATH = 'https://jsonplaceholder.typicode.com/todos'
class AuthMiddleware  {
  static todosLoadingMiddleware = (data) => {
    return (dispatch) => {
      dispatch(AuthActions.todosLoading())
      axios.get(SERVER_PATH).then(response => {
        console.log(response.data)
        dispatch(AuthActions.todosLoadingSuccess(response.data))

      }).catch(err => {
        console.log(err)
        dispatch(AuthActions.todosLoadingFail({ success: false, errorMessage: err.message }))

      })
    }
  }

}

export default AuthMiddleware