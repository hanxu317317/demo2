import React, { Component } from 'react';

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    test() {
        let slide = document.getElementById('swiper-slide__bg1');
        let modal = document.getElementById('modal-body')
        let result = {
            winWidth: document.body.clientWidth,
            winHeight: document.body.clientHeight,
            slideWidth: slide.offsetWidth,
            slideHeight: slide.offsetHeight,
            modalWidth: modal.offsetWidth,
            modalHeight: modal.offsetHeight
        }
        alert(JSON.stringify(result));
    }
    render() {
        // <button onClick={this.test.bind(this)}>测试参数</button>
        return (
            <div style={{height: '100%'}}>
                <img src="/public/img/intro/intro.jpg" style={{width: '100%', height: '100%'}} />                
            </div>
        );
    }
}

