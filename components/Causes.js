import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Causes = () => {
    return (
        <section className="causes-area causes-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <Image width={370} height={317} src="/images/img1.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="causes-detail">Save Poor Childrens</Link>
                                    </h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="donate"> <div className="theme-btn" >donate now </div></Link>
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
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="causes-detail"><div>They Want to Study</div></Link></h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="donate"><div className="theme-btn">donate now</div></Link>
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
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="causes-detail"><div>Healthy Food for All</div></Link>
                                    </h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="donate"><div className="theme-btn">donate now</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item4">
                                <div className="blog-img">
                                    <Image width={370} height={317} src="/images/img10.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="causes-detail"><div>Need Educations</div></Link></h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="donate"><div className="theme-btn">donate now</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <Image width={370} height={317} src="/images/img2.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="causes-detail"><div>Clean Water Issues</div></Link></h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="donate"><div className="theme-btn">donate now</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <Image width={370} height={317} src="/images/img11.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="causes-detail"><div>Help the Eco System</div></Link>
                                    </h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="donate"><div className="theme-btn">donate now</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Causes;
