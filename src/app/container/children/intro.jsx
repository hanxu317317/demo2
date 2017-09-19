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
        return (
            <div className="intro-wrap" id="test">
                <div className="flex-column" style={{height: '100%'}}>
                    <div className="flex-item-12">
                        <button onClick={this.test.bind(this)}>测试参数</button>
                    </div>
                    <div className="flex-item-12 intro-wrap__right"></div>
                </div>
            </div>
        );
    }
}

