import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const NewsSingle = () => {
    return (
        <section className="causes-detail-area news-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <Image width={770} height={414} src="/images/img20.jpg" alt="" />
                                        <span className="blog__date">26 feb, 2019</span>
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title"><Link href="#">Do something crazy to raise money</Link>
                                        </h3>
                                        <ul className="blog__list">
                                            <li className="blog__dot-active"><Link href="#">christine eve</Link></li>
                                            <li><Link href="#">2 comments</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text">
                                        Aliq is notm hendr erit a augue insu image pellen tes que id erat quis
                                        sollicitud.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing ullam blandit hendrerit
                                        faucibus suspendisse. There are many variations of passages of Lorem Ipsum
                                        available,
                                        but the majority have suffered alteration in some form, by injected humour,
                                        or randomised words which do not look even slightly believable. If you are going
                                        to use a passage of Lorem Ipsum,
                                        you need to be sure there isnt anything embarrassing hidden in the middle of
                                        text.
                                    </p>
                                    <p className="causes__text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum ley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className="causes__text causes__text2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum ley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <div className="news-tags">
                                        <div className="news-tag-item-left">
                                    <span className="news-meta-tags">
                                        <span className="news-meta-title">Tags</span>
                                        <Link href="#">Charity</Link>
                                        <Link href="#">poor</Link>
                                        <Link href="#">love</Link>
                                    </span>
                                        </div>
                                        <div className="news-tag-item-right">
                                            <ul className="news-share">
                                                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-comment">
                                        <div className="post__boxed">
                                            <div className="post__boxed-img">
                                                <Image width={100} height={100} src="/images/post-box-img.jpg" alt="" />
                                            </div>
                                            <div className="post__boxed-content">
                                                <h3 className="post__boxed-title">kevin martin</h3>
                                                <p className="post__boxed-desc">
                                                    Cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs
                                                    condmentum
                                                    lightly believable. If you are going
                                                    to use a of you need to be sure there isnt anything
                                                    embarrassing.</p>
                                            </div>
                                        </div>
                                        <div className="comment__boxed">
                                            <h3 className="single__comment-title">Comments</h3>
                                            <ul className="comments-list">
                                                <li>
                                                    <div className="comment">
                                                        <div className="avatar-img">
                                                            <Image className="avatar__img" alt=""
                                                                 src="/images/comment-avatar.jpg" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <div className="meta-data">
                                                                <h4 className="comment__author">
                                                                    David marks
                                                                    <span className="comment__date">3 hours ago</span>
                                                                </h4>
                                                            </div>
                                                            <div className="comment-content">
                                                                <Link className="reply__btn theme-btn" href="#">Reply</Link>
                                                                <p className="comment__text">
                                                                    Sending love. My nephews Nick and Anthony Salaber
                                                                    are your teammates,
                                                                    so I know the caliber person you are.
                                                                    Our whole family is sending our best to you and your
                                                                    family.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment">
                                                        <div className="avatar-img">
                                                            <Image className="avatar__img" alt=""
                                                                 src="/images/comment-avatar2.jpg" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <div className="meta-data">
                                                                <h4 className="comment__author">
                                                                    Christine Eve
                                                                    <span className="comment__date">4 hours ago</span>
                                                                </h4>
                                                            </div>
                                                            <div className="comment-content">
                                                                <Link className="reply__btn theme-btn" href="#">Reply</Link>
                                                                <p className="comment__text">
                                                                    You area champ. Your in my thoughts and prayers
                                                                    every day.
                                                                    You arethe best teammate a bloke could ask for and
                                                                    were going to
                                                                    return the favour my being
                                                                    there for you every step along this journey. Stay
                                                                    strong
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="comment__form form-shared">
                                            <h3 className="single__comment-title">Leave a Comment</h3>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Full Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control"
                                                                   placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <textarea className="textarea" name="message"
                                                                      placeholder="Leave a Comment"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="theme-btn submit__btn">submit now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget sidebar-form">
                                <div className="form-shared">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="text" className="form-control" placeholder="Search" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="side-widget">
                                <h2 className="widget__title">Recent Posts</h2>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <Image width={59} height={59} src="/images/author-avatar5.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <h4 className="author__title author__title2"><Link href="/single-news">Learn
                                            how access to clean water</Link></h4>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <Image width={59} height={59} src="/images/author-avatar6.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <h4 className="author__title author__title2"><Link href="/single-news">Build
                                            school for poor childrens</Link></h4>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <Image width={59} height={59} src="/images/author-avatar7.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <h4 className="author__title author__title2"><Link href="/single-news">Together
                                            to help the world better</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="side-widget">
                                <h2 className="widget__title">Categories</h2>
                                <div className="side-cats">
                                    <ul>
                                        <li><Link href="#">charity</Link></li>
                                        <li><Link href="#">Fundrising</Link></li>
                                        <li><Link href="#">Donations</Link></li>
                                        <li><Link href="#">Save Lifes</Link></li>
                                        <li><Link href="#">Health</Link></li>
                                        <li><Link href="#">Education</Link></li>
                                        <li><Link href="#">Food</Link></li>
                                        <li><Link href="#">Water</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="side-widget">
                                <h2 className="widget__title">Popular Tags</h2>
                                <div className="side-tags">
                                    <ul>
                                        <li><Link href="#">charity</Link></li>
                                        <li><Link href="#">poor</Link></li>
                                        <li><Link href="#">love</Link></li>
                                        <li><Link href="#">donations</Link></li>
                                        <li><Link href="#">Health</Link></li>
                                        <li><Link href="#">save</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSingle;
