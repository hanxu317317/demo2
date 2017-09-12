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
    renderNav() {
        let Components = [];
        for (let i = 1; i < 6; i++) {
            Components.push(
                <div className={`swiper-slide`} key={i}>
                    <div className={`swiper-slide__bg${i}`} />
                    <img className="swiper-slide__image" src={`/public/img/nav_${i}.jpg`} />
                </div>
            );
        }
        return Components;
    }
    render() {
        return (
            <div className="swiper-container" id="swiper">
                <div className="swiper-wrapper">
                    {this.renderNav()}
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" />
            </div>
        );
    }
}

