import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import Events from "../components/Events";

const EventsPage = () => {
    return (
        <Layout pageTitle="Events">
            <Events />
        </Layout>
    );
};

export default EventsPage;
