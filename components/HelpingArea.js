import React from 'react';
import Image from 'next/image';

const HelpingArea = () => {
    return (
        <div>
            <section className="mixer-area helping-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading mixer-heading">
                                <div className="section-icon">
                                    <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Give a helping hand for street children</h2>
                            </div>
                            <div className="helping-item">
                                <div className="row">
                                    <div className="col">
                                        <div className="helping-box helping-box1">
                                            <i className="icon-hamburger"></i>
                                            <h4>food</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box2">
                                            <i className="icon-water-bottle"></i>
                                            <h4>water</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box3">
                                            <i className="icon-health"></i>
                                            <h4>Medical</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-text-box">
                                <p className="helping__text">
                                    There are endless ways to touch lives and 
                                    restore a future to street children. 
                                    We specialize in sustainable and long term solutions 
                                    with the sole intention of ensuring reintegration 
                                    into the society as soon as possible for every child 
                                    and family in the streets. The most pressing needs for 
                                    these groups are medical care (due to the exposure 
                                    to every kind of element in the streets), food, and clean water.
                                    Dealing with these pressing needs provides a proper 
                                    stepping stone to build long lasting solutions for mental,
                                     physical and psychological wellness of the children and youths, 
                                    including in trainings, engagement in projects, counselling 
                                    and psychological support sessions, engagement in community
                                     activities, among others.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpingArea;
