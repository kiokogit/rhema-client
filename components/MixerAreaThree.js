import React, {Component} from 'react';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

class MixerAreaThree extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="mixer-area mixer-area3 mixer-area4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon"/>
                                </div>
                                <h2 className="section__title text__white">We Make a Difference in their Lives</h2>
                                <p className="section__meta">news and updates</p>
                                <p className="section__desc text__white">
                                    For more than 5 years now, we have made a
                                     difference in many lives across the country. 
                                     Our activities, from medical camps, street feeding programs, 
                                     support and counselling groups and many others have come in handy for 
                                     the vulnerable in society.
                                </p>
                                <a href="#" className="theme-btn">learn more</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mixer-video-content">
                                <Image width={570} height={424} src="/images/mixer-img.jpg" alt=""/>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='RQu7jpcNUWI'
                                            onClose={() => this.setState({isOpen: false})}/>
                                <div onClick={this.openModal} className="mfp-iframe video-play-btn" title="Play Video">
                                    <i
                                        className="fa fa-play"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default MixerAreaThree;
