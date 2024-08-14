import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CausesArea = () => {
    return (
        <div>
            <section className="causes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-heading blog-heading text-center">
                                <div className="section-icon">
                                    <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Latest Causes</h2>
                                <p className="section__meta">help us now</p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-content-wrap">
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item1">
                                    <div className="blog-img">
                                        <Image width={370} height={317} src="/images/img1.jpg" alt="" />
                                    </div>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="23"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><Link href="/causes-detail">Provide Medical Help</Link>
                                        </h3>
                                        <p className="blog__desc">Now on Kawangware and Kibera, We are raising funds to provide for medical camps for the children there.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$5,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>123</span></li>
                                        </ul>
                                        <Link href="/donate" className="theme-btn">donate now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item2">
                                    <div className="blog-img">
                                        <Image width={370} height={317} src="/images/img2.jpg" alt="" />
                                            <span className="blog__tag"><i className="fa fa-flash"></i> trending</span>
                                    </div>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><Link href="/causes-detail">Learning / Training Camps</Link>
                                        </h3>
                                        <p className="blog__desc">Support project to train 45 youths in best skills, including coding, sewing and car mechanics.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$7,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>0</span></li>
                                        </ul>
                                        <Link href="/donate" className="theme-btn">donate now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item3">
                                    <div className="blog-img">
                                        <Image width={370} height={317} src="/images/img3.jpg" alt="" />
                                    </div>
                                    <div id="bar3" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="44"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><Link href="/causes-detail">Sustainable Food Supply</Link></h3>
                                        <p className="blog__desc">With a target of 7 communities each year to help with starting 
                                            sustainable food supply projects.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                        <Link href="/donate" className="theme-btn">donate now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="button-shared">
                            <Link href="/causes" className="theme-btn">View more</Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default CausesArea;
