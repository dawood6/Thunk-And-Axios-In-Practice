import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css'
import AuthMiddleware from "./Store/middlewares/authMiddleware";
class App extends Component {
  state = {
    todos: []
  };
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      
    this.setState({ todos: nextProps.todos });
  }
  componentDidMount() {
    console.log("PROPS OBJECT", this.props);
    this.props.todosLoading();
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
          <h1>Using Axios And Thunk In REACT-REDUX</h1>
          <h2>Using JSONPLACEHOLDER API</h2>
          <marquee>Thanks TO Sir Osama, Sir Umair, Sir Faraz</marquee>
          {todos.map((item) => {
            return <h3>UserId:&nbsp;&nbsp;{item.userId} <br /> Id:&nbsp;&nbsp;{item.id} <br /> Title:&nbsp;&nbsp;{item.title} <br /> Completed:&nbsp;&nbsp;{item.completed.toString()}</h3>
          })}
      </div>
    );
  }
}
const mapStateToProps = ({ authReducer: { todos } }) => ({
  todos
});
const mapDispatchToProps = dispatch => ({
  todosLoading: () => dispatch(AuthMiddleware.todosLoadingMiddleware())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);