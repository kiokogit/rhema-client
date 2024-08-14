import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import Volunteer from "../components/Volunteer";

const VolunteerPage = () => {
    return (
        <Layout pageTitle="Volunteer">
            <Volunteer />
        </Layout>
    );
};

export default VolunteerPage;
