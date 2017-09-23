import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Swiper from './home/swiper';
import LeftNav from './home/left-nav';
require('styles/global/style.scss');
require('styles/modules/base/index.scss');

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    constructor() {
        super();
    }
    componentDidMount() {

        let container = document.getElementById('container');
        let clientHeight = document.body.clientHeight;
        container.style.height = clientHeight + 'px';
        window.addEventListener('resize', _.debounce(() => {
            let container = document.getElementById('container');
            let clientHeight = document.body.clientHeight;
        }, 300));
    }

    componentDidUpdate() {
        $("#closeButton").mouseover(function(){
            $("#modal-top").modal('hide')
        });
    }
//     <section id="main">
//     <div className="left">
//         <LeftNav />
//     </div>
//     <div className="right">
//         {this.props.children && React.cloneElement(this.props.children, this.props)}
//     </div>
// </section>
    render() {

        return (
            <div id="container">
                <div id="title">
                    <div id="title-name" className="content slideInLeft animated">品味有友 分享快乐</div>
                </div>
                <Swiper />
                <div className="modal fade" id="modal-top" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                           
                            <div className="modal-body" id="modal-body" style={{height: '100%', overflow: 'auto'}}>
                                <button type="button" className="close" id="closeButton" style={{fontSize: '60px', marginTop:'-20px'}}><span aria-hidden="true">&times;</span></button>
                                {this.props.children && React.cloneElement(this.props.children, this.props)}
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
