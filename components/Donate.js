import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Donate = () => {
    const link2 = "https://www.paypal.com/donate/?hosted_button_id=KUH56ALFQRWF2"
    return (
        <section className="donate-area2 team-area team-area2 text-center">
            <div className="container">
                <div className="row team-content-wrap">
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-item team-item3">
                                <Link href={link2} target='_blank'>
                                    <div className="team__img">
                                        <Image width={100} height={200} src="/images/paypal img.jpg" alt="team image" />
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title">Click here</h3>
                                        <span className="team__title-meta">To donate via card or paypal</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-item team-item2">
                                <div className="team__img">
                                    <Image width={100} height={200} src="/images/mpesa-coop.webp" alt="team image" />
                                </div>
                                <div className="team__title">
                                    <h3 className="team__title-title">Paybill No: 400200</h3>
                                    <span className="team__title-meta">Account No: 17491</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-item team-item1">
                                <div className="team__img">
                                    <Image width={100} height={200} src="/images/coop.jpg" alt="team image" />
                                </div>
                                <div className="team__title">
                                    <h3 className="team__title-title">Acc: 01134801152800</h3>
                                    <span className="team__title-meta">Name: Rhema Compassion Organization</span>
                                    <h3 className="team__title-meta">SWIFT CODE: Kcookena</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-item team-item2">
                                <div className="team__img">
                                    <Image width={100} height={200} src="/images/cash.jpg" alt="team image" />
                                </div>
                                <div className="team__title">
                                    <h3 className="team__title-title">Call: +254 728 495 548</h3>
                                    <span className="team__title-meta">For CASH OR in kind</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
