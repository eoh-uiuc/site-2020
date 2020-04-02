import React, { Component } from 'react';
import './styles.scss';
import OverviewVideo from '../../assets/EOH-Comes-to-You.mp4';

class EOHComesToYou extends Component {
    render() {
        return (
            <div className="dark-page virtual-EOH-page-wrapper">
                <p>We are excited to bring a little bit of EOH to your home! Check back later for videos explaining STEM activities that you can do at home. 
                    In the meantime, check out a message from the EOH Central Committee below. Thank you for your continued support!</p>
                <div className="overview-video-wrapper">
                    <video height={350} controls src={OverviewVideo} type="video/mp4" />
                </div>
            </div>
        );
    }
}

export default EOHComesToYou;