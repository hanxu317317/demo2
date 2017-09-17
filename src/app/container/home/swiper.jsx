import React, { Component } from 'react';
import { browserHistory } from 'react-router';

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
        title: '市场员工',
        index: '6',
        href: 'member'
    },
    {
        title: '市场布局',
        index: '4',
        href: 'market'
    },
    {
        title: '董事致辞',
        index: '5',
        href: 'ceo'

    },
    {
        title: '产品展示 ',
        index: '3',
        href: 'goods'
    }
];

export default class HeadSwiper extends Component {
    static propTypes = {
    };

    constructor() {
        super();
    }
    
    componentDidMount() {
        var mySwiper = new Swiper('#swiper', {
            effect: 'coverflow',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            initialSlide: 2,
            slidesPerView: 3,
            loop: false,
            centeredSlides: true,
            coverflow: {
                rotate: -10,
                stretch: -40,
                depth: 60,
                modifier: 2,
                slideShadows: true
            },
            onSlideChangeEnd: (swiper) => {
                this.changeBgPos(swiper.activeIndex);
                let index = swiper.activeIndex + 1;
                $("#title .content").fadeOut();
                setTimeout(() => {
                    $("#title .content").html(INFO[swiper.activeIndex].title).fadeIn();
                }, 300)

            }
        });
        $("#title").fadeIn();        
       
    }
    jump(index) {
        browserHistory.push(`/${INFO[index].href}`);
        $('.modal-body').eq(0).get(0).scrollTop = 0;
        $("#modal-top").modal();
    }
    changeBgPos(index) {
        let container = document.getElementById("container");
        let percent = index / 6 * 100 + '%';
        container.style.backgroundPositionX = percent;
    }
    //  <img className="swiper-slide__image" src={`/public/img/nav_${i}.jpg`} />
    renderNav() {
        let Components = [];     
        for (let i = 0; i < INFO.length; i++) {
            Components.push(
                <div key={i} className="swiper-slide" onClick={this.jump.bind(this, i)}>
                    <div className={`swiper-slide__bg swiper-slide__bg${INFO[i].index} `} />
                    <div className="content">
                        <p className="ani" id={`content_${i}`}>
                            &nbsp;
                            {INFO[i].title}
                        </p>
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

