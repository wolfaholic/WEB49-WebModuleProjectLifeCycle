import React from 'react';
import User from '/components/User';

class App extends React.Component {
  state = {
    mainUser: "mmackie",
    user:{
      avatar_url: "https://avatars.githubusercontent.com/u/18158864?v=4",
      html_url: "https://github.com/wolfaholic",
      name: "Melissa",
      login: "wolfaholic",
      public_repos: 104,
      followers: 16,
    },
    followers: [
      {
      login: "IsaiahFlax",
      avatar_url: "https://avatars.githubusercontent.com/u/16263859?v=4",
      html_url: "https://github.com/IsaiahFlax",
      },
      {
        login: "IsaiahFlax",
        avatar_url: "https://avatars.githubusercontent.com/u/16263859?v=4",
        html_url: "https://github.com/IsaiahFlax",
      },
      {
        login: "IsaiahFlax",
        avatar_url: "https://avatars.githubusercontent.com/u/16263859?v=4",
        html_url: "https://github.com/IsaiahFlax",
      },
      {
        login: "IsaiahFlax",
        avatar_url: "https://avatars.githubusercontent.com/u/16263859?v=4",
        html_url: "https://github.com/IsaiahFlax",
      },
      
    ],
  }

  render() {
    return(
    <div>
      <h1>Github Card</h1>
      <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
      </form>
      
     <User user={this.state.mainUser} />
     <FollowerList followers={this.state.followers} />
    
    </div>);
  }
}

export default App;
