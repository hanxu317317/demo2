import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from './home/swiper';
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

    }

    componentDidUpdate() {
    }

    render() {

        return (
            <div id="container">
                <Swiper />
                <section id="main">
                    <div id="wrap">
                        {this.props.children && React.cloneElement(this.props.children, this.props)}
                    </div>
                </section>
            </div>
        );
    }
}
