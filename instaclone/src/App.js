import React, {Component} from 'react';
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
//import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import {faComment, faCompass, faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

library.add(faComment, faCompass, faInstagram, faHeart, faUser)

class App extends Component {

    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const parsedData = dummyData.map(post => {
            post.commentInput = "";
            return post;
        })
        this.setState({posts: parsedData});
    }

    inputChangeHandler = event => {
        const currentPosts = [...this.state.posts];
        const i = this.getIndexFromId(event.target.id);
        currentPosts[i].commentInput = event.target.value;
        this.setState({posts: currentPosts});
    }

    submitHandler = event => {
        if (event.key === 'Enter') {
            const currentPosts = [...this.state.posts];
            const i = this.getIndexFromId(event.target.id);
            currentPosts[i].comments.push({
              username: "loggedInUser",
              text: currentPosts[i].commentInput
            });
            currentPosts[i].commentInput = "";

            this.setState({
              posts: currentPosts
            });
        }
    }

    getIndexFromId(id) {
        const currentPosts = [...this.state.posts]
        return currentPosts.findIndex(post => post.imageUrl === id)
    }

    render() {

        const posts = dummyData.map((post, i) => <PostContainer
            post={post}
            key={i}
            inputChangeHandler={this.inputChangeHandler}
            submitHandler={this.submitHandler}/>);

        return (
            <div className="App">
                <header>
                    <SearchBar/>
                </header>
                <main className="post-container">
                    {posts}
                </main>
            </div>
        );
    }
}

export default App;
