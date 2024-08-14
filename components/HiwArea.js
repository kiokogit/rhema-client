import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const HiwArea = () => {
    return (
        <section className="hiw-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg1">
                                <figure>
                                    <Image width={380} height={492} src="/images/hiw-img.jpg" alt="" />
                                        <h3 className="hiw-title">More charity better lives</h3>
                                        <div className="hiw-btn-box">
                                            <Link href="#" className="theme-btn">read more</Link>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg2">
                                <figure>
                                    <Image width={380} height={492} src="/images/hiw-img2.jpg" alt="" />
                                        <h3 className="hiw-title">How to become volunteer</h3>
                                        <div className="hiw-btn-box">
                                            <Link href="#" className="theme-btn">read more</Link>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg3">
                                <figure>
                                    <Image width={380} height={492} src="/images/hiw-img3.jpg" alt="" />
                                        <h3 className="hiw-title">Poor children education</h3>
                                        <div className="hiw-btn-box">
                                            <Link href="#" className="theme-btn">read more</Link>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiwArea;
