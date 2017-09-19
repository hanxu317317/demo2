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
            <div className="intro-wrap" id="test">
                <div className="flex-column" style={{height: '100%'}}>
                    <div className="flex-item-12">
                        <div className="">
                            <img src="/public/img/intro/title.jpg" style={{width: '100%'}} />
                        </div>
                        <div className="intro-wrap__red">
                            <div className="intro-wrap__red-title">
                                中国泡 有友人
                            </div>
                        </div>
                        <div className="flex-column flex-item-11 intro-wrap__left" style={{height: 'auto'}}>
                            <div className="flex-column flex-middle flex-center">
                                <img style={{width: '80%'}} src="/public/img/intro/left-top.jpg" />
                            </div>
                            <div className="flex-column flex-middle flex-center">
                                <img style={{width: '80%'}} src="/public/img/intro/left-bottom.jpg" />
                            </div>
                        </div>
                        <div className="flex-item-13 intro-wrap__left" style={{padding: '0 12px'}}>
                            <p>有友食品股份有限公司是专门从事休闲食品研发、生产、销售的现代化企业。自1997年成立以来，始终坚持“诚信务实，执着创新”的企业精神，为社会奉献味美质优、安全健康的休闲美食。</p>
                            <p>目前公司拥有重庆渝北、四川成都、重庆璧山三个科研生产基地，及四川有友、有友销售公司，有友进出口公司、有友制造公司四家全资子公司，业务覆盖整个中国大陆地区。主要产品包括泡肉、泡菜、卤香、海鲜等几个系列。公司员工1400余人，年生产能力4万吨，年营业收入近10亿元。2014年11月，有友食品公司登陆新三板（证券代码：831377），成为行业内首家进军全国公开资本市场的企业。2015年12月，有友食品向证监会提交了IPO申请。</p>
                            <p>有友食品坚守诚信道德，注重食品安全。先后通过了ISO9001、HACCP和ISO22000食品安全管理体系认证，并获得“全国食品安全示范单位”称号。2007年“有友”商标被认定为“重庆市著名商标”，2012年，“有友”Logo及图被国家工商总局商标局认定为“中国驰名商标”。</p>
                            <p>有友食品勇担社会责任，规范经营，助推地方经济发展。通过解决就业、捐资助学、抗灾救灾、扶老助老等多种方式让社会分享企业的发展成果及爱心，为构建和谐社会贡献力量。</p>   
                            <p>长风破浪会有时，直挂云帆济沧海。有友食品愿与各界朋友真诚携手，努力打造百年企业，把有友中国味传播得更远！</p>
                        
                        </div>
                    </div>
                    <div className="flex-item-12 intro-wrap__right">
                        
                    </div>
                </div>
            </div>
        );
    }
}

