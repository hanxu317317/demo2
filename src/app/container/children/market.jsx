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
                <img src="/public/img/market.jpg" style={{float: 'left', paddingRight: '2em'}}/>
                <h3 style={{textAlign:'center'}}>市场布局</h3>
                <p style={{textIndent: '2em'}}>有友食品销售公司于2012年建立，销售网络覆盖我国各大中城市。</p>
                <p style={{textIndent: '2em'}}>作为行业内第一家研制泡凤爪的企业，有友食品引领、拉动了休闲食品行业中一个新兴细分行业——泡椒食品行业的快速发展。在多年的发展过程中，有友食品逐渐建立起覆盖全国大、中城市的销售网络，目前已遍及全国28个省份，拥有7个大区、2个营运中心和15个办事处，公司的销售人员200余名，经销商700余家，终端门店1万家以上，年营业收入近10亿元，每年上缴利税超过1个亿。                </p>
                <p style={{textIndent: '2em'}}>2014年，有友食品成立电商事业部，在天猫商城、京东商城、苏宁易购、一号店、阿里巴巴等平台开设网上旗舰店或销售平台，全力开拓电子商务发展空间。</p>
            </div>
        );
    }
}

