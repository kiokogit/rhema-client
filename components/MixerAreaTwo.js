import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MixerAreaTwo = () => {
    return (
        <section className="mixer-area mixer-area3 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading mixer-heading">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title text__white">Our fingerprints on the lives we touch never
                                fade</h2>
                            <Link href="donate"><div className="theme-btn">start donation</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MixerAreaTwo;
