import React from 'react';
import Layout from "../components/Layout";
import Donate from "../components/Donate";
// import Causes from '@/components/Causes';
import CausesArea from '@/components/CausesArea';

const DonatePage = () => {
    return (
        <Layout pageTitle="Donate">
            <CausesArea />
            <Donate />
        </Layout>
    );
};

export default DonatePage;
