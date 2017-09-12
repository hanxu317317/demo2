import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from './home/swiper';
import LeftNav from './home/left-nav';
require('styles/global/style.scss');
require('styles/modules/base/index.scss');

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    constructor() {
        super();
    }

    componentDidMount() {
        let swiper = document.getElementById('swiper');
        let clientHeight = document.body.clientHeight;
        let main = document.getElementById('main');
        main.style.height = clientHeight - swiper.offsetHeight + 'px';
        main.style.marginTop = swiper.offsetHeight + 'px';
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <div id="container">
                <Swiper />
                <section id="main">
                    <div className="left">
                        <LeftNav />
                    </div>
                    <div className="right">
                        {this.props.children && React.cloneElement(this.props.children, this.props)}
                    </div>
                </section>
            </div>
        );
    }
}
