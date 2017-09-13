import React, { Component } from 'react';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <img src="/public/img/good.jpg" />
            </div>
        );
    }
}

