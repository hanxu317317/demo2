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
                <h3 style={{textAlign:'center'}}>企业员工</h3>
                <h4>1. 员工培训</h4>
                <p style={{textIndent: '2em'}}>
                    有友食品为丰富员工知识与提升技能设立了全面的培训体系，覆盖新员工、一线员工、中层管理及高层管理者。对新员工设立了入职培训课程，对生产一线员工安排了安全生产系列培训课程，包括集中授课、劳动技能比赛等。此外还有驾驶员培训、职业资格认证培训及专家主题讲座。
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/member_1.png" />
                </div>

                <h4>2. 员工关爱</h4>
                <p style={{textIndent: '2em'}}>
                    有友食品以人为本，非常重视员工福祉，公司遵守合法与公平的雇佣条款，提供安全、健康、绿色环保的办公环境。在法定福利外，每位员工最高能够享受到6600元的补充福利，包括节日礼物、慰问津贴、长期服务奖、员工子女奖学金等多项内容，公司每年用于这一方面的投入超过100万元。
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/member_2.png" />
                </div>

                <h4>3. 高管讲堂</h4>
                <p style={{textIndent: '2em'}}>
                    根据事业发展的规划阶梯，有友食品在2015年正式推出高管讲坛，通过一个结构更明确，更加指向竞争力的学习和提升方式，帮助员工获取职业生涯所必需的技能和竞争力。高管讲坛的培训课程面向公司管理层领导及负有管理责任的一线管理人员，涵盖了管理、领导力、培训、团队建设等方面的内容，所有负有管理责任的员工都要参与一系列的重点课程培训，以提高他们在领导和管理方面的技能，建立更高效的团队，从而成就企业百年老店的发展目标。
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/member_3.png" />
                </div>
                <h4>4. 在线学习</h4>
                <p style={{textIndent: '2em'}}>
                    为了满足员工“灵活学习、自我提升”的需求，2013年起，有友食品将员工培训从教室中搬到了网络上，开设在线学习平台。在线学习模块涉及的核心才能包括：工作成效、适应与创新、分析决策与解决问题、进取精神与成效为本、建立关系与沟通等。
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src="/public/img/member_4.png" />
                </div>
            </div>
        );
    }
}

