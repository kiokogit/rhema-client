import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const News = () => {
    return (
        <section className="blog-area blog-area2">
            <div className="container">
                <div className="row recent-post-wrap">
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">09 mar, 2019</span>
                                <Image width={570} height={354} src="/images/blog-img.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="single-news"><div>A place where start new
                                    life with peace</div></Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><Link href="#">mike hardson</Link></li>
                                    <li><Link href="#">3 comments</Link></li>
                                </ul>
                                <p className="news__content-text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                    sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                                <Link href="single-news"><div className="theme-btn">read more</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date2">07 mar, 2019</span>
                                <Image width={570} height={354} src="/images/blog-img5.jpg" alt="service-image"/>
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="single-news"><div>We can make a difference
                                    in families lives </div></Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><Link href="#">jessica brown</Link></li>
                                    <li><Link href="#">2 comments</Link></li>
                                </ul>
                                <p className="news__content-text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                    sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                                <Link href="single-news"><div className="theme-btn">read more</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date3">04 mar, 2019</span>
                                <Image width={570} height={354} src="/images/blog-img6.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="single-news"><div>Build school for poor
                                    childrens</div></Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><Link href="#">john smith</Link></li>
                                    <li><Link href="#">0 comments</Link></li>
                                </ul>
                                <p className="news__content-text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                    sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                                <Link href="single-news"><div className="theme-btn">read more</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date4">30 feb, 2019</span>
                                <Image width={570} height={354} src="/images/blog-img7.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="single-news"><div>Learn how access to clean
                                    water</div></Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><Link href="#">kevin hart</Link></li>
                                    <li><Link href="#">4 comments</Link></li>
                                </ul>
                                <p className="news__content-text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                    sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                                <Link href="single-news"><div className="theme-btn">read more</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">26 feb, 2019</span>
                                <Image width={570} height={354} src="/images/blog-img8.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="single-news"><div>Do something crazy to
                                    raise money</div></Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><Link href="#">christine eve</Link></li>
                                    <li><Link href="#">2 comments</Link></li>
                                </ul>
                                <p className="news__content-text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                    sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                                <Link href="single-news"><div className="theme-btn">read more</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date2">20 feb, 2019</span>
                                <Image width={570} height={354} src="/images/blog-img9.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="single-news"><div>Together to help the
                                    world better</div></Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><Link href="#">mike hardson</Link></li>
                                    <li><Link href="#">0 comments</Link></li>
                                </ul>
                                <p className="news__content-text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                    sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                                <Link href="single-news"><div className="theme-btn">read more</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
