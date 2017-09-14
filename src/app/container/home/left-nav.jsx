import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();
        this.state = {
            goods: false
        };
    }
    onNavChange() {
        // let goodsReg = /goods/g;
        // let location = this.context.router.location;
        // console.log("location", (location.pathname));
        // // console.log("goodsReg.test(location.pathname)". goodsReg.test(location.pathname))
        // // if (goodsReg.test(location.pathname)) {
        // //     this.setState({goods: true});
        // // } else {
        // //     this.setState({goods: false});
        // // }
        this.forceUpdate();
    }
    render() {
        let goodsReg = /goods/g;
        let location = this.context.router.location;
        let showChild = false;
        if (goodsReg.test(location.pathname)) { 
            showChild = true;
        }
        return (
            <ul className="left-ul list-unstyled">
                <li className="left-ul__li">
                    <Link to="/intro" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                        企业简介
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/culture" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                        企业文化
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/member" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                        企业员工
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/market" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                        市场布局
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/ceo" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                        董事长致辞
                    </Link>
                </li>
                <li className="left-ul__li">
                    <Link to="/goods" className={classnames('left-ul__item', {'left-ul__item-active': false})} activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                        产品展示
                    </Link>
                    {
                        showChild ? 
                        <ul className="list-unstyled left-ul__child">
                            <li>
                                <Link to="/goods/1" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                                    凤爪系列
                                </Link>
                            </li>
                            <li>
                            <Link to="/goods/2" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                            海鲜系列
                            </Link>
                            </li>
                            <li>
                            <Link to="/goods/3" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                            皮晶系列
                            </Link>
                            </li>
                            <li>
                            <Link to="/goods/4" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                            卤香系列
                            </Link>
                            </li>
                            <li>
                            <Link to="/goods/5" className="left-ul__item" activeClassName="left-ul__item-active" onClick={this.onNavChange.bind(this)}>
                            素食系列
                            </Link>
                            </li>
                        </ul>
                        : null
                    }
                </li>
                
            </ul>
        );
    }
}
Home.contextTypes = {
    router: PropTypes.object
};


