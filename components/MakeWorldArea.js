import React from 'react';
import Image from 'next/image';

const MakeWorldArea = () => {
    return (
        <section className="make-world-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading text-center">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Make World Happier</h2>
                            <p className="section__meta">help us now</p>
                        </div>
                    </div>
                </div>
                <div className="row world-static-wrap">
                    <div className="col-lg-4">
                        <div className="world-item">
                            <div className="world-img-box">
                                <Image width={370} height={365} src="/images/happy3.jpeg" alt="" />
                            </div>
                            <div className="world-img-bg world-img-bg1"></div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="world-item">
                            <div className="world-img-box">
                                <Image width={270} height={365} src="/images/happy2.jpeg" alt="" />
                            </div>
                            <div className="world-img-bg world-img-bg2"></div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="world-item">
                            <div className="world-img-box">
                                <Image width={470} height={365} src="/images/happy1.jpeg" alt="" />
                            </div>
                            <div className="world-img-bg world-img-bg3"></div>
                        </div>
                    </div>
                </div>
                <div className="row world-static-wrap2">
                    <div className="col-lg-5">
                        <div className="world-content">
                            <h3 className="world__title">
                                See how you can make a
                                difference to families lives with just <strong>$5 a month</strong>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="world-content">
                            <p className="world__desc">
                                Rhema compassion is committed to establishing 
                                long term projects and sustainable livelihoods of the poor, 
                                needy and the destitute in our societies across Kenya and in Africa at large. 
                                Such projects include easy-to-maintain low cost and innovative
                                kitchen gardens, easy and in high demand skills training, among others, 
                                even as we reach all with the powe and the light of the 
                                gospel of Jesus Christ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeWorldArea;
