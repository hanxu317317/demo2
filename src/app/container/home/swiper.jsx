import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import _ from 'lodash';
const INFO = [
    {
        title: '企业简介',
        index: '1',
        href: 'intro'
    },
    {
        title: '企业文化',
        index: '2',
        href: 'culture'
    },
    {
        title: '企业人才',
        index: '3',
        href: 'member'
    },
    {
        title: '市场布局',
        index: '4',
        href: 'market'
    },
    {
        title: '董事长致辞',
        index: '5',
        href: 'ceo'

    },
    {
        title: '产品展示 ',
        index: '6',
        href: 'goods'
    }
];

export default class HeadSwiper extends Component {
    static propTypes = {
    };

    constructor() {
        super();
        this.isClick = false;
    }
    
    componentDidMount() {
        var mySwiper = new Swiper('#swiper', {
            // effect: 'coverflow',
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            initialSlide: 2,
            slidesPerView: 3,
            touchMoveStopPropagation: false,
            // loop: false,
            spaceBetween: 50,
            // centeredSlides: true,
            // coverflow: {
            //     rotate: -10,
            //     stretch: -40,
            //     depth: 60,
            //     modifier: 2,
            //     slideShadows: true
            // },
            onSlideChangeEnd: (swiper) => {
                // this.changeBgPos(swiper.activeIndex);
                // let index = swiper.activeIndex + 1;
                // $("#title .content").fadeOut();
                // setTimeout(() => {
                //     $("#title .content").html(INFO[swiper.activeIndex].title).fadeIn();
                // }, 300)

            },
            // slidesPerView: 3,
            grabCursor : true,
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            parallax:true,
        });
        $("#title").fadeIn();        
       
    }
    jump(index) {
        browserHistory.push(`/${INFO[index].href}`);
        // $('.modal-body').eq(0).get(0).scrollTop = 0;
        $("#modal-top").modal();
    }
    cancleJump() {

    }
    changeBgPos(index) {
        let container = document.getElementById("container");
        let percent = index / 6 * 100 + '%';
        container.style.backgroundPositionX = percent;
    }
    touchStart(e) {
        this.isClick = true;
    }
    touchMove() {
        this.isClick = false;
    }
    touchEnd(index) {
        if (this.isClick) {
            browserHistory.push(`/${INFO[index].href}`);
            $('.modal-body').eq(0).get(0).scrollTop = 0;
            $("#modal-top").modal();
            this.isClick = false;
        }
    }

    //  <img className="swiper-slide__image" src={`/public/img/nav_${i}.jpg`} />
    renderNav() {
        let Components = [];     
        for (let i = 0; i < INFO.length; i++) {
            Components.push(
                <div key={i} className="swiper-slide"
                    onTouchStart={this.touchStart.bind(this)}
                    onTouchMove={this.touchMove.bind(this)}
                    onTouchEnd={this.touchEnd.bind(this, i)}>
                    <div className="inner hack">
                        <dl>
                            <dt> 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</dt>
                            <dd> 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                            <dd> 11111111111111111111111111111111111111111111111111111111111111111111111...</dd>
                           
                        </dl>
                    </div>
                    <div className="inner" style={{width: '100%', height: '100%'}}>
                        <div id={`swiper-slide__bg${INFO[i].index}`} className={`swiper-slide__bg swiper-slide__bg${INFO[i].index} `} />
                        <div className="content">
                            <p className="ani" id={`content_${i}`}>
                                &nbsp;
                                {INFO[i].title}
                            </p>
                        </div>
                    </div>
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
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        );
    }
}

