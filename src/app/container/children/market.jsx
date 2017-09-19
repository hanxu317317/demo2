import React, { Component } from 'react';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <img src="/public/img/market/market.jpg" style={{width: '100%', height: '100%'}}/>
            </div>
        );
    }
}

