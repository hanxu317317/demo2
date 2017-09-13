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
                <h3 style={{textAlign:'center'}}>企业文化</h3>
                <p>
                    <strong>有友精神:</strong> <span style={{marginLeft: '5px'}}>诚信 务实 执着 创新</span>
                </p>
                <p>
                    <strong>有友愿景:</strong> <span style={{marginLeft: '5px'}}>世界品牌 百年有友</span>
                </p>
                <p>
                    <strong>有友文化:</strong>
                </p>
                <p>快乐工作，快乐生活。</p>
                <p>宠辱不惊，自强不息。</p>
                <p>乐不忘形，悲不失志。</p>
                <p>善始慎终，永无止境。</p>
                
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/culture_1.png" />
                </div>
            </div>
        );
    }
}

