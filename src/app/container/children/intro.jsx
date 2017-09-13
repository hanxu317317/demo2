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
                <h3 style={{textAlign:'center'}}>企业简介</h3>
                <p style={{textIndent: '2em'}}>有友食品公司创立于1997年，由董事长鹿有忠先生一手创建。1997年，鹿有忠先生与西南农业大学的专家、教授一起经过上百次实验研究攻克了泡肉产品的保鲜难题，将“泡凤爪”以袋装休闲食品的形式首次推向市场，并于2001年获得国家发明专利（专利号ZL 99 1 14725.1）。</p>
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/intro_1.png" />
                </div>
                <p style={{textIndent:'2em', marginTop: '12px'}}>
                目前公司拥有重庆渝北、四川成都、重庆璧山三个科研生产基地，及四川有友、有友销售公司，有友进出口公司、有友制造公司四家全资子公司，业务覆盖整个中国大陆地区。主要产品包括泡肉、泡菜、卤香、海鲜等几个系列。公司员工1400余人，年生产能力4万吨，年营业收入近10亿元。2014年11月，有友食品公司登陆新三板（证券代码：831377），成为行业内首家进军全国公开资本市场的企业。2015年12月，有友食品向证监会提交了IPO申请。</p>   
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/intro_2.png" />
                </div>
                <p style={{textIndent:'2em', marginTop: '12px'}}>
                有友食品公司坚守诚信道德，注重食品安全。先后通过了ISO9001、HACCP和ISO22000食品安全管理体系认证，并获得“全国食品安全示范单位”称号。
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/intro_3.png" />
                </div>
                <p style={{textIndent:'2em', marginTop: '12px'}}>
                    2007年“有友”商标被认定为“重庆市著名商标”，2012年，“有友”Logo及图被国家工商总局商标局认定为“中国驰名商标”。
                </p>
            </div>
        );
    }
}

