import React, {Component} from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginHandler = event => {
        localStorage.username = this.state.username;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.loginHandler}>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                        type="text"/>
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        type="password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
