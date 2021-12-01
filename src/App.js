import React from 'react';
import User from '/components/User';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Card</h1>
      <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
      </form>
      
     <User />
     <FollowerList />
    
    </div>);
  }
}

export default App;
