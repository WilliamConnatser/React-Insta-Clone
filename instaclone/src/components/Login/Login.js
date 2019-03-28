import React, {Component} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LoginWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
`;

const Title = styled.h1 `
    font-family: 'Vegan-Style';
`;

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    max-width: 400px;
    margin-top: 20px;

    * {
        margin: 5px 0;
        width: 90%;
        height: 40px;
        border: 1px solid black;

        text-align: center;
        outline: none;
    }
`;

const Button = styled.button `
    cursor: pointed;
    color: white;
    background: grey;

    &:hover {
        background: white;
        color: grey;
    }
`;

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
            <LoginWrapper>
                <Title>Instaclone</Title>
                <FontAwesomeIcon
                    className="logo"
                    icon={['fab', 'instagram']}
                    style={{
                    fontSize: '5rem'
                }}/>
                <Form onSubmit={this.loginHandler}>
                    <input
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                        type="text"/>
                    <input
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        type="password"/>
                    <Button type="submit">Login</Button>
                </Form>
            </LoginWrapper>
        )
    }
}
