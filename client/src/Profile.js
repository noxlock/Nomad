import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div>
                <img src="https://lh3.googleusercontent.com/proxy/F6GyiMASFnNHcY9Ig9QDt2h7KgzU6RPzMj47_275oLF1g_tuRjsJGln5C6scECje5e68NPm7lnD6MH679Ze3ZS_evzctXUxnCntHVfGTV2yTJJYrNYkqwyGNpEbCmHrPF_tVrINOMbP6DeE"
                alt="pic"></img>
                <h1>{this.props.name}</h1>
                <p>{this.props.position}</p>
            </div>
        )
    }
}

export default Profile