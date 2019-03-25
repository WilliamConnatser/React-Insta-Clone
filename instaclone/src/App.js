import React, {Component} from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

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
