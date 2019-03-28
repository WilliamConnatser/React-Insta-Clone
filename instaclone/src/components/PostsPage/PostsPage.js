import React, {Component} from 'react';
import moment from 'moment';
import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import AddPost from '../AddPost/AddPost';

export default class PostsPage extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            username: "",
            userAvatar: "https://vignette.wikia.nocookie.net/payday/images/5/55/Anon.jpg/revision/latest?" +
                    "cb=20140609174443",
            filter: "",
            addPost: false
        }
    }

    componentDidMount() {
        if (localStorage.posts) {
            this.setState({
                posts: JSON.parse(localStorage.posts),
                username: localStorage.username
            });
        } else {
            const parsedData = dummyData.map(post => {
                post.commentInput = "";
                post.liked = false;
                return post;
            })
            this.setState({posts: parsedData, username: localStorage.username});
        }
    }

    componentDidUpdate() {
        localStorage.posts = JSON.stringify(this.state.posts);
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
            .push({
                id: currentPosts[i].comments.length + 1 + "",
                username: this.state.username,
                text: event.target.newcomment.value
            });

        currentPosts[i]
            .comments
            .map(function (comment, index) {
                comment.id = index + 1 + "";
                return comment;
            });
        currentPosts[i].commentInput = "";
        this.setState({posts: currentPosts});
    }

    filterChangeHandler = event => {
        this.setState({filter: event.target.value});
    }

    deleteCommentHandler = postId => event => {
        const currentPosts = [...this.state.posts];
        const postIndex = this.getIndexFromId(postId);
        currentPosts[postIndex].comments = currentPosts[postIndex]
            .comments
            .filter(function (comment) {
                return comment.id !== event.currentTarget.id;
            })
            .map(function (comment, index) {
                comment.id = index + 1 + "";
                return comment;
            });
        this.setState({posts: currentPosts});
    }

    toggleAddPostHandler = _ => {
        this.setState({
            addPost: !this.state.addPost
        })
    }

    submitAddPostHandler = event => {
        event.preventDefault();

        console.log(this.state.userAvatar)

        //Get the last char code in the id string, and add 1 to it
        const lastId = this.state.posts[this.state.posts.length - 1].id;
        const id = String.fromCharCode(lastId.charCodeAt(lastId.length - 1) + 1);
        console.log(id)
        const username = this.state.username;
        const thumbnailUrl = this.state.userAvatar;
        const imageUrl = event.target.imageUrl.value;
        const likes = 0;
        const timestamp = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
        const comments = [
            {
                id: '1',
                username,
                text: event.target.caption.value
            }
        ]

        const currentPosts = [...this.state.posts];
        currentPosts.push({
            id,
            username,
            thumbnailUrl,
            imageUrl,
            likes,
            timestamp,
            comments
        });

        this.setState({posts: currentPosts});
    }

    getIndexFromId(id) {
        const currentPosts = [...this.state.posts];
        return currentPosts.findIndex(post => post.id === id);
    }

    render() {
        const filter = this.state.filter;
        const posts = this
            .state
            .posts
            .filter(post => {
                return post
                    .username
                    .includes(filter);
            })
            .map(post => <PostContainer
                post={post}
                key={post.id}
                submitCommentHandler={this.submitCommentHandler}
                toggleLikeHandler={this.toggleLikeHandler}
                deleteCommentHandler={this.deleteCommentHandler}/>).reverse();
        return (
            <div>
                <header>
                    <SearchBar
                        filterChangeHandler={this.filterChangeHandler}
                        toggleAddPostHandler={this.toggleAddPostHandler}
                        filter={filter}/>
                </header>
                <main>
                    {this.state.addPost
                        ? <AddPost submitAddPostHandler={this.submitAddPostHandler}/>
                        : null}
                    {posts}
                </main>
            </div>
        )
    }
}