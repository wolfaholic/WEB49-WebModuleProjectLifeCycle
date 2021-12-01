import React from 'react';

class Follower extends React.Component {
    render() {
        return (
            <div className="follower">
                <img width="200px" src="https://avatars.githubusercontent.com/u/16263859?v=4" /> 
                <a href="https://api.github.com/users/IsaiahFlax"><p>Isaiah Flax</p></a>
            </div>
        )
    }
}

export default Follower;