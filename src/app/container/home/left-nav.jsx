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
                    <Link to="/intro" className="left-ul__item" activeClassName="left-ul__item-active" onClick={() => this.forceUpdate()}>
                        企业简介
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="left-ul__item-active" onClick={() => this.forceUpdate()}>
                        企业文化
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/member" className="left-ul__item" activeClassName="left-ul__item-active" onClick={() => this.forceUpdate()}>
                        企业员工
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/market" className="left-ul__item" activeClassName="left-ul__item-active" onClick={() => this.forceUpdate()}>
                        市场布局
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/ceo" className="left-ul__item" activeClassName="left-ul__item-active" onClick={() => this.forceUpdate()}>
                        董事长致辞
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/goods" className="left-ul__item" activeClassName="left-ul__item-active" onClick={() => this.forceUpdate()}>
                        产品展示
                    </Link>
                </li>
                
            </ul>
        );
    }
}

