import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid grey;
    padding: 5px 0;

    color: #2c2c2c;

    @media(max-width:500px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .logo {
        font-size: 3rem;
    }

    @media(max-width:500px) {
        justify-content: center;
    }
`;

const TitleWrapper = styled.div`
    font-family: 'Vegan-Style';
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid grey;
    font-size: 1.7rem;
`;

const MiddleWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputWrapper = styled.input`
    border: 1px solid grey;
    height: 30px;

    outline: none;
    background: lightgray;
    text-align: center;

    @media(max-width:500px) {
        margin: 10px 0;
    }
`;

const RightWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    .icon {
        font-size: 2rem;
        font-weight: 300;
        margin: 0 20px;
    }

    @media(max-width:500px) {
        justify-content: center;
    }
`;

export default class SearchBar extends Component {

    render() {
        return (
            <SearchBarWrapper>
                <LeftWrapper>
                    <FontAwesomeIcon className="logo" icon={['fab', 'instagram']}/>
                    <TitleWrapper>Instaclone</TitleWrapper>
                </LeftWrapper>
                <MiddleWrapper>
                    <InputWrapper
                        value={this.props.filter}
                        onChange={this.props.filterChangeHandler}
                        placeholder="Search"/>
                </MiddleWrapper>
                <RightWrapper>
                    <span onClick={this.props.toggleAddPostHandler}><FontAwesomeIcon className="icon" icon={['far', 'plus-square']}/></span>
                    <FontAwesomeIcon className="icon" icon={['far', 'compass']}/>
                    <FontAwesomeIcon className="icon" icon={['far', 'heart']}/>
                    <FontAwesomeIcon className="icon" icon={['far', 'user']}/>
                </RightWrapper>
            </SearchBarWrapper>
        )
    }
}

SearchBar.propTypes = {
    filterChangeHandler: PropTypes.func,
    toggleAddPostHandler: PropTypes.func,
    filter: PropTypes.string
}
