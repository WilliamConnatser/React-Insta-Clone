import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SearchBar.css";

export default class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="section section__left">
                    <FontAwesomeIcon className="logo" icon={['fab', 'instagram']} />
                    <span className="title">Instagram</span>
                </div>
                <div className="section section__middle">
                    <input className="input" placeholder="Search" />
                </div>
                <div className="section section__right">
                    <FontAwesomeIcon className="icon compass" icon={['far', 'compass']} />
                    <FontAwesomeIcon className="icon heart" icon={['far', 'heart']} />
                    <FontAwesomeIcon className="icon user" icon={['far', 'user']} />
                </div>
            </div>
        )
    }
}
