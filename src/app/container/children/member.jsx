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
                <img src="/public/img/member/member.jpg" style={{height: '100%', width: '100%'}}/>
            </div>
        );
    }
}

