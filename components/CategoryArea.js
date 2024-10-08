import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryArea = () => {
    return (
        <section className="mixer-area helping-area cat-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Browse by Categories</h2>
                            <p className="section__meta">browse cause now</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="helping-item">
                            <div className="row">
                                <div className="col">
                                    <div className="helping-cat-item">
                                        <div className="helping-box helping-box1">
                                            <i className="icon-praying"></i>
                                        </div>
                                        <h4><Link href="#">religion</Link></h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="helping-cat-item">
                                        <div className="helping-box helping-box2">
                                            <i className="icon-stethoscope"></i>
                                        </div>
                                        <h4><Link href="#">medical</Link></h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="helping-cat-item">
                                        <div className="helping-box helping-box3">
                                            <i className="icon-family"></i>
                                        </div>
                                        <h4><Link href="#">family</Link></h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="helping-cat-item">
                                        <div className="helping-box helping-box4">
                                            <i className="icon-mortarboard"></i>
                                        </div>
                                        <h4><Link href="#">education</Link></h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="helping-cat-item">
                                        <div className="helping-box helping-box5">
                                            <i className="icon-pet"></i>
                                        </div>
                                        <h4><Link href="#">animals</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryArea;
