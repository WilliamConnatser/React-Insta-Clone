import React, {Component} from 'react';
import styled from "styled-components";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import {faComment, faCompass, faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

library.add(faComment, faCompass, faInstagram, faHeart, fasHeart, faUser);

class App extends Component {

    constructor() {
        super();

        this.state = {
            posts: [],
            username: "KimKardashian"
        }
    }

    componentDidMount() {
        const parsedData = dummyData.map(post => {
            post.commentInput = "";
            post.userLiked = false;
            return post;
        })
        this.setState({posts: parsedData});
    }

    inputChangeHandler = event => {
        event.preventDefault();
        const currentPosts = [...this.state.posts];
        const i = this.getIndexFromId(event.currentTarget.id);
        currentPosts[i].commentInput = event.currentTarget.value;
        this.setState({posts: currentPosts});
    }

    submitHandler = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const currentPosts = [...this.state.posts];
            const i = this.getIndexFromId(event.currentTarget.id);
            currentPosts[i]
                .comments
                .push({username: this.state.username, text: currentPosts[i].commentInput});
            currentPosts[i].commentInput = "";
            this.setState({posts: currentPosts});
        }
    }

    likeHandler = event => {
        const i = this.getIndexFromId(event.currentTarget.id);
        const currentPosts = [...this.state.posts];
        if (i > -1) {
            currentPosts[i].userLiked = !currentPosts[i].userLiked;
            currentPosts[i].userLiked
                ? currentPosts[i].likes += 1
                : currentPosts[i].likes -= 1;
            this.setState({posts: currentPosts});
        }
    }

    getIndexFromId(id) {
        const currentPosts = [...this.state.posts]
        return currentPosts.findIndex(post => post.imageUrl === id)
    }

    render() {

        const AppContainer = styled.div `
            max-width: 1000px;
            margin: 0 auto;
        
            .view-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
        `;

        const posts = dummyData.map((post, i) => <PostContainer
            post={post}
            key={i}
            inputChangeHandler={this.inputChangeHandler}
            submitHandler={this.submitHandler}
            likeHandler={this.likeHandler}/>);

        return (
            <AppContainer>

                <SearchBar/>

                <main className="view-container">
                    {posts}
                </main>
            </AppContainer>
        );
    }
}

export default App;
