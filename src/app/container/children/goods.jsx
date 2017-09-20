import React, { Component } from 'react';
import _ from 'lodash';

import PropTypes from 'prop-types';
const groupList = [
    {
        title: '带鱼（山椒味）90g',
        src: '1'
    },
    {
        title: '带鱼（五香味）90g',
        src: '2'
    },
    {
        title: '带鱼（香辣味）90g',
        src: '3'
    },
    {
        title: '卤辣大鸡翅120g',
        src: '4'
    },
    {
        title: '卤香豆干100g',
        src: '5'
    },
    {
        title: '卤香小鸡翅100g',
        src: '6'
    },
    {
        title: '卤香鸭掌80g',
        src: '7'
    },
    {
        title: '麻辣豆干100g',
        src: '8'
    },
    {
        title: '牛皮晶（山椒味）100g',
        src: '9'
    },
    {
        title: '牛皮晶（香辣味）100g',
        src: '10'
    },
    {
        title: '牛皮晶（孜然味）100g',
        src: '11'
    },
    {
        title: '泡凤爪（红油泡椒味）130g',
        src: '12'
    },
    {
        title: '泡凤爪（山椒味）220g',
        src: '13'
    },
    {
        title: '泡椒豆干100g',
        src: '14'
    },
    {
        title: '泡椒花生100g',
        src: '15'
    },
    {
        title: '山椒豆干120g',
        src: '16'
    },
    {
        title: '山椒泡凤翅100g',
        src: '17'
    },
    {
        title: '笋尖（泡椒味）100g',
        src: '18'
    },
    {
        title: '笋尖（山椒味）100g',
        src: '19'
    },
    {
        title: '鲜笋（泡椒味）100g',
        src: '20'
    },
    {
        title: '鲜笋（山椒味）100g',
        src: '21'
    },
    {
        title: '香菇豆干100g',
        src: '22'
    },
    {
        title: '鱿鱼（山椒味）90g',
        src: '23'
    },
    {
        title: '鱿鱼（香辣味）90g',
        src: '24'
    },
    {
        title: '鱿鱼（孜然味）90g',
        src: '25'
    },
    {
        title: '猪皮晶（山椒味）90g',
        src: '26'
    },
    {
        title: '竹笋（山椒味）120g',
        src: '27'
    }
];
function spliteArrayPerFour(array) {
    if (!array instanceof Array) {
        return [];
    }
    let result = [];
    for (let i = 0, len = array.length; i < len; i += 4) {
        result.push(array.slice(i, i+4));
    }

    return result;
}

export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    renderList() {
        // let { id } = this.context.router.params;
        let result = [];
        groupList.forEach(v => {
            result.push(
                <div key={v.src} className="flex-item-5">
                    <div className="goods-wrap__img">
                        <img src={`/public/img/goods/${v.src}.png`} />
                    </div>
                    <p>{v.title}</p>
                </div>
            )
        })
        return spliteArrayPerFour(result);
    }
    render() {
        let result = this.renderList();
        let items = [];
        result.forEach((v, index) => {
            items.push(
                <div id={index} className="flex-column flex-between">
                    {v}
                </div>
            )
        })
        return (
            <div className="goods-wrap" style={{height: '100%'}}>
                <div className="goods-wrap__right">
                    {items}
                </div>
            </div>
        );
    }
}

Home.contextTypes = {
    router: PropTypes.object
};



