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
    render() {

        const posts = dummyData.map((post, i) => <PostContainer post={post} key={i}/>);

        return (
            <div className="App">
                <header>
                    <SearchBar/>
                </header>
                <main>
                    {posts}
                </main>
            </div>
        );
    }
}

export default App;
