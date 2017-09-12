import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    render() {
        return (
            <ul className="left-ul list-unstyled">
                <li className="left-ul__li">
                    <Link to="/intro" className="left-ul__item" activeClassName="mcds-tab__active" onClick={() => this.forceUpdate()}>
                        企业简介
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="mcds-tab__active" onClick={() => this.forceUpdate()}>
                        企业文化
                    </Link>
                </li>
            </ul>
        );
    }
}

