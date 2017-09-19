import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        var galleryTop = new Swiper('#gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            effect : 'cube',
            spaceBetween: 10,
        });
        let container = document.getElementById('container');
        let clientHeight = document.body.clientHeight;
        container.style.height = clientHeight + 'px';
        // main.style.paddingTop = swiper.offsetHeight + 'px';
    }

    componentDidUpdate() {
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
                    <div className="content slideInLeft animated">THIS is TITle</div>
                </div>
                <Swiper />
                <div className="modal fade" id="modal-top" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                           
                            <div className="modal-body" id="modal-body" style={{height: '100%', overflow: 'auto'}}>
                                <button type="button" className="close" style={{fontSize: '60px', marginTop:'-20px'}} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                {this.props.children && React.cloneElement(this.props.children, this.props)}
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
