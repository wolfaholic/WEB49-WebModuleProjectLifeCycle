import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  state = {
    mainUser: "wolfaholic",
    user:{},
    followers: []
  }

  componentDidMount () {
    axios.get(`https://api.github.com/users/${this.state.mainUser}`)
    .then(resp=> {
      this.setState({
        ...this.state,
        user: resp.data
      });
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.state.user !== prevState.user)
    axios.get(`https://api.github.com/users/${this.state.mainUser}/followers`)
    .then(resp=> {
      this.setState({
        ...this.state,
        followers: resp.data
      });
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      mainUser: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.mainUser}`)
    .then(resp=> {
      this.setState({
        ...this.state,
        user: resp.data
      });
    })
  }

  render() {
    return(
    <div>
      <h1>Github Card</h1>
      <form onSubmit={this.handleSubmit}>
          <input placeholder="Github Handle" onChange={this.handleChange} />
          <button>Search</button>
      </form>
      
     <User user={this.state.user} />
     <FollowerList followers={this.state.followers} />
    
    </div>);
  }
}

export default App;
