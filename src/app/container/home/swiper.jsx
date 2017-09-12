import React, { Component } from 'react';

export default class HeadSwiper extends Component {
    static propTypes = {
    };

    constructor() {
        super();
    }
    componentDidMount() {
        let swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30
        });
    }
    
    render() {
        return (
            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide blue-slide">slider1</div>
                        <div className="swiper-slide red-slide">slider2</div>
                        <div className="swiper-slide orange-slide">slider3</div>
                    </div>
                </div>
            </div>
        );
    }
}

