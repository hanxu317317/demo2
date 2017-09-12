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
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="mcds-tab__active" onClick={() => this.forceUpdate()}>
                        企业员工
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="mcds-tab__active" onClick={() => this.forceUpdate()}>
                        市场布局
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="mcds-tab__active" onClick={() => this.forceUpdate()}>
                        董事长致辞
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="mcds-tab__active" onClick={() => this.forceUpdate()}>
                        产品介绍
                    </Link>
                </li>
                
            </ul>
        );
    }
}

