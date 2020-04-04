import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css'
import AuthMiddleware from "./Store/middlewares/authMiddleware";
class App extends Component {
  state = {
    posts: []
  };
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      
    this.setState({ posts: nextProps.posts });
  }
  componentDidMount() {
    console.log("PROPS OBJECT", this.props);
    this.props.postLoading();
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
          <h1>Using Axios And Thunk In REACT-REDUX</h1>
          <h2>Using JSONPLACEHOLDER API</h2>
          <marquee>Thanks TO Sir Osama, Sir Umair, Sir Faraz, Sir Irfan</marquee>
          {posts.map((item) => {
            return <h3>UserId:&nbsp;&nbsp;{item.userId} <br /> Id:&nbsp;&nbsp;{item.id} <br /> Title:&nbsp;&nbsp;{item.title} <br /> Completed:&nbsp;&nbsp;{item.completed.toString()}</h3>
          })}
      </div>
    );
  }
}
const mapStateToProps = ({ authReducer: { posts } }) => ({
  posts
});
const mapDispatchToProps = dispatch => ({
  postLoading: () => dispatch(AuthMiddleware.postLoadingMiddleware())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);