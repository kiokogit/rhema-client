import React, {Component} from 'react';
import Image from 'next/image';
import Link from 'next/link';

class NavTwo extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        return (
            <header className={`header-area ${this.props?.other_class}`}>
                <div className="header-top-action">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="top-action-content">
                                    <div className="info-box info-box-1 d-flex align-items-center">
                                        <ul className="d-flex align-items-center">
                                            <li><Link href="#"><i className="fa fa-envelope"></i>rhemacompassionkenya.org@gmail.com</Link>
                                            </li>
                                            <li><Link href="#"><i className="fa fa-phone-square"></i>+254 728 495548</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="top-action-content info-action-content">
                                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                        <ul className="top-action-list d-flex align-items-center">
                                            <li className="action__text"><Link href="#">login</Link></li>
                                            <li className="action__text"><Link href="#">register</Link></li>
                                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                    <div className="container">
                        <div className="row ostion-top-wrap">
                            <div className="col-lg-5 col-sm-5 site-branding">
                                <div className="logo-action d-flex align-items-center">
                                    <div className="ostion-logo">
                                        <Link href="/">
                                            <div>
                                                <Image width={150} height={50} src="/images/rhema-logo-3.png" alt="Rhema logo" title="Rhema" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-sm-7 ostion-menu">
                                <div className="ostion-menu-innner">
                                    <div className="ostion-menu-content">
                                        <div className="navigation-top">
                                            <nav className="main-navigation">
                                                <ul>
                                                    <li className="active"><Link href="/"><div>Home</div></Link>
                                                        {/* <ul className="dropdown-menu-item">
                                                            <li><Link href=""><div>Home 1</div></Link></li>
                                                            <li><Link href="index2"><div>Home 2</div></Link></li>
                                                        </ul> */}
                                                    </li>
                                                    <li><Link href="#">causes</Link>
                                                        <ul className="dropdown-menu-item">
                                                            <li><Link href="causes"><div>causes</div></Link></li>
                                                            {/* <li><Link href="causes-detail"><div>causes detail</div></Link></li> */}
                                                            <li><Link href="donate"><div>donate now</div></Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="events">events</Link>
                                                        {/* <ul className="dropdown-menu-item">
                                                                <li><Link href="events"><div>events</div></Link></li>
                                                                <li><Link href="events-detail"><div>events detail</div></Link></li>
                                                        </ul> */}
                                                    </li>
                                                    <li><Link href="news">news</Link>
                                                        {/* <ul className="dropdown-menu-item">
                                                            <li><Link href="news"><div>news</div></Link></li>
                                                            <li><Link href="single-news"><div>news detail</div></Link></li>
                                                        </ul> */}
                                                    </li>
                                                    <li><Link href="#">rhema</Link>
                                                        <ul className="dropdown-menu-item">
                                                            <li><Link href="about"><div>about</div></Link></li>
                                                            <li><Link href="gallery"><div>gallery</div></Link></li>
                                                            <li><Link href="volunteer"><div>become a volunteer</div></Link></li>
                                                            <li><Link href="team"><div>our team</div></Link></li>
                                                            <li><Link href="sponsor"><div>sponsors</div></Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="contact"><div>contact</div></Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="mobile-menu-toggle">
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-nav-container">
                    <div className="humburger-menu">
                        <div className="humburger-menu-lines side-menu-close"></div>
                    </div>
                    <div className="side-menu-wrap">
                        <ul className="side-menu-ul">
                            <li className="sidenav__item"><Link href="/">home</Link>
                                {/* <span className="menu-plus-icon"></span> */}
                                {/* <ul className="side-sub-menu">
                                    <li><Link href=""><div>Home 1</div></Link></li>
                                    <li><Link href="index2"><div>Home 2</div></Link></li>
                                </ul> */}
                            </li>
                            <li className="sidenav__item"><Link href="#">causes</Link>
                                <span className="menu-plus-icon"></span>
                                <ul className="side-sub-menu">
                                    <li><Link href="causes"><div>causes</div></Link></li>
                                    {/* <li><Link href="causes-detail"><div>causes detail</div></Link></li> */}
                                    <li><Link href="donate"><div>donate now</div></Link></li>
                                </ul>
                            </li>
                            <li className="sidenav__item"><Link href="events">event</Link>
                                {/* <span className="menu-plus-icon"></span> */}
                                {/* <ul className="side-sub-menu">
                                    <li><Link href="events"><div>events</div></Link></li>
                                    <li><Link href="events-detail"><div>events detail</div></Link></li>
                                </ul> */}
                            </li>
                            <li className="sidenav__item"><Link href="news">news</Link>
                                {/* <span className="menu-plus-icon"></span>
                                <ul className="side-sub-menu">
                                    <li><Link href="news"><div>news</div></Link></li>
                                    <li><Link href="single-news"><div>news detail</div></Link></li>
                                </ul> */}
                            </li>
                            <li className="sidenav__item"><Link href="#">rhema</Link>
                                <span className="menu-plus-icon"></span>
                                <ul className="side-sub-menu">
                                    <li><Link href="about"><div>about</div></Link></li>
                                    <li><Link href="gallery"><div>gallery</div></Link></li>
                                    <li><Link href="volunteer"><div>become a volunteer</div></Link></li>
                                    <li><Link href="team"><div>our team</div></Link></li>
                                    <li><Link href="sponsor"><div>sponsors</div></Link></li>
                                </ul>
                            </li>
                            <li className="sidenav__item"><Link href="contact"><div>contact</div></Link></li>
                        </ul>
                        <ul className="side-social">
                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fa fa-youtube-play"></i></Link></li>
                            <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                        </ul>
                        <div className="side-btn">
                            <Link href="donate"><div className="theme-btn">donate now</div></Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavTwo;