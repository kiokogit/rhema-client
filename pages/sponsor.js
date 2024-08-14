import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import Sponsor from "../components/Sponsor";


const SponsorPage = () => {
    return (
        <Layout pageTitle="Sponsors">
            <Sponsor />
        </Layout>
    );
};

export default SponsorPage;
