import React, { Component } from 'react';
import _ from 'lodash';

import PropTypes from 'prop-types';
const groupList = [
    {
        "group": "凤爪系列",
        "member": [
            {
                "title": "山椒泡凤翅 100g",
                "src": "/imageRepository/3b6e4cdd-c317-4ad0-900e-3145ba9ab857.png",
                "id": "yryirx"
            },
            {
                "title": "泡凤爪（山椒味）220g",
                "src": "/imageRepository/aaec7dad-3f72-4ab0-ac92-b8950793b8ad.png",
                "id": "b1fevt"
            },
            {
                "title": "泡凤爪（山椒味）158g",
                "src": "/imageRepository/b6923c07-a503-402d-bc54-8ee4822a310d.png",
                "id": "nakxym"
            },
            {
                "title": "泡凤爪（山椒味）100g",
                "src": "/imageRepository/42fcb716-f9d3-4ee5-b376-5ae4019bbb17.png",
                "id": "9ylndl"
            },
            {
                "title": "泡凤爪（山椒味）70g",
                "src": "/imageRepository/a7f015f1-a3ea-4253-ab53-3e1d9b407a17.png",
                "id": "a1sagz"
            },
            {
                "title": "泡凤爪（红油泡椒味）130g",
                "src": "/imageRepository/cb66178e-9c49-40b8-a521-495e9503ff50.png",
                "id": "2o3auc"
            },
            {
                "title": "泡凤爪（红油泡椒味）100g",
                "src": "/imageRepository/83dc8e6a-a839-4d7a-9eff-3bc5117a791a.png",
                "id": "d2ksz8"
            }
        ]
    },
    {
        "group": "海鲜系列",
        "member": [
            {
                "title": "鱿鱼（孜然味） 158g",
                "src": "/imageRepository/75065407-7cb7-4b87-b01a-cf82b26707ba.png",
                "id": "11ell7"
            },
            {
                "title": "鱿鱼（孜然味） 90g",
                "src": "/imageRepository/4cf183c7-dc24-4822-86e3-22e8c67cf32b.png",
                "id": "ugzfmj"
            },
            {
                "title": "鱿鱼（香辣味） 158g",
                "src": "/imageRepository/2f9da83a-8acb-43a7-a4b7-714be541630a.png",
                "id": "2djd00"
            },
            {
                "title": "鱿鱼（香辣味） 90g",
                "src": "/imageRepository/18ecbf59-7e21-4261-8d55-6c88d526c45d.png",
                "id": "27zort"
            },
            {
                "title": "鱿鱼（山椒味） 158g",
                "src": "/imageRepository/2e755395-93a1-4ec1-989a-ed238e8496cf.png",
                "id": "aagfqs"
            },
            {
                "title": "鱿鱼（山椒味） 90g",
                "src": "/imageRepository/398f9e50-6eed-4ffd-bce8-c976e238fb08.png",
                "id": "7pllt6"
            },
            {
                "title": "带鱼（香辣味） 158g",
                "src": "/imageRepository/cd251b42-be39-41b4-9f03-621b1c49d76c.png",
                "id": "8azskx"
            },
            {
                "title": "带鱼（香辣味） 90g",
                "src": "/imageRepository/6e6ec405-7a98-409d-9af9-ff32429b8142.png",
                "id": "mymlxs"
            },
            {
                "title": "带鱼（五香味） 158g",
                "src": "/imageRepository/f9397f15-1595-4a35-911d-bf6b50d03fb0.png",
                "id": "5rhk10"
            },
            {
                "title": "带鱼（五香味） 90g",
                "src": "/imageRepository/203817f0-e6fc-4c5a-b062-857e53546507.png",
                "id": "38eudk"
            },
            {
                "title": "带鱼（山椒味） 158g",
                "src": "/imageRepository/bb372af8-4d2e-42ca-98b8-118549d788d9.png",
                "id": "ebwymu"
            },
            {
                "title": "带鱼（山椒味） 90g",
                "src": "/imageRepository/239687eb-ec3d-412f-9e39-1ee2eef43898.png",
                "id": "wfd41x"
            }
        ]
    },
    {
        "group": "皮晶系列",
        "member": [
            {
                "title": "猪皮晶（山椒味） 90g",
                "src": "/imageRepository/ef53f823-0791-459b-82c2-bfe7db3cfee1.png",
                "id": "a1h8jb"
            },
            {
                "title": "猪皮晶（山椒味） 60g",
                "src": "/imageRepository/3a6f128d-e84f-435a-bc54-a1b6907cf707.png",
                "id": "vb96rc"
            },
            {
                "title": "牛皮晶（孜然味） 100g",
                "src": "/imageRepository/e558c58a-e00f-4c4d-b6a8-c6c9b44b106b.png",
                "id": "jdxlnm"
            },
            {
                "title": "牛皮晶（香辣味） 100g",
                "src": "/imageRepository/85fe5bf0-5dad-4287-b18b-d1f0165f5cab.png",
                "id": "6k4wfe"
            },
            {
                "title": "牛皮晶（山椒味） 100g",
                "src": "/imageRepository/a5e8f88f-76cd-4d30-81ca-d2e6f4479593.png",
                "id": "epd21u"
            }
        ]
    },
    {
        "group": "卤香系列",
        "member": [
            {
                "title": "卤香豆干 160g",
                "src": "/imageRepository/1bc31915-2fc9-4caf-a71d-d423c5c28dee.png",
                "id": "94ile4"
            },
            {
                "title": "卤香豆干 100g",
                "src": "/imageRepository/191289aa-7b95-4c20-b1ad-c83f68336b9a.png",
                "id": "hp41v9"
            },
            {
                "title": "卤香鸭掌 80g",
                "src": "/imageRepository/4a50f01d-d49a-429d-96ce-36b2ddcefc8c.png",
                "id": "byjk3f"
            },
            {
                "title": "卤香小鸡翅 100g",
                "src": "/imageRepository/43a69b53-ab9c-4674-bdd8-66fa61556c86.png",
                "id": "ad3aue"
            },
            {
                "title": "卤香大鸡翅 120g",
                "src": "/imageRepository/91621b70-8450-4306-8348-9fd14e292db8.png",
                "id": "1x8gy9"
            }
        ]
    },
    {
        "group": "素食系列",
        "member": [
            {
                "title": "竹笋（山椒味） 158g",
                "src": "/imageRepository/4a231c9e-3645-4778-8ead-62ccfd7d47a3.png",
                "id": "1c98j5"
            },
            {
                "title": "竹笋（山椒味） 120g",
                "src": "/imageRepository/fa866007-0735-4ebe-8c6f-fe6ebd9a5cda.png",
                "id": "6bpasx"
            },
            {
                "title": "竹笋（山椒味） 70g",
                "src": "/imageRepository/43753de9-40b7-4bb0-af82-da3a1df6ba81.png",
                "id": "vbws2h"
            },
            {
                "title": "鲜笋（山椒味） 100g",
                "src": "/imageRepository/3778bb4b-7655-4380-8193-dc1652cd0db6.png",
                "id": "gmsv4r"
            },
            {
                "title": "鲜笋（泡椒味） 100g",
                "src": "/imageRepository/f674a26d-7363-47c5-a689-480cc55cb89b.png",
                "id": "eghtl8"
            },
            {
                "title": "笋尖（山椒味） 100g",
                "src": "/imageRepository/17640b0a-28f0-48bd-b5f0-0938cb80f061.png",
                "id": "mne25i"
            },
            {
                "title": "笋尖（泡椒味） 100g",
                "src": "/imageRepository/956cac16-d008-4251-a2d1-7521f185ea77.png",
                "id": "owuxcj"
            },
            {
                "title": "泡椒花生 158g",
                "src": "/imageRepository/4df41279-ddcc-4ff0-8fc7-9d376a601654.png",
                "id": "8czk9y"
            },
            {
                "title": "泡椒花生 100g",
                "src": "/imageRepository/e7f5d9ba-ca09-4dd9-81aa-c9390cd9ec6b.png",
                "id": "hchwxl"
            },
            {
                "title": "泡椒花生 70g",
                "src": "/imageRepository/c645fa94-e4b5-42fa-8072-46281bcc2f90.png",
                "id": "ndy5jf"
            },
            {
                "title": "香菇豆干 158g",
                "src": "/imageRepository/1871b2d3-9fad-4509-b7d2-b020219aad87.png",
                "id": "gx0q8y"
            },
            {
                "title": "香菇豆干 100g",
                "src": "/imageRepository/f1fed1b9-2244-4625-9918-bb35b7fa987d.png",
                "id": "neqyow"
            },
            {
                "title": "山椒豆干 158g",
                "src": "/imageRepository/86b40280-d74f-44ae-a750-303188091617.png",
                "id": "cel71v"
            },
            {
                "title": "山椒豆干 120g",
                "src": "/imageRepository/141c6fe2-0b7d-4691-8b17-dc8be4ca464b.png",
                "id": "uia4xr"
            },
            {
                "title": "山椒豆干 80g",
                "src": "/imageRepository/779410f6-0ad1-4175-a80d-eb24e1279d69.png",
                "id": "8isrr5"
            },
            {
                "title": "泡椒豆干 100g",
                "src": "/imageRepository/0e57c28d-4399-4ad9-98cb-fee6d68af354.png",
                "id": "j45z4h"
            },
            {
                "title": "麻辣豆干 160g",
                "src": "/imageRepository/0384b480-bdcf-4147-a979-3caaa32cc35c.png",
                "id": "1qqxw1"
            },
            {
                "title": "麻辣豆干 100g",
                "src": "/imageRepository/4b4ea186-9e92-4642-b340-88cdb97a8cff.png",
                "id": "eu9prf"
            }
        ]
    }
];
export default class Home extends Component {
    static propTypes = {
    };
    constructor() {
        super();

    }
    renderList() {
        let { id } = this.context.router.params;
        let group = [];

        if (id) {
            id = id - 1;
            group.push(groupList[id].member)
        } else {
            _.map(groupList, v => {
                group.push(v.member);
            })
        }
        let result = [];
        console.log("group", group);
        _.forEach(group, (gv, index) => {
            gv.forEach(v => {
                result.push(
                    <div key={v.id} className="goods">
                        <div className="goods-wrap">
                            <img src={`/public/img/0/${v.id}.png`} style={{width: '180px', height: '135px'}} />
                        </div>
                        <p>{v.title}</p>
                    </div>
                )
            })
        })
        return result;
    }
    render() {
        
        console.log("this.rou", this.context.router);
        return (
            <div>
                <h3 className="border-desc__center" style={{textAlign:'center', marignBottom: '30px'}}>企业简介</h3>
                <div style={{marginTop: '30px'}} className="goods-list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

Home.contextTypes = {
    router: PropTypes.object
};



