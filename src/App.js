import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
      </form>
      
      <img src="https://avatars.githubusercontent.com/u/18158864?v=4" />
      <a href=""><h3>Melissa Mackie</h3></a>
    </div>);
  }
}

export default App;
