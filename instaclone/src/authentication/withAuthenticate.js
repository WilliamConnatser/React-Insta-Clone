import React, {Component} from 'react'

export default PostsPage => LoginPage => {
    return class extends Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.username !== undefined) {
                this.setState({loggedIn: true});
            }
        }

        render() {
            return this.state.loggedIn
                ? <PostsPage/>
                : <LoginPage/>
        }
    }
}