import React, {Component} from 'react';
import styled from 'styled-components';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart as faSolidHeart, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faComment, faCompass, faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import PostsPage from './components/PostsPage/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

library.add(faComment, faCompass, faHeart, faUser, faSolidHeart, faTrashAlt, faInstagram);

class App extends Component {

    render() {

        const AppWrapper = styled.div`
            max-width: 1000px;
            margin: 0 auto;
            font-size: 1.3rem;
        `;

        const AuthComponent = withAuthenticate(PostsPage)(LoginPage);

        return (
            <AppWrapper>
                <AuthComponent/>
            </AppWrapper>
        );
    }
}

export default App;
