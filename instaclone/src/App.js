import React, {Component} from 'react';
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import {faComment, faCompass, faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

library.add(faComment, faCompass, faInstagram, faHeart, faSolidHeart, faUser);

class App extends Component {

    constructor() {
        super();

        this.state = {
            posts: [],
            username: "KimKardashian",
            filter: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem('posts')) {
            this.setState({
                posts: JSON.parse(localStorage.getItem('posts'))
            });
        } else {
            const parsedData = dummyData.map(post => {
                post.commentInput = "";
                post.liked = false;
                return post;
            })
            this.setState({posts: parsedData});
        }
    }

    componentDidUpdate() {
        localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }

    toggleLikeHandler = event => {
        const currentPosts = [...this.state.posts];
        const i = this.getIndexFromId(event.currentTarget.id);
        currentPosts[i].liked = !currentPosts[i].liked;
        currentPosts[i].liked
            ? currentPosts[i].likes += 1
            : currentPosts[i].likes -= 1;
        this.setState({posts: currentPosts});
    }

    submitCommentHandler = event => {
        event.preventDefault();
        const currentPosts = [...this.state.posts];
        const i = this.getIndexFromId(event.target.id);
        currentPosts[i]
            .comments
            .push({username: this.state.username, text: event.target.newcomment.value});
        currentPosts[i].commentInput = "";
        this.setState({posts: currentPosts});
    }

    filterChangeHandler = event => {
        this.setState({filter: event.target.value});
    }

    getIndexFromId(id) {
        const currentPosts = [...this.state.posts];
        return currentPosts.findIndex(post => post.id === id);
    }

    render() {

        const posts = this.state.posts.filter(post => {
            return post
                .username
                .includes(this.state.filter);
        }).map(post => <PostContainer
            post={post}
            key={post.id}
            submitCommentHandler={this.submitCommentHandler}
            toggleLikeHandler={this.toggleLikeHandler}/>);

        return (
            <div className="App">
                <header>
                    <SearchBar
                        filterChangeHandler={this.filterChangeHandler}
                        filter={this.state.filter}/>
                </header>
                <main className="post-container">
                    {posts}
                </main>
            </div>
        );
    }
}

export default App;
