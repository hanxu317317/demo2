import React, { Component } from 'react';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    render() {
        return (
            <div style={{height: '100%'}}>
                <img src="/public/img/culture/culture.jpg" style={{width: '100%', height: '100%'}} />
                <img src="/public/img/culture/culture.jpg" style={{width: '100%', height: '100%'}} />
              
            </div>
        );
    }
}

