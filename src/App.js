import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Card</h1>
      <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
      </form>
      
      <div id="user">
      <img src="https://avatars.githubusercontent.com/u/18158864?v=4" />
      <a target="_blank" href="https://github.com/wolfaholic"><h3>Melissa Mackie</h3></a>
      <p>(wolfaholic)</p>
      <p>Total Repos: 50</p>
      <p>Total Followers: 11</p>
      </div>
    
      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/16263859?v=4" /> 
          <a href="https://api.github.com/users/IsaiahFlax"><p>Isaiah Flax</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/16263859?v=4" /> 
          <a href="https://api.github.com/users/IsaiahFlax"><p>Isaiah Flax</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/16263859?v=4" /> 
          <a href="https://api.github.com/users/IsaiahFlax"><p>Isaiah Flax</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/16263859?v=4" /> 
          <a href="https://api.github.com/users/IsaiahFlax"><p>Isaiah Flax</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/16263859?v=4" /> 
          <a href="https://api.github.com/users/IsaiahFlax"><p>Isaiah Flax</p></a>
        </div>
      </div>
    
    </div>);
  }
}

export default App;
