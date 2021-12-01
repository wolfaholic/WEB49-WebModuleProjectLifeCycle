import React from 'react'

class User extends React.Component {
    render() {
        return(
            <div id="user">
            <img src="https://avatars.githubusercontent.com/u/18158864?v=4" />
            <a target="_blank" href="https://github.com/wolfaholic"><h3>Melissa Mackie</h3></a>
            <p>(wolfaholic)</p>
            <p>Total Repos: 50</p>
            <p>Total Followers: 11</p>
            </div>
      );
    }

}

export default User;