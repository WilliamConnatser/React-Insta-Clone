import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from "styled-components";

export default class SearchBar extends Component {

    render() {

        const SearchBarContainer = styled.header `
            display: flex;
            justify-content: center;
            border-bottom: 1px solid grey;
            padding: 5px 0;
        
            color: #2c2c2c;

            .section {
                display: flex;
                align-items: center;
                width: 33%;
            }
            
            .section__left {
                justify-content: flex-start;
            }
            
            .section__middle {
                justify-content: center;
            }
            
            .section__right {
                justify-content: flex-end;
            }
            
            .logo {
                font-size: 3rem;
            }
            
            .title {
                margin-left: 20px;
                padding-left: 20px;
                border-left: 1px solid grey;
                font-size: 1.7rem;
            }
            
            .input {
                border: 1px solid grey;
                height: 30px;
            
                text-align: center;
                outline: none;
                background: lightgray;
            }
            
            .icon {
                font-size: 2rem;
                font-weight: 300;
                margin: 0 20px;
            }
        `;

        return (
            <SearchBarContainer>
                <div className="section section__left">
                    <FontAwesomeIcon className="logo" icon={['fab', 'instagram']}/>
                    <span className="title">Instagram</span>
                </div>
                <div className="section section__middle">
                    <input className="input" placeholder="Search"/>
                </div>
                <div className="section section__right">
                    <FontAwesomeIcon className="icon compass" icon={['far', 'compass']}/>
                    <FontAwesomeIcon className="icon heart" icon={['far', 'heart']}/>
                    <FontAwesomeIcon className="icon user" icon={['far', 'user']}/>
                </div>
            </SearchBarContainer>
        )
    }
}
