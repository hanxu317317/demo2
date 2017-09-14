import React, { Component } from 'react';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <div className="mcds-text__center" style={{paddingTop: '10%'}}>
                    <p style={{fontSize: '70px'}}>Home</p>
                </div>
            </div>
        );
    }
}


