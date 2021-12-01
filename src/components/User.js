import React from 'react'

class User extends React.Component {
    render() {
        const { mainUser } = this.props;

        return(
            <div id="user">
            <img src={mainUser.avatar_url} />
            <a target="_blank" href={mainUser.html_url}><h3>Melissa Mackie</h3></a>
            <p>(mainUser.login)</p>
            <p>Total Repos: {mainUser.public_repos}</p>
            <p>Total Followers: {mainUser.followers}</p>
            </div>
      );
    }

}

export default User;